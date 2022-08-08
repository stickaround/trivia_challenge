export type Problem = {
  id: number;
  category: string;
  type: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  correct_answer: 'True' | 'False';
  incorrect_answer: ['True' | 'False'];
  answer?: 'True' | 'False';
};

export type TriviaResponse = {
  response_code: number;
  results: [
    {
      category: string;
      type: string;
      difficulty: 'easy' | 'medium' | 'hard';
      question: 'string';
      correct_answer: 'True' | 'False';
      incorrect_answer: ['True' | 'False'];
    }
  ];
};
