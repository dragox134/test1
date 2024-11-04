// src/app/api/auth/[...nextauth]/[...nextauth].ts

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: '/auth/prihlasenie',
    signOut: '/auth/odhlasenie',
  },
};

export default NextAuth(authOptions);
