"use server";

import { delay } from "@/lib/utils";
import { EmptyWordDefinition, WordDefinition } from "@/models/word-definition";

export async function fetchWordDefinition(word: string): Promise<WordDefinition> {
  await delay(1000);
  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`, { cache: "no-store" });
    if (response.ok) {
      const data: WordDefinition[] = await response.json();
      return data[0];
    } else {
      throw new Error();
    }
  } catch {
    return { ...EmptyWordDefinition };
  }
}
