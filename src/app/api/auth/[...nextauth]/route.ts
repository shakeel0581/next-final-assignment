import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth, { AuthOptions } from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const handler = NextAuth({
  secret: "Dummy-secret",
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "jsmith",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        const { username, password, name, type } = credentials as any;
        if (type == "login") {
          const newUser = await prisma.user.findFirst({
            where: {
              username: username,
              password: password,
            },
          });
          console.log(newUser, { username, password, name, type });
          return newUser?.username
            ? { ...newUser, email: newUser.username, id: newUser.id }
            : null;
        }

        if (type == "signup") {
          const newUser = await prisma.user.create({
            data: {
              name: name,
              username: username,
              password: password,
            },
          });
          console.log(newUser);
          return { ...newUser, email: newUser.username, id: newUser.id };
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/authentication/login",
    signOut: "/authentication/login",
  },
});

export { handler as GET, handler as POST };
