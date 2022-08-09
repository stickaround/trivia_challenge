import React from 'react';

import { Problem } from '../types';

type Props = {
  children: React.ReactNode;
};

const TriviaContext = React.createContext<
  | {
      isFinished: boolean;
      problems: Problem[];
      setProblems: (problems: Problem[]) => void;
      setIsFinished: (isFinished: boolean) => void;
    }
  | undefined
>(undefined);

function TriviaProvider({ children }: Props) {
  const [problems, setProblems] = React.useState<Problem[]>([]);
  const [isFinished, setIsFinished] = React.useState(false);

  React.useEffect(() => {
    setProblems(
      JSON.parse(
        localStorage.getItem('problems') || '[]'
      ) as unknown as Problem[]
    );
    setIsFinished(JSON.parse(localStorage.getItem('isFinished') || 'true'));
  }, []);

  const contextValue = React.useMemo(
    () => ({
      isFinished,
      problems,
      setProblems,
      setIsFinished,
    }),
    [isFinished, problems, setProblems, setIsFinished]
  );

  return (
    <TriviaContext.Provider value={contextValue}>
      {children}
    </TriviaContext.Provider>
  );
}

function useTriviaProvider() {
  const context = React.useContext(TriviaContext);
  if (context === undefined) {
    throw new Error(
      'Trivia context should be used inside TriviaContextProvider!'
    );
  }

  return context;
}

export { TriviaContext, TriviaProvider, useTriviaProvider };
