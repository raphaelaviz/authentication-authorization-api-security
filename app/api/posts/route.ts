import { verifyJwt } from "@/app/lib/jwt";
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";



// This hander isn't called inside the project. This is just an example of protected API endpoint
// Test via Postman, Insomnia, etc.

export async function GET (request: Request) {

    const accessToken= request.headers.get("accessToken")

    if (!accessToken || verifyJwt(accessToken)){
        return new NextResponse(JSON.stringify({
            error: "unauthorized"
        }),
        { status: 401 }
        
        )

    }

    const posts = await prisma.post.findMany();
    return new NextResponse(JSON.stringify(posts));
}