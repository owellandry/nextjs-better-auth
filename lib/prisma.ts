import { PrismaClient } from "@src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

import { getDatabaseUrl } from "@/lib/database-url";

declare global {
  var prisma: PrismaClient | undefined;
}

export function getPrisma() {
  if (global.prisma) {
    return global.prisma;
  }

  const adapter = new PrismaPg({ connectionString: getDatabaseUrl() });
  const prisma = new PrismaClient({ adapter });

  if (process.env.NODE_ENV !== "production") {
    global.prisma = prisma;
  }

  return prisma;
}
