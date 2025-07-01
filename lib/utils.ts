import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Convert prisma object into a regular JS object
// NOTE: This function is lying about the return type.
// It returns a regular JS object, not a Prisma object.
export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}
