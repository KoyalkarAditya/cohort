import { NextRequest, NextResponse } from "next/server";
import client from "@/db"; //singleton prisma

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    const response = await client.user.create({
      data: {
        username: body.username,
        password: body.password,
      },
    });
  } catch (e) {
    return NextResponse.json({
      message: "error while logging in",
    });
  }
  console.log(body);
  console.log(req.headers.get("authorization"));
  console.log(req.nextUrl.searchParams.get("name"));

  return NextResponse.json({
    body,
  });
}
