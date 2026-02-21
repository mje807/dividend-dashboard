import { Link } from "react-router";
import { ArrowLeft, CalendarDays, DollarSign } from "lucide-react";
import { holdings } from "~/data/portfolio";

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

    if (h.dividendFrequency === "monthly") {
      for (let m = 1; m <= 12; m++) {
        const lastDay = new Date(year, m, 0).getDate();
        const exDivDay = lastDay - 2;

        events.push({
          ticker: h.ticker,
          color: h.color,
          type: "ex-div",
          date: `${year}-${String(m).padStart(2, "0")}-${String(exDivDay).padStart(2, "0")}`,
          amountKRW: annualDivKRW / 12,
          amountRaw: annualDivRaw / 12,
          currency: h.currency ?? "USD",
        });

        const payMonth = m === 12 ? 1 : m + 1;
        const payYear = m === 12 ? year + 1 : year;
        events.push({
          ticker: h.ticker,
          color: h.color,
          type: "payment",
          date: `${payYear}-${String(payMonth).padStart(2, "0")}-15`,
          amountKRW: annualDivKRW / 12,
          amountRaw: annualDivRaw / 12,
          currency: h.currency ?? "USD",
        });
      }
    } else {
      // 분기 배당: 3, 6, 9, 12월
      for (const m of [3, 6, 9, 12]) {
        events.push({
          ticker: h.ticker,
          color: h.color,
          type: "ex-div",
          date: `${year}-${String(m).padStart(2, "0")}-20`,
          amountKRW: annualDivKRW / 4,
          amountRaw: annualDivRaw / 4,
          currency: h.currency ?? "USD",
        });

        const payMonth = m === 12 ? 1 : m + 1;
        const payYear = m === 12 ? year + 1 : year;
        events.push({
          ticker: h.ticker,
          color: h.color,
          type: "payment",
          date: `${payYear}-${String(payMonth).padStart(2, "0")}-10`,
          amountKRW: annualDivKRW / 4,
          amountRaw: annualDivRaw / 4,
          currency: h.currency ?? "USD",
        });
      }
    }
  }

  return events.sort((a, b) => a.date.localeCompare(b.date));
}

export default function Calendar() {
  const allEvents = generateDividendEvents();
  const now = new Date();
  const year = now.getFullYear();
  const currentMonth = now.getMonth() + 1;
  const nextMonth = currentMonth === 12 ? 1 : currentMonth + 1;
  const nextMonthYear = currentMonth === 12 ? year + 1 : year;

  const upcoming = allEvents
    .filter((e) => new Date(e.date) >= now)
    .slice(0, 12);

  const thisMonthEvents = allEvents.filter((e) =>
    e.date.startsWith(`${year}-${String(currentMonth).padStart(2, "0")}`)
  );
  const nextMonthEvents = allEvents.filter((e) =>
    e.date.startsWith(
      `${nextMonthYear}-${String(nextMonth).padStart(2, "0")}`
    )
  );

  // 연간 배당 합계 (KRW 환산)
  const totalYearDivKRW = holdings.reduce((s, h) => {
    const annual = h.annualDividendPerShare * h.shares;
    return s + (h.currency === "USD" ? annual * USD_TO_KRW : annual);
  }, 0);

  // 이번 달 지급 합계
  const thisMonthPayKRW = thisMonthEvents
    .filter((e) => e.type === "payment")
    .reduce((s, e) => s + e.amountKRW, 0);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      {/* 헤더 */}
      <div className="flex items-center gap-4 mb-8">
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
        >
          <ArrowLeft size={16} />
          대시보드
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-white">📅 배당 캘린더</h1>
          <p className="text-gray-400 text-sm mt-1">{year}년 배당 일정</p>
        </div>
      </div>

      {/* 연간 요약 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-900 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign size={18} className="text-yellow-400" />
            <span className="text-gray-400 text-xs">{year}년 예상 총 배당</span>
          </div>
          <div className="text-2xl font-bold">
            ₩{Math.round(totalYearDivKRW).toLocaleString()}
          </div>
          <div className="text-gray-400 text-xs mt-1">세전 · KRW 환산 기준</div>
        </div>
        <div className="bg-gray-900 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <CalendarDays size={18} className="text-indigo-400" />
            <span className="text-gray-400 text-xs">이번 달 배당 건수</span>
          </div>
          <div className="text-2xl font-bold">
            {thisMonthEvents.filter((e) => e.type === "payment").length}건
          </div>
          <div className="text-gray-400 text-xs mt-1">{currentMonth}월 지급 예정</div>
        </div>
        <div className="bg-gray-900 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign size={18} className="text-green-400" />
            <span className="text-gray-400 text-xs">이번 달 예상 수령액</span>
          </div>
          <div className="text-2xl font-bold">
            ₩{Math.round(thisMonthPayKRW).toLocaleString()}
          </div>
          <div className="text-gray-400 text-xs mt-1">세전 · KRW 환산 기준</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MonthSection
          title={`${currentMonth}월 배당 일정`}
          events={thisMonthEvents}
        />
        <MonthSection
          title={`${nextMonth}월 배당 일정`}
          events={nextMonthEvents}
        />
      </div>

      {/* 다가오는 배당 */}
      <div className="mt-6 bg-gray-900 rounded-xl overflow-hidden">
        <div className="p-5 border-b border-gray-800">
          <h2 className="text-sm font-semibold text-gray-400">
            다가오는 배당 일정 (상위 12건)
          </h2>
        </div>
        <div className="divide-y divide-gray-800">
          {upcoming.length === 0 ? (
            <div className="p-5 text-gray-500 text-sm">예정된 일정 없음</div>
          ) : (
            upcoming.map((e, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-5 py-3 hover:bg-gray-800/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: e.color }}
                  />
                  <span className="font-semibold text-sm">{e.ticker}</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      e.type === "ex-div"
                        ? "bg-red-900/40 text-red-400"
                        : "bg-green-900/40 text-green-400"
                    }`}
                  >
                    {e.type === "ex-div" ? "배당락" : "지급"}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-yellow-400">
                    {formatAmount(e.amountKRW, e.amountRaw, e.currency)}
                  </span>
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

function MonthSection({
  title,
  events,
}: {
  title: string;
  events: DividendEvent[];
}) {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden">
      <div className="p-5 border-b border-gray-800">
        <h2 className="text-sm font-semibold text-gray-400">{title}</h2>
      </div>
      {events.length === 0 ? (
        <div className="p-5 text-gray-500 text-sm">일정 없음</div>
      ) : (
        <div className="divide-y divide-gray-800">
          {events.map((e, i) => (
            <div
              key={i}
              className="flex items-center justify-between px-5 py-3"
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: e.color }}
                />
                <span className="font-semibold text-sm">{e.ticker}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    e.type === "ex-div"
                      ? "bg-red-900/40 text-red-400"
                      : "bg-green-900/40 text-green-400"
                  }`}
                >
                  {e.type === "ex-div" ? "배당락" : "지급"}
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-yellow-400">
                  {formatAmount(e.amountKRW, e.amountRaw, e.currency)}
                </span>
                <span className="text-gray-400">{e.date.slice(5)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
