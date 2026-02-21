import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, CalendarDays, DollarSign, ChevronLeft, ChevronRight, X } from "lucide-react";
import { holdings } from "~/data/portfolio";
import { getMetrics } from "~/data/metrics";

export function meta() {
  return [{ title: "배당 캘린더" }];
}

const USD_TO_KRW = 1430;

interface DividendEvent {
  ticker: string;
  color: string;
  type: "ex-div" | "payment";
  date: string; // YYYY-MM-DD
  amountKRW: number;
  amountRaw: number;
  currency: string;
}

function formatAmount(amountKRW: number, amountRaw: number, currency: string) {
  if (currency === "USD") return `$${amountRaw.toFixed(2)}`;
  return `₩${Math.round(amountKRW).toLocaleString()}`;
}

function generateDividendEvents(): DividendEvent[] {
  const events: DividendEvent[] = [];
  const year = new Date().getFullYear();

  for (const h of holdings) {
    if (h.annualDividendPerShare === 0) continue;

    const annualDivRaw = h.annualDividendPerShare * h.shares;
    const annualDivKRW =
      h.currency === "USD" ? annualDivRaw * USD_TO_KRW : annualDivRaw;

    // metrics에서 실제 배당락일 가져오기 (있으면 사용)
    const m = getMetrics(h.ticker);
    const realExDiv = m?.exDividendDate && m.exDividendDate !== "N/A" ? m.exDividendDate : null;

    if (h.dividendFrequency === "monthly") {
      for (let month = 1; month <= 12; month++) {
        const lastDay = new Date(year, month, 0).getDate();
        let exDivDay = lastDay - 2;

        // 실제 배당락일이 있고 올해 이번 달이면 그걸 사용
        if (realExDiv) {
          const rd = new Date(realExDiv);
          if (rd.getFullYear() === year && rd.getMonth() + 1 === month) {
            exDivDay = rd.getDate();
          }
        }

        const exDate = `${year}-${String(month).padStart(2, "0")}-${String(exDivDay).padStart(2, "0")}`;
        const payMonth = month === 12 ? 1 : month + 1;
        const payYear = month === 12 ? year + 1 : year;
        const payDate = `${payYear}-${String(payMonth).padStart(2, "0")}-15`;

        events.push({ ticker: h.ticker, color: h.color, type: "ex-div", date: exDate, amountKRW: annualDivKRW / 12, amountRaw: annualDivRaw / 12, currency: h.currency ?? "USD" });
        events.push({ ticker: h.ticker, color: h.color, type: "payment", date: payDate, amountKRW: annualDivKRW / 12, amountRaw: annualDivRaw / 12, currency: h.currency ?? "USD" });
      }
    } else {
      for (const month of [3, 6, 9, 12]) {
        let exDivDay = 20;

        if (realExDiv) {
          const rd = new Date(realExDiv);
          if (rd.getFullYear() === year && rd.getMonth() + 1 === month) {
            exDivDay = rd.getDate();
          }
        }

        const exDate = `${year}-${String(month).padStart(2, "0")}-${String(exDivDay).padStart(2, "0")}`;
        const payMonth = month === 12 ? 1 : month + 1;
        const payYear = month === 12 ? year + 1 : year;
        const payDate = `${payYear}-${String(payMonth).padStart(2, "0")}-10`;

        events.push({ ticker: h.ticker, color: h.color, type: "ex-div", date: exDate, amountKRW: annualDivKRW / 4, amountRaw: annualDivRaw / 4, currency: h.currency ?? "USD" });
        events.push({ ticker: h.ticker, color: h.color, type: "payment", date: payDate, amountKRW: annualDivKRW / 4, amountRaw: annualDivRaw / 4, currency: h.currency ?? "USD" });
      }
    }
  }

  return events.sort((a, b) => a.date.localeCompare(b.date));
}

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"];
const MONTH_NAMES = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];

// 달력 격자에 쓸 날짜 배열 (이전 달 빈칸 포함)
function buildCalendarGrid(year: number, month: number) {
  const firstDow = new Date(year, month - 1, 1).getDay(); // 0=Sun
  const daysInMonth = new Date(year, month, 0).getDate();
  const grid: (number | null)[] = [];
  for (let i = 0; i < firstDow; i++) grid.push(null);
  for (let d = 1; d <= daysInMonth; d++) grid.push(d);
  while (grid.length % 7 !== 0) grid.push(null);
  return grid;
}

