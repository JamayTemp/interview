import { NextRequest, NextResponse } from 'next/server'
import { v4 } from 'uuid'

const { COOKIE_NAME } = process.env
export function middleware(request: NextRequest) {
  const headers = new Headers(request.headers)

  const response = NextResponse.next({
    request: {
      headers
    }
  })
  const hasCookie = !!request.cookies.get(COOKIE_NAME!)?.value
  if (!hasCookie) {
    // start a user session if none exists
    response.cookies.set(COOKIE_NAME!, v4())
  }

  return response
}
