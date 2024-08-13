import { NextRequest, NextResponse } from "next/server";

import { query } from "./services/query";
import { throwException } from "./lib/utils";

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|images|icons).*)',
    ],
}

export default async function middleware(req: NextRequest) {
    const res = NextResponse.next();
    const pathname = req.nextUrl.pathname;

    try {
        const response = await query("/auth/me");

        if (!response.ok) {
            if (response.status === 401) {
                if (pathname.startsWith("/portal")) {
                    return NextResponse.redirect(new URL("/signin", req.url));
                }
                return res;
            } else {
                throwException("An unexpected error occured!");
            }

            return res;
        }

        return res;

    } catch (error: any) {

        if (error instanceof Error) {
            throwException(error.message);

            return res;
        }

        throwException();

        return res;
    }
}