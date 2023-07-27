import prisma from "@/app/lib/prisma";
import * as bcrypt from 'bcrypt'
import { NextResponse } from "next/server";


interface RequestBody {
    name: string;
    email: string;
    password: string;
    role: string
}

//Register API: Creates new users.

export async function POST(request:Request) {

    const body:RequestBody = await request.json();

    const user = await prisma.user.create ({
        
        data: {
            name: body.name,
            role: body.role,
            email: body.email,
            password: await bcrypt.hash(body.password, 10),
        }
    })

    const { password, ...result } = user

    return new NextResponse(JSON.stringify(result))

}