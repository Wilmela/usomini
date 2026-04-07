import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { clientPromise } from "./mongo";
import { nextCookies } from "better-auth/next-js";
import { siteConfig } from "@/config";

export const auth = betterAuth({
  database: mongodbAdapter(clientPromise),

  baseURL: siteConfig.baseUrl,
  trustedOrigins: [
    "http://localhost:3000",
    "https://usomini.vercel.app",
  ],

  user: {
    deleteUser: {
      enabled: true,
    },

    changeEmail: { enabled: true },

    additionalFields: {
      role: {
        type: "string",
        required: true,
        input: true,
        default: "user",
      },
      username: {
        type: "string",
        required: false,
        input: true,
      },
    },
  },
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    requireEmailVerification: false,
  },

  plugins: [nextCookies()],
});
