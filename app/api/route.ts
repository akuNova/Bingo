import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
  const body = await request.json();

  // post it to website
  console.log(body);
  return NextResponse.json({body}, {status: 200});
}

