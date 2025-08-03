import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"
import authConfig from "./auth.config"
import type { User } from "next-auth"
import type { JWT } from "next-auth/jwt"

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "database" },
  ...authConfig,
  callbacks: {
    async session({ session, user }) {
      if (session?.user && user) {
        session.user.id = user.id
        session.user.role = (user as any).role || "USER"
      }
      return session
    },
    async signIn({ user, account, profile }) {
      // Allow sign in
      return true
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
})