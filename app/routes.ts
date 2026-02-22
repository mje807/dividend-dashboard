import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("calendar", "routes/calendar.tsx"),
  route("watchlist", "routes/watchlist.tsx"),
  route("watchlist/:ticker", "routes/stock-detail.tsx"),
  route("calculator", "routes/calculator.tsx"),
  route("market", "routes/market.tsx"),
] satisfies RouteConfig;
