import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";

export async function GET() {
  const prisma = getPrisma();
  const users = await prisma.user.findMany();
  return NextResponse.json("ok");
}
