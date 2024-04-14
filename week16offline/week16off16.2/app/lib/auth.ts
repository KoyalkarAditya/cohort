import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
export const NEXT_AUTH = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "email", type: "text", placeholder: "Email" },
        password: {
          label: "password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials: any) {
        const username = credentials.username;
        const password = credentials.password;
        //return null;

        return {
          id: "user1",
          name: "Aditya",
          password: "1223234",
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    signIn: ({ user }: any) => {
      if (user.email == "random") {
        return false;
      }
      return true;
    },
    jwt: ({ token, user }: any) => {
      console.log(token);
      return token;
    },
    session: ({ session, user, token }: any) => {
      console.log(session);
      if (session && session.user) {
        session.userId = token.sub;
      }
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
};
