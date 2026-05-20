import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@shared/infra/prisma/generated/client";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

export async function main() {
  await prisma.user.create({
    data: {
      name: "Maksim",
      password: "password",
      email: "maksim@user.com",
    },
  });
}

main();
