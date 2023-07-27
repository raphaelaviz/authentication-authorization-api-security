import { NextRequestWithAuth, withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth (
    function middleware (request: NextRequestWithAuth) {

        if (request.nextUrl.pathname.startsWith("/admin") && request.nextauth.token?.role !== "Admin")

        return NextResponse.rewrite(
             new URL ("/denied", request.url)
        );

    },
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        }
    }

)

export const config = {
    matcher: ["/user/:path*", "/admin/:path*"]
}