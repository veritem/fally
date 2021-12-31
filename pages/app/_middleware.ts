import jwt from 'jsonwebtoken'
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
    const token = req.cookies['token']

    if (!token) return NextResponse.redirect('/signin')

    const data = jwt.verify(token, process.env.JWT_SCRET)

    if (!data) return NextResponse.redirect('/signin')

    return NextResponse.next()
}
