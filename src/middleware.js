import { NextResponse } from "next/server"; 

export function middleware(request) {
    if(!request.cookies.has('AutoCar_jwt'))
        return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
    matcher: [
        '/catalogo/:path*',
        '/anunciar/:path*',
    ]
}