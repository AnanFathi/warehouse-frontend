export const COOKIES_KEYS = {
  accessToken: "accessToken",
  refreshToken: "refreshToken",
  locale: "NEXT_LOCALE",
};

export const ROUTES: Record<string, { url: string; displayName: string }> = {
  root: { url: "/", displayName: "" },
  login: { url: "/login", displayName: "LOGIN" },
  dashboard: { url: "/dashboard", displayName: "DASHBOARD" },
  admins: { url: "/admins", displayName: "ADMINS" },
  beneficiaries: { url: "/beneficiaries", displayName: "BENEFICIARIES" },
  sessions: { url: "/sessions", displayName: "SESSIONS" },
  projects: { url: "/projects", displayName: "PROJECTS" },
};
