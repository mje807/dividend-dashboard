import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("calendar", "routes/calendar.tsx"),
  route("watchlist", "routes/watchlist.tsx"),
  route("watchlist/:ticker", "routes/stock-detail.tsx"),
  route("growth", "routes/growth.tsx"),
  route("growth/:ticker", "routes/growth-detail.tsx"),
  route("calculator", "routes/calculator.tsx"),
  route("market", "routes/market.tsx"),
  route("api/jobs/run", "routes/api.jobs.run.ts"),
] satisfies RouteConfig;
