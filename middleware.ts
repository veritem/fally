import { NextRequest, NextResponse } from 'next/server'

const protectedRoutes = ['/', '/report', '/attendance', ' / report / history']

export async function middleware(req: NextRequest) {
	if (protectedRoutes.find((p) => p === req.nextUrl.pathname)) {
		const token = req.cookies['token']

		if (!token) {
			return NextResponse.redirect(new URL('/signin', req.url))
		}
	}
}
