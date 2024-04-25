import { Definition, Meaning, Phonetic, WordDefinition } from "@/models/word-definition";
import { ReactElement } from "react";
import { MicrophoneIcon, ReDoIcon } from "../shared/icons";
import { delay } from "@/lib/utils";

interface WordDefinitionDisplayProps {
  WordDefinition: WordDefinition;
  RefreshSearch: () => void;
}

export default function WordDefinitionDisplay({ WordDefinition, RefreshSearch }: WordDefinitionDisplayProps): ReactElement {
  async function playAudio(audioUrl: string, index: number, element: HTMLDivElement): Promise<void> {
    const originalElementStyles: string = element.className;
    element.className = `${originalElementStyles} animate-bounce`;
    await new Audio(audioUrl).play();
    await delay(2500);
    element.className = originalElementStyles;
  }

  return (
    <div>
      <div className="h-full flex flex-col justify-center items-center mb-5 max-sm:mb-4">
        <div
          className="mt-6 max-sm:mt-4 hover:text-[#26272A] dark:hover:text-white cursor-pointer"
          title="Search a different word"
          onClick={RefreshSearch}
        >
          <ReDoIcon />
        </div>
        <div className="bg-zinc-300 dark:bg-zinc-800 mt-5 max-sm:mt-3 flex flex-col justify-center items-center text-center gap-4 max-sm:gap-2 p-7 px-9 max-sm:p-4 max-sm:px-5 shadow-xl rounded-3xl">
          <p className="font-bold tracking-wider text-7xl max-sm:text-[1.8rem] drop-shadow-lg dark:drop-shadow-2xl">
            {WordDefinition.word}
          </p>
          <div className="flex flex-row justify-center items-center gap-2 max-sm:gap-1">
            {WordDefinition.phonetics.map((phonetic: Phonetic, index: number) => {
              if (phonetic.audio !== "") {
                return (
                  <div
                    key={index}
                    className="cursor-pointer hover:text-[#26272A] dark:hover:text-white"
                    title="Listen to pronunciation"
                    onClick={(e) => playAudio(phonetic.audio, index, e.currentTarget)}
                  >
                    <MicrophoneIcon />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className="mb-16 max-sm:mb-10 w-[45rem] mx-auto max-sm:w-auto max-sm:mx-6 flex flex-col justify-start items-start text-left gap-5 max-sm:gap-4">
        {WordDefinition.meanings.map((meaning: Meaning, index: number) => (
          <div key={index} className="bg-zinc-300 dark:bg-zinc-800 p-6 max-sm:p-3 rounded-3xl shadow-xl">
            <p className="text-[1.8rem] max-sm:text-[1.2rem] font-bold drop-shadow-lg dark:drop-shadow-2xl">
              {meaning.partOfSpeech}
            </p>
            <div>
              {meaning.definitions.map((definition: Definition, index2: number) => (
                <div key={index2} className="mt-5 max-sm:mt-3 ml-7 max-sm:ml-6">
                  <p className="text-[1.65rem] max-sm:text-[1.15rem] list-item">{definition.definition}</p>
                  {definition.example !== undefined && definition.example !== "" && (
                    <p className="text-[1.5rem] max-sm:text-[1.1rem] italic">{`"${definition.example}"`}</p>
                  )}
                </div>
              ))}
              {(meaning.synonyms.length !== 0 || meaning.antonyms.length !== 0) && (
                <div className="ml-1 mt-5 max-sm:mt-3">
                  {meaning.synonyms.length !== 0 && (
                    <p className="text-[1.4rem] max-sm:text-[1.05rem]">{`Similar: ${meaning.synonyms.join(", ")}`}</p>
                  )}
                  {meaning.antonyms.length !== 0 && (
                    <p className="text-[1.4rem] max-sm:text-[1.05rem]">{`Opposite: ${meaning.antonyms.join(", ")}`}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
