/* eslint-disable @typescript-eslint/no-explicit-any */
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import prisma from "@repo/db/client";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        const { email, password } = credentials;
        console.log(email,password)
        if (!email || !password) {
          throw new Error("Email and password are required.");
        }

        try {
          const user = await prisma.user.findUnique({
            // where: { id : "619b8a91-ecc6-4ec7-86e7-af964d5f010f" },
            where: { email},
          });

          console.log("User found:", user);

          if (!user) {
            console.log("No user found with this email");
            return null;
          }

          const isValidPassword = await bcrypt.compare(password, user.password || "");

          if (!isValidPassword) {
            console.log("Invalid password");
            return null;
          }

          return {
            id: user.id,
            name: user.name,
            email: user.email,
          };
        } catch (error) {
          console.error("Error in authorize:", error);
          return null;
        }
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/auth/signin",
  },
};
