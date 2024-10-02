// import { NextRequest, NextResponse } from "next/server";
// import { query } from "./services/query";
// import { throwException } from "./lib/utils";

// // Middleware configuration to match all paths except for specific ones
// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images|icons).*)"],
// };

// export default async function middleware(req: NextRequest) {
//   const pathname = req.nextUrl.pathname;

//   try {
//     // Check if the user is authenticated by querying the /auth/me endpoint
//     const response = await query("/auth/me", {
//       credentials: "include", // Ensures cookies or credentials are sent
//     });

//     // If the user is not authenticated, handle it
//     if (!response.ok) {
//       if (response.status === 401 && pathname.startsWith("/portal")) {
//         // Redirect unauthenticated users trying to access protected /portal route
//         return NextResponse.redirect(new URL("/signin", req.url));
//       }

//       // Allow access to other routes if not under /portal
//       return NextResponse.next();
//     }

//     // If the user is authenticated, allow the request to proceed
//     return NextResponse.next();
//   } catch (error: any) {
//     // Handle errors and log/throw exception
//     if (error instanceof Error) {
//       throwException(error.message);
//     } else {
//       throwException("An unexpected error occurred!");
//     }

//     // In case of error, proceed with the request (could be handled differently)
//     return NextResponse.next();
//   }
// }

import { NextRequest, NextResponse } from "next/server";
import { query } from "./services/query";
import { throwException } from "./lib/utils";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images|icons).*)"],
};

export default async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  try {
    const token = req.cookies.get("token")?.value;

    if (!token && pathname.startsWith("/portal")) {
      return NextResponse.redirect(new URL("/signin", req.url));
    }

    if (token) {
      const response = await query("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        if (response.status === 401 && pathname.startsWith("/portal")) {
          return NextResponse.redirect(new URL("/signin", req.url));
        }
      } else {
        const responseData = await response.json();
        const user = responseData.data;

        const headers = new Headers(req.headers);
        headers.set("x-user-role", user.role);
        headers.set("x-user-email", user.email);
        return NextResponse.next({
          request: { headers },
        });
      }
    }

    return NextResponse.next();
  } catch (error: any) {
    if (error instanceof Error) {
      throwException(error.message);
    } else {
      throwException("An unexpected error occurred!");
    }

    return NextResponse.next();
  }
}
