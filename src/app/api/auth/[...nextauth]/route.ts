import NextAuth, { NextAuthOptions } from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import type { Session } from "next-auth";
import type { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      token?: string;
    };
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account }: { token: JWT; account?: any }) {
      console.log("Account:", account);
      if (account?.provider === "facebook") {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.id = token.sub || "";
        session.user.token = token.accessToken as string;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
    return `${baseUrl}/catalog-dashboard`;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
