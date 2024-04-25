import { ReactElement } from "react";
import { CloseIcon } from "../shared/icons";

interface WordDefinitionErrorProps {
  ErrorText: string;
  CloseError: () => void;
}

export default function WordDefinitionError({ ErrorText, CloseError }: WordDefinitionErrorProps): ReactElement {
  return (
    <div className="text-[1.6rem] max-sm:text-[1.1rem] p-[0.8rem] max-sm:p-[0.6rem] rounded-3xl shadow-lg dark:shadow-2xl bg-red-300 dark:bg-red-950">
      <div className="flex justify-center items-center text-left gap-3 max-sm:gap-2">
        <div className="hover:text-[#26272A] dark:hover:text-white cursor-pointer" title="Close Error" onClick={CloseError}>
          <CloseIcon />
        </div>
        <p>{ErrorText}</p>
      </div>
    </div>
  );
}