export default function Calendar() {
  const now = new Date();
  const currentYear = now.getFullYear();
  const [viewMonth, setViewMonth] = useState(now.getMonth() + 1);
  const [viewYear, setViewYear] = useState(currentYear);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const allEvents = generateDividendEvents();

  // 달 이동
  function prevMonth() {
    if (viewMonth === 1) { setViewMonth(12); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  }
  function nextMonth() {
    if (viewMonth === 12) { setViewMonth(1); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  }

  const grid = buildCalendarGrid(viewYear, viewMonth);
  const monthStr = `${viewYear}-${String(viewMonth).padStart(2, "0")}`;

  // 날짜 -> 이벤트 맵
  const eventsByDate = new Map<string, DividendEvent[]>();
  for (const e of allEvents) {
    const list = eventsByDate.get(e.date) ?? [];
    list.push(e);
    eventsByDate.set(e.date, list);
  }

  // 이번 달 지급 합계
  const monthPayments = allEvents.filter(e => e.type === "payment" && e.date.startsWith(monthStr));
  const monthPayKRW = monthPayments.reduce((s, e) => s + e.amountKRW, 0);

  // 선택된 날짜의 이벤트
  const selectedEvents = selectedDate ? (eventsByDate.get(selectedDate) ?? []) : [];

  // upcoming (오늘 이후)
  const upcoming = allEvents.filter(e => new Date(e.date) >= now).slice(0, 12);

  // 연간 배당 합계
  const totalYearDivKRW = holdings.reduce((s, h) => {
    const annual = h.annualDividendPerShare * h.shares;
    return s + (h.currency === "USD" ? annual * USD_TO_KRW : annual);
  }, 0);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      {/* 헤더 */}
      <div className="flex items-center gap-4 mb-8">
        <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
          <ArrowLeft size={16} />
          대시보드
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-white">📅 배당 캘린더</h1>
          <p className="text-gray-400 text-sm mt-1">{viewYear}년 배당 일정</p>
        </div>
      </div>

      {/* 연간 요약 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-900 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign size={18} className="text-yellow-400" />
            <span className="text-gray-400 text-xs">{currentYear}년 예상 연 배당</span>
          </div>
          <div className="text-2xl font-bold">₩{Math.round(totalYearDivKRW).toLocaleString()}</div>
          <div className="text-gray-400 text-xs mt-1">세전 · KRW 환산 기준</div>
        </div>
        <div className="bg-gray-900 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <CalendarDays size={18} className="text-indigo-400" />
            <span className="text-gray-400 text-xs">{MONTH_NAMES[viewMonth - 1]} 지급 건수</span>
          </div>
          <div className="text-2xl font-bold">{monthPayments.length}건</div>
          <div className="text-gray-400 text-xs mt-1">{viewMonth}월 지급 예정</div>
        </div>
        <div className="bg-gray-900 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign size={18} className="text-green-400" />
            <span className="text-gray-400 text-xs">{MONTH_NAMES[viewMonth - 1]} 예상 수령액</span>
          </div>
          <div className="text-2xl font-bold">₩{Math.round(monthPayKRW).toLocaleString()}</div>
          <div className="text-gray-400 text-xs mt-1">세전 · KRW 환산 기준</div>
        </div>
      </div>

      {/* 달력 + 사이드패널 */}
      <div className="flex gap-4 mb-8">
        {/* 달력 */}
        <div className="bg-gray-900 rounded-xl p-5 flex-1 min-w-0">
          {/* 월 네비게이션 */}
          <div className="flex items-center justify-between mb-5">
            <button onClick={prevMonth} className="p-2 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors">
              <ChevronLeft size={18} />
            </button>
            <h2 className="text-lg font-bold text-white">
              {viewYear}년 {MONTH_NAMES[viewMonth - 1]}
            </h2>
            <button onClick={nextMonth} className="p-2 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors">
              <ChevronRight size={18} />
            </button>
          </div>

          {/* 요일 헤더 */}
          <div className="grid grid-cols-7 mb-2">
            {WEEKDAYS.map((d, i) => (
              <div key={d} className={`text-center text-xs py-1.5 font-medium ${i === 0 ? "text-red-400" : i === 6 ? "text-blue-400" : "text-gray-500"}`}>
                {d}
              </div>
            ))}
          </div>

          {/* 날짜 격자 */}
          <div className="grid grid-cols-7 gap-0.5">
            {grid.map((day, idx) => {
              if (!day) return <div key={`empty-${idx}`} className="aspect-square" />;
              const dateStr = `${viewYear}-${String(viewMonth).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
              const dayEvents = eventsByDate.get(dateStr) ?? [];
              const isToday = dateStr === `${currentYear}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
              const isSelected = dateStr === selectedDate;
              const dow = (idx) % 7;
              const isSun = dow === 0;
              const isSat = dow === 6;

              return (
                <div
                  key={dateStr}
                  onClick={() => setSelectedDate(isSelected ? null : dateStr)}
                  className={`
                    relative p-1 rounded-lg cursor-pointer transition-colors min-h-[4rem] flex flex-col
                    ${isSelected ? "bg-indigo-800/60 ring-1 ring-indigo-500" : isToday ? "bg-indigo-950/60 ring-1 ring-indigo-700" : "hover:bg-gray-800/50"}
                  `}
                >
                  <span className={`text-xs font-medium mb-0.5 w-5 h-5 flex items-center justify-center rounded-full
                    ${isToday ? "bg-indigo-500 text-white" : isSun ? "text-red-400" : isSat ? "text-blue-400" : "text-gray-400"}`}>
                    {day}
                  </span>
                  <div className="flex flex-wrap gap-0.5 overflow-hidden">
                    {dayEvents.slice(0, 3).map((e, i) => (
                      <span
                        key={i}
                        className={`text-[9px] px-1 py-0.5 rounded font-medium leading-none
                          ${e.type === "ex-div" ? "bg-red-900/70 text-red-300" : "bg-green-900/70 text-green-300"}`}
                        title={`${e.ticker} ${e.type === "ex-div" ? "배당락" : "지급"}`}
                      >
                        {e.ticker.length > 4 ? e.ticker.slice(0, 4) : e.ticker}
                      </span>
                    ))}
                    {dayEvents.length > 3 && (
                      <span className="text-[9px] text-gray-500">+{dayEvents.length - 3}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-4 mt-4 text-xs text-gray-500">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-sm bg-red-900/70 inline-block" />배당락일
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-sm bg-green-900/70 inline-block" />지급일
            </div>
          </div>
        </div>

        {/* 사이드패널: 선택 날짜 상세 */}
        <div className={`bg-gray-900 rounded-xl p-5 w-72 flex-shrink-0 transition-opacity duration-200 ${selectedDate ? "opacity-100" : "opacity-40"}`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-white">
              {selectedDate ? `📆 ${selectedDate.slice(5).replace("-", "/")} 일정` : "날짜를 선택하세요"}
            </h3>
            {selectedDate && (
              <button onClick={() => setSelectedDate(null)} className="text-gray-500 hover:text-white">
                <X size={14} />
              </button>
            )}
          </div>

          {selectedEvents.length === 0 ? (
            <div className="text-gray-600 text-sm">이 날은 배당 일정 없음</div>
          ) : (
            <div className="space-y-3">
              {selectedEvents.map((e, i) => (
                <div key={i} className="bg-gray-800 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: e.color }} />
                    <span className="font-bold text-white text-sm">{e.ticker}</span>
                    <span className={`text-xs px-1.5 py-0.5 rounded-full ml-auto ${e.type === "ex-div" ? "bg-red-900/50 text-red-400" : "bg-green-900/50 text-green-400"}`}>
                      {e.type === "ex-div" ? "배당락" : "지급"}
                    </span>
                  </div>
                  <div className="text-yellow-400 font-semibold text-sm">
                    {formatAmount(e.amountKRW, e.amountRaw, e.currency)}
                  </div>
                </div>
              ))}

              {/* 선택 날 합계 */}
              {selectedEvents.filter(e => e.type === "payment").length > 0 && (
                <div className="border-t border-gray-700 pt-3">
                  <div className="text-xs text-gray-500 mb-1">이날 총 수령 (KRW 환산)</div>
                  <div className="text-green-400 font-bold">
                    ₩{Math.round(selectedEvents.filter(e => e.type === "payment").reduce((s, e) => s + e.amountKRW, 0)).toLocaleString()}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* 다가오는 배당 일정 */}
      <div className="bg-gray-900 rounded-xl overflow-hidden">
        <div className="p-5 border-b border-gray-800">
          <h2 className="text-sm font-semibold text-gray-400">다가오는 배당 일정 (상위 12건)</h2>
        </div>
        <div className="divide-y divide-gray-800">
          {upcoming.length === 0 ? (
            <div className="p-5 text-gray-500 text-sm">예정된 일정 없음</div>
          ) : (
            upcoming.map((e, i) => (
              <div key={i} className="flex items-center justify-between px-5 py-3 hover:bg-gray-800/30 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: e.color }} />
                  <span className="font-semibold text-sm">{e.ticker}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${e.type === "ex-div" ? "bg-red-900/40 text-red-400" : "bg-green-900/40 text-green-400"}`}>
                    {e.type === "ex-div" ? "배당락" : "지급"}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-yellow-400">{formatAmount(e.amountKRW, e.amountRaw, e.currency)}</span>
                  <span className="text-gray-400">{e.date}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
