import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

import { getDatabaseUrl } from "@/lib/database-url";

let authInstance: ReturnType<typeof betterAuth> | undefined;

export function getAuth() {
  if (authInstance) {
    return authInstance;
  }

  const adapter = new PrismaPg({ connectionString: getDatabaseUrl() });
  const prisma = new PrismaClient({ adapter });

  authInstance = betterAuth({
    emailAndPassword: {
      enabled: true,
    },
    database: prismaAdapter(prisma, {
      provider: "postgresql",
    }),
  });

  return authInstance;
}
