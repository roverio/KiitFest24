import { PrismaClient } from "@prisma/client";

let prisma = global.prisma;

if (!prisma) {
  prisma = new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

  if (process.env.NODE_ENV !== "production") {
    global.prisma = prisma;
  }
}

module.exports = prisma;
