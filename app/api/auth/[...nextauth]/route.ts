import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({

      name: "Credentials",
 
      credentials: {
        username: { label: "Email", type: "text", },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
    
        const response = await fetch(`${process.env.API_AUTH}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password,
          }),
        });

        const user = await response.json();

        if (user) return user;
        else      return null;   
      }
      
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
});

export { handler as GET, handler as POST };