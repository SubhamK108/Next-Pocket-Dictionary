"use client";

import { fetchWordDefinition } from "@/components/api/word-definition-api";
import { SearchIcon } from "@/components/shared/icons";
import WordDefinitionDisplay from "@/components/word-definition/word-definition-display";
import WordDefinitionLoader from "@/components/word-definition/word-definition-loader";
import { EmptyWordDefinition, WordDefinition } from "@/models/word-definition";
import { ReactElement, useState } from "react";

export default function WordDefinitionPage(): ReactElement {
  const [searchedWord, setSearchedWord] = useState<string>("");
  const [wordDefinition, setWordDefinition] = useState<WordDefinition>({ ...EmptyWordDefinition });
  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  async function getWordDefinition(): Promise<void> {
    setLoading(true);
    const data: WordDefinition = await fetchWordDefinition(searchedWord.toLowerCase());
    if (data.word !== "") {
      setWordDefinition(data);
    } else {
      setIsError(true);
    }
    setLoading(false);
  }

  function RefreshSearch(): void {
    setSearchedWord("");
    setWordDefinition({ ...EmptyWordDefinition });
  }

  if (!loading && wordDefinition.word === "") {
    return (
      <div className="h-screen flex flex-col justify-center items-center text-center">
        <p className="-mt-24 text-8xl max-sm:text-5xl tracking-widest font-sans font-bold drop-shadow-lg dark:drop-shadow-2xl">
          Pocket Dictionary
        </p>
        <input
          type="text"
          className="mt-24 max-sm:mt-12 p-5 max-sm:p-3 text-5xl max-sm:text-[1.5rem] max-sm:leading-6 border border-[#AEAEAE] rounded-3xl max-sm:rounded-2xl font-sans h-[5.5rem] max-sm:h-[3.4rem] w-[45rem] max-sm:w-[20rem] text-center focus:outline-none shadow-lg dark:shadow-2xl tracking-wider font-thin"
          autoFocus={true}
          value={searchedWord}
          onInput={(e) => setSearchedWord(e.currentTarget.value)}
          onKeyDown={(e) => {
            if (e.code === "Enter" && searchedWord !== "") {
              getWordDefinition();
            }
          }}
          placeholder="Enter a word..."
        />
        <button
          className="mt-10 max-sm:mt-6 cursor-pointer disabled:cursor-default hover:text-[#26272A] dark:hover:text-white disabled:text-zinc-500 dark:disabled:text-zinc-600"
          title="Search Word"
          onClick={getWordDefinition}
          disabled={searchedWord === ""}
        >
          <SearchIcon />
        </button>
      </div>
    );
  }

  if (loading) {
    return <WordDefinitionLoader />;
  }

  if (!loading || wordDefinition.word !== "") {
    return <WordDefinitionDisplay WordDefinition={wordDefinition} RefreshSearch={RefreshSearch} />;
  }

  return <></>;
}
