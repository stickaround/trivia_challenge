import React from 'react';

import { Problem } from '../types';

type Props = {
  children: React.ReactNode;
};

const TriviaContext = React.createContext<
  | {
      problems: Problem[];
      setProblems: (problems: Problem[]) => void;
    }
  | undefined
>(undefined);

function TriviaProvider({ children }: Props) {
  const [problems, setProblems] = React.useState<Problem[]>([]);

  React.useEffect(() => {
    setProblems(
      JSON.parse(localStorage.getItem('problems') ?? '') as unknown as Problem[]
    );
  }, []);

  const contextValue = React.useMemo(
    () => ({
      problems,
      setProblems,
    }),
    [problems, setProblems]
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
