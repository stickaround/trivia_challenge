import React from 'react';

import { Problem } from '../types';

type Props = {
  children: React.ReactNode;
};

const TriviaContext = React.createContext<
  | {
      isFinished: boolean;
      problems: Problem[];
      isLoaded: boolean;
      setProblems: (problems: Problem[]) => void;
      setIsFinished: (isFinished: boolean) => void;
      setIsLoaded: (isLoaded: boolean) => void;
    }
  | undefined
>(undefined);

function TriviaProvider({ children }: Props) {
  const [problems, setProblems] = React.useState<Problem[]>([]);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isFinished, setIsFinished] = React.useState(false);

  React.useEffect(() => {
    setProblems(
      JSON.parse(
        localStorage.getItem('problems') || '[]'
      ) as unknown as Problem[]
    );
    setIsFinished(JSON.parse(localStorage.getItem('isFinished') || 'true'));
    setIsLoaded(true);
  }, []);

  const contextValue = React.useMemo(
    () => ({
      isFinished,
      isLoaded,
      problems,
      setProblems,
      setIsFinished,
      setIsLoaded,
    }),
    [isFinished, isLoaded, problems, setProblems, setIsFinished, setIsLoaded]
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
