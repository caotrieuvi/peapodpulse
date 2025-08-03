import { auth } from "@/auth"
import { NextResponse } from "next/server"

export default auth((request) => {
  const { pathname } = request.nextUrl
  const isLoggedIn = !!request.auth
  const user = request.auth?.user

  // Protected routes that require authentication
  const isProtectedRoute = 
    pathname.startsWith('/dashboard') ||
    pathname.startsWith('/profile') ||
    pathname.startsWith('/trackers') ||
    pathname.startsWith('/welcome')

  // Admin routes
  const isAdminRoute = pathname.startsWith('/admin')

  // Redirect unauthenticated users from protected routes
  if (isProtectedRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL('/auth/signin', request.url))
  }

  // Redirect non-admin users from admin routes
  if (isAdminRoute && (!isLoggedIn || user?.role !== 'ADMIN')) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // Redirect authenticated users from auth pages to dashboard
  if (isLoggedIn && pathname.startsWith('/auth/')) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // Check if user needs onboarding (redirect to welcome page)
  if (isLoggedIn && pathname.startsWith('/dashboard')) {
    // We'll implement this check later when we have the UserProfile logic
    // For now, just allow access to dashboard
  }

  return NextResponse.next()
})

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
}