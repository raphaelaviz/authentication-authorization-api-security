import { signJwtAccessToken } from "@/app/lib/jwt";
import prisma from "@/app/lib/prisma";
import * as bcrypt from 'bcrypt'
import { NextResponse } from "next/server";

interface RequestBody{
    username:string;
    password: string;

}

//Login API: Checks for existing users.

export async function POST(request:Request) {

    const body:RequestBody = await request.json();

    const user = await prisma.user.findFirst({
        
        where: {
            email: body.username,

        }
    })
    
    if (user && ( await bcrypt.compare(body.password, user.password))) {

        const { password, ...userWithoutPass } = user

        const accessToken = signJwtAccessToken(userWithoutPass)

        const result = {
            ...userWithoutPass,
            accessToken
        }
        return new NextResponse(JSON.stringify(result))
    }

    else return new NextResponse (JSON.stringify(null))

}