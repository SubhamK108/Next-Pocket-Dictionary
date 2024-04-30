"use server";

import { delay } from "@/lib/utils";
import { EmptyWordDefinition, WordDefinition } from "@/models/word-definition";

export type ResponseResult = "SUCCESS" | "NOT_FOUND" | "SERVER_ERROR";

export async function fetchWordDefinition(word: string): Promise<[WordDefinition, ResponseResult]> {
  await delay(1000);
  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.trim().toLowerCase()}`, {
      cache: "no-store"
    });
    if (response.ok) {
      const data: WordDefinition[] = await response.json();
      return [data[0], "SUCCESS"];
    } else {
      throw new Error(`${response.status}`);
    }
  } catch (error: any) {
    return error.message === "404"
      ? [{ ...EmptyWordDefinition }, "NOT_FOUND"]
      : [{ ...EmptyWordDefinition }, "SERVER_ERROR"];
  }
}
