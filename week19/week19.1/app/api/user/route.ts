import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    message: "Hi there",
  });
}

export const config = {
  matcher: "/api/:path*",
};
