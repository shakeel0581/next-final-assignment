import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import { User } from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const callbacks = {
  jwt: async ({ token, user }: any) => {
    if (user) {
      // This will only be executed at login. Each next invocation will skip this part.
      token.accessToken = user.accessToken;
      token.accessTokenExpiry = user.accessTokenExpiry;
      token.refreshToken = user.refreshToken;
    }

    // If accessTokenExpiry is 24 hours, we have to refresh token before 24 hours pass.
    const shouldRefreshTime = Math.round(
      token.accessTokenExpiry - 9 * 1000 - Date.now()
    );
    // const shouldRefreshTime = Math.round((token.accessTokenExpiry - 60 * 60 * 1000) - Date.now());

    // If the token is still valid, just return it.
    if (shouldRefreshTime > 0) {
      return Promise.resolve(token);
    }

    // If the call arrives after 23 hours have passed, we allow to refresh the token.
    token = refreshAccessToken(token);
    return Promise.resolve(token);
  },
  session: async ({ session, token }: any) => {
    // Here we pass accessToken to the client to be used in authentication with your API
    session.accessToken = token.accessToken;
    session.accessTokenExpiry = token.accessTokenExpiry;
    session.error = token.error;

    return Promise.resolve(session);
  },
};

async function refreshAccessToken(tokenObject: any) {
  try {
    const result = await fetch("http://localhost:3001/auth/refresh-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refreshToken: tokenObject.refreshToken,
      }),
    });
    const tokenResponse = await result.json();
    console.log("RefreshTOken Response:", tokenResponse);
    if (!tokenResponse.statusCode) {
      return {
        ...tokenObject,
        accessToken: tokenResponse.accessToken,
        accessTokenExpiry: tokenResponse.accessTokenExpiry,
        // refreshToken: tokenResponse.refreshToken,
      };
    } else {
      return {
        ...tokenObject,
        error: "RefreshAccessTokenError",
      };
    }
  } catch (error) {
    return {
      ...tokenObject,
      error: "RefreshAccessTokenError",
    };
  }
}

export const nextAuthOptions = (req: any, res: any) => {
  return {
    // Configure one or more authentication providers
    secret: "Dummy-secret",
    providers: [
      // ...add more providers here
      CredentialsProvider({
        // The name to display on the sign in form (e.g. "Sign in with...")
        name: "Credentials",
        // `credentials` is used to generate a form on the sign in page.
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
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
          try {
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
            const result = await fetch("http://localhost:3001/auth/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: username,
                password,
              }),
            });

            const response = await result.json();
            console.log("authorize DATA", response);

            if (!response.statusCode) {
              return response;
            }
            return null;
          } catch (error) {
            throw new Error(error);
          }
        },
      }),
    ],
    // callbacks,
    // callbacks: {
    //   async jwt({ token, user }: any) {
    //     return { ...token, ...user };
    //   },
    //   async session({ session, token, user }: any) {
    //     console.log("SESSEION DATA", session, token, user);
    //     // Send properties to the client, like an access_token from a provider.

    //     session.user = token.accessToken;
    //     session.otherData = token;
    //     return session;
    //   },
    // },
    pages: {
      signIn: "/authentication/login",
      signOut: "/authentication/login",
    },
  };
};

// export default NextAuth(authOptions);

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, nextAuthOptions(req, res));
};

export { handler as GET, handler as POST };
