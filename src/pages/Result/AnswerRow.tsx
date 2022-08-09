import { Problem } from '../../types';

type Props = {
  problemWithAnswer: Problem;
};

function AnswerRow({ problemWithAnswer }: Props) {
  return (
    <div className='items-center p-2 grid grid-cols-8'>
      {problemWithAnswer.answer === problemWithAnswer.correct_answer ? (
        <svg
          className='w-8 h-8 text-green-600 col-span-1'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M5 13l4 4L19 7'
          ></path>
        </svg>
      ) : (
        <svg
          className='w-8 h-8 text-red-600 col-span-1'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M6 18L18 6M6 6l12 12'
          ></path>
        </svg>
      )}
      <div
        className='text-left col-span-7 pr-2'
        dangerouslySetInnerHTML={{ __html: problemWithAnswer.question }}
      ></div>
    </div>
  );
}

export { AnswerRow };
