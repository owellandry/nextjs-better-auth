import { toNextJsHandler } from "better-auth/next-js";

import { getAuth } from "@/lib/auth";

export async function GET(request: Request) {
  const handler = toNextJsHandler(getAuth().handler);
  return handler.GET(request);
}

export async function POST(request: Request) {
  const handler = toNextJsHandler(getAuth().handler);
  return handler.POST(request);
}
