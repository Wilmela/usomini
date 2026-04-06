export const baseUrl =
  process.env.NODE_ENV === "production"
    ? (process.env.NEXT_PUBLIC_BASE_URL as string)
    : "http://localhost:3000";
