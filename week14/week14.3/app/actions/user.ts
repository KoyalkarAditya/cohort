"use server";
import client from "@/db";
export async function solve(username: string, password: string) {
  try {
    const response = await client.user.create({
      data: {
        username: username,
        password: password,
      },
    });
  } catch (e) {
    return false;
  }
  return true;
}
