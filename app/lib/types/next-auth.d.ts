import NextAuth from "next-auth/next";
import { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from 'next-auth/jwt'



//Module Augmentation
declare module 'next-auth'{

    interface Session {
        user: {
            id: number,
            name: string,
            role: string,
            email: email,
            accessToken: string
        }
    }

    interface User extends DefaultUser {
        role: string
    }


declare module 'next-auth/jwt'} {
    interface JWT extends DefaultJWT {
        role: string
    }
}