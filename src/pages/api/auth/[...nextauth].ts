import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      credentials: {},
      // @ts-ignore
      async authorize(credentials, req) {
        const { fullName } = credentials as any;

        const user = {
          fullName: "Ali Bahaari",
          field: "Full-Stack Developer",
        };

        if (fullName === "Ali Bahaari") {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signIn",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// @ts-ignore
export default NextAuth(authOptions);
