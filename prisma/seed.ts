// prisma/seed.ts

import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

async function main() {
  const customerData = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "./customer.json"), "utf-8")
  );
  const productData = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "./product.json"), "utf-8")
  );
  const taskData = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "./task.json"), "utf-8")
  );

  for (const item of customerData) {
    await prisma.customer.upsert({
      where: { username: item.username },
      update: { ...item, createdAt: new Date(item.createdAt) },
      create: { ...item, createdAt: new Date(item.createdAt) },
    });
  }

  for (const item of productData) {
    await prisma.product.upsert({
      where: { id: item.id },
      update: { ...item, createdAt: new Date(item.createdAt) },
      create: { ...item, createdAt: new Date(item.createdAt) },
    });
  }

  for (const item of taskData) {
    await prisma.task.upsert({
      where: { id: item.id },
      update: item,
      create: item,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
