"use server";
import { PrismaClient } from "@prisma/client";
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "@/lib/constants";

// Get latest products
export async function getLatestProducts() {
  /**
   * According to the NextJS documentation, server actions should not be used for
   * fetching data. They should be used to perform mutations or side effects.
   * Let us just treat this as a regular function that is not a server action for now.
   */
  const prisma = new PrismaClient();
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: {
      createdAt: "desc",
    },
  });

  return convertToPlainObject(data);
}
