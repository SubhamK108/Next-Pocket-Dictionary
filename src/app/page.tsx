"use client";

import { ResponseResult, fetchWordDefinition } from "@/components/api/word-definition-api";
import { SearchIcon } from "@/components/shared/icons";
import WordDefinitionDisplay from "@/components/word-definition/word-definition-display";
import WordDefinitionError from "@/components/word-definition/word-definition-error";
import WordDefinitionLoader from "@/components/word-definition/word-definition-loader";
import { EmptyWordDefinition, WordDefinition } from "@/models/word-definition";
import { ReactElement, useState } from "react";

export default function WordDefinitionPage(): ReactElement {
  const [searchedWord, setSearchedWord] = useState<string>("");
  const [wordDefinition, setWordDefinition] = useState<WordDefinition>({ ...EmptyWordDefinition });
  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>("");

  async function getWordDefinition(word: string): Promise<void> {
    setLoading(true);
    const [data, responseResult]: [WordDefinition, ResponseResult] = await fetchWordDefinition(word);
    if (responseResult === "SUCCESS") {
      setWordDefinition(data);
    } else {
      setWordDefinition({ ...EmptyWordDefinition });
      setSearchedWord("");
      if (responseResult === "NOT_FOUND") {
        setErrorText(
          `Oops! '${word}' isn't there in this dictionary, you have to use the internet for this word. Sorry. 😞`
        );
      } else {
        setErrorText(
          "The Server is facing some problems right now, please try again a bit later, or use the internet for this word. Sorry. 😞"
        );
      }
      setIsError(true);
    }
    setLoading(false);
  }

  function CloseError(): void {
    setIsError(false);
  }

  function searchSpecificWord(word: string): void {
    getWordDefinition(word);
  }

  function RefreshSearch(): void {
    setIsError(false);
    setSearchedWord("");
    setWordDefinition({ ...EmptyWordDefinition });
  }

  if (!loading && wordDefinition.word === "") {
    return (
      <div className="h-full flex flex-col justify-center items-center text-center">
        <p className="mt-52 max-sm:mt-44 text-8xl max-sm:text-5xl tracking-widest font-sans font-bold drop-shadow-lg dark:drop-shadow-2xl">
          Pocket Dictionary
        </p>
        <input
          type="text"
          className="mt-24 max-sm:mt-12 p-5 max-sm:p-3 text-5xl max-sm:text-[1.5rem] max-sm:leading-6 border border-[#AEAEAE] rounded-3xl max-sm:rounded-2xl font-sans h-[5.5rem] max-sm:h-[3.4rem] w-[45rem] max-sm:w-[20rem] text-center focus:outline-none shadow-lg dark:shadow-2xl tracking-widest"
          autoFocus={true}
          value={searchedWord}
          onInput={(e) => setSearchedWord(e.currentTarget.value)}
          onKeyDown={(e) => {
            if ((e.key === "Enter" || e.key === "Go") && searchedWord !== "") {
              getWordDefinition(searchedWord);
            }
          }}
          placeholder="Enter a word..."
        />
        <button
          className="mt-10 max-sm:mt-6 cursor-pointer disabled:cursor-default hover:text-[#26272A] dark:hover:text-white disabled:text-zinc-500 dark:disabled:text-zinc-600"
          title="Search Word"
          onClick={() => getWordDefinition(searchedWord)}
          disabled={searchedWord === ""}
        >
          <SearchIcon />
        </button>
        <div className="mt-24 max-sm:mt-12 h-[10rem] w-[45%] max-sm:h-[10rem] max-sm:w-[20rem] flex justify-center items-start">
          {isError && <WordDefinitionError ErrorText={errorText} CloseError={CloseError} />}
        </div>
        <div className="text-center mb-1">
          <p className="px-12 max-sm:text-[0.9rem] font-sans">
            Made with ❤️ by
            <a 
              href="https://www.subhamk.com/" 
              target="_blank"
              className="underline hover:text-[#26272A] dark:hover:text-white"
            >
              Subham K.
            </a>
            <br></br>
            With the help of 
            <a 
              href="https://github.com/meetDeveloper/freeDictionaryAPI" 
              target="_blank"
              className="underline hover:text-[#26272A] dark:hover:text-white"
            >
              Free Dictionary API
            </a>
          </p>
        </div>
      </div>
    );
  }

  if (loading) {
    return <WordDefinitionLoader />;
  }

  if (!loading && wordDefinition.word !== "") {
    return (
      <WordDefinitionDisplay WordDefinition={wordDefinition} SearchWord={searchSpecificWord} RefreshSearch={RefreshSearch} />
    );
  }

  return <></>;
}
