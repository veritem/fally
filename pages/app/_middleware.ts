import jwt from 'jsonwebtoken'
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest, _ev: NextFetchEvent) {
    const token = req.cookies['token']

    const url = req.nextUrl.clone()

    url.pathname = '/signin'

    if (!token) return NextResponse.redirect(url)

    const data = jwt.verify(token, process.env.JWT_SCRET)

    if (!data) return NextResponse.redirect(url)

    return NextResponse.next()
}
