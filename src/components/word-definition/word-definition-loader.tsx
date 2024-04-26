import { ReactElement } from "react";

export default function WordDefinitionLoader(): ReactElement {
  return (
    <div className="animate-pulse">
      <div className="h-full flex flex-col justify-center items-center mb-5 max-sm:mb-4">
        <div className="w-[4rem] h-[4rem] max-sm:w-[2.5rem] max-sm:h-[2.5rem] bg-zinc-400 dark:bg-zinc-700 rounded-full shadow-lg dark:shadow-2xl mt-6 max-sm:mt-4 hover:text-[#26272A] dark:hover:text-white"></div>
        <div className="bg-zinc-300 dark:bg-zinc-800 mt-5 max-sm:mt-3 flex flex-col justify-center items-center text-center gap-4 max-sm:gap-2 p-7 px-9 max-sm:p-4 max-sm:px-5 shadow-xl rounded-3xl">
          <div className="w-[25rem] h-[5rem] max-sm:w-[10rem] max-sm:h-[3rem] bg-zinc-400 dark:bg-zinc-700 rounded-2xl max-sm:rounded-xl font-bold tracking-wider text-7xl max-sm:text-[1.8rem] shadow-lg dark:shadow-2xl"></div>
          <div className="flex flex-row justify-center items-center gap-2 max-sm:gap-1">
            {[1, 2].map((index: number) => {
              return (
                <div
                  key={index}
                  className="w-[3rem] h-[3rem] max-sm:w-[2rem] max-sm:h-[2rem] bg-zinc-400 dark:bg-zinc-700 rounded-full shadow-lg dark:shadow-2xl hover:text-[#26272A] dark:hover:text-white"
                ></div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mb-10 max-sm:mb-10 w-2/5 mx-auto max-sm:w-[22rem] flex flex-col justify-start items-start text-left gap-5 max-sm:gap-4">
        <div className="w-full max-sm:w-full bg-zinc-300 dark:bg-zinc-800 p-5 max-sm:p-3 rounded-3xl shadow-xl">
          <div className="w-[12rem] h-[3.1rem] max-sm:w-[8rem] max-sm:h-[2rem] bg-zinc-400 dark:bg-zinc-700 rounded-xl max-sm:rounded-lg shadow-lg dark:shadow-2xl text-[1.8rem] max-sm:text-[1.2rem] font-bold"></div>
          <div>
            <div className="mt-5 max-sm:mt-3">
              <div className="w-full h-[2.4rem] max-sm:w-[20rem] max-sm:h-[1.7rem] bg-zinc-400 dark:bg-zinc-700 rounded-lg max-sm:rounded-md shadow-lg dark:shadow-2xl text-[1.65rem] max-sm:text-[1.15rem]"></div>
              <div className="mt-2 max-sm:mt-1 w-[33rem] h-[2.1rem] max-sm:w-[15rem] max-sm:h-[1.4rem] bg-zinc-400 dark:bg-zinc-700 rounded-lg max-sm:rounded-md shadow-lg dark:shadow-2xl ml-9 max-sm:ml-6 text-[1.5rem] max-sm:text-[1.1rem] italic"></div>
            </div>
            <div className="mt-5 max-sm:mt-3">
              <div className="w-11/12 h-[2.4rem] max-sm:w-[20rem] max-sm:h-[1.7rem] bg-zinc-400 dark:bg-zinc-700 rounded-lg max-sm:rounded-md shadow-lg dark:shadow-2xl text-[1.65rem] max-sm:text-[1.15rem]"></div>
            </div>
            <div className="ml-1 mt-5 max-sm:mt-3">
              <div className="w-[20rem] h-[1.8rem] max-sm:w-[7rem] max-sm:h-[1.15rem] bg-zinc-400 dark:bg-zinc-700 rounded-lg max-sm:rounded-md shadow-lg dark:shadow-2xl text-[1.4rem] max-sm:text-[1.05rem]"></div>
            </div>
          </div>
        </div>
        <div className="w-full max-sm:w-full bg-zinc-300 dark:bg-zinc-800 p-4 max-sm:p-3 rounded-3xl shadow-xl">
          <div className="w-[12rem] h-[3.1rem] max-sm:w-[8rem] max-sm:h-[2rem] bg-zinc-400 dark:bg-zinc-700 rounded-xl max-sm:rounded-lg shadow-lg dark:shadow-2xl text-[1.8rem] max-sm:text-[1.2rem] font-bold"></div>
          <div>
            <div className="mt-5 max-sm:mt-3">
              <div className="w-full h-[2.4rem] max-sm:w-[20rem] max-sm:h-[1.7rem] bg-zinc-400 dark:bg-zinc-700 rounded-lg max-sm:rounded-md shadow-lg dark:shadow-2xl text-[1.65rem] max-sm:text-[1.15rem]"></div>
            </div>
            <div className="mt-5 max-sm:mt-3">
              <div className="w-10/12 h-[2.4rem] max-sm:w-[20rem] max-sm:h-[1.7rem] bg-zinc-400 dark:bg-zinc-700 rounded-lg max-sm:rounded-md shadow-lg dark:shadow-2xl text-[1.65rem] max-sm:text-[1.15rem]"></div>
            </div>
            <div className="ml-1 mt-5 max-sm:mt-3">
              <div className="w-[20rem] h-[1.8rem] max-sm:w-[7rem] max-sm:h-[1.15rem] bg-zinc-400 dark:bg-zinc-700 rounded-lg max-sm:rounded-md shadow-lg dark:shadow-2xl text-[1.4rem] max-sm:text-[1.05rem]"></div>
              <div className="w-[25rem] h-[1.8rem] max-sm:w-[10rem] max-sm:h-[1.15rem] bg-zinc-400 dark:bg-zinc-700 rounded-lg max-sm:rounded-md shadow-lg dark:shadow-2xl text-[1.4rem] max-sm:text-[1.05rem] mt-2 max-sm:mt-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
