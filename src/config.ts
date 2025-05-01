import { AboutPage } from "./pages/about";
import { HomePage } from "./pages/home";
import { LoginPage } from "./pages/login";

export const config = {
  public: "public",
  development: process.env.NODE_ENV === "development",
  hotReload: process.env.NODE_ENV !== "production",
  routes: {
    "/": HomePage,
    "/login": LoginPage,
    "/about": AboutPage,
  }
} as const;
