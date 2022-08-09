import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { useTriviaProvider } from '../../context/Trivia';
import { Problem } from '../../types/index';

function Paper() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [current, setCurrent] = React.useState<Problem | null>(null);
  const { problems, isFinished, setProblems, setIsFinished } =
    useTriviaProvider();

  React.useEffect(() => {
    setCurrent(
      problems.find((problem) => problem.id.toString() === id) ?? null
    );
  }, [problems, id]);

  function handlePreviousButtonClick() {
    navigate(`/paper/${(current?.id ?? 1) - 1}`);
  }

  function handleNextButtonClick() {
    navigate(`/paper/${(current?.id ?? 1) + 1}`);
  }

  function handleAnswer(answer: 'True' | 'False') {
    current && setCurrent({ ...current, answer });
    const updated = problems.map((problem) => {
      if (problem.id.toString() === id) {
        return { ...problem, answer };
      }
      return {
        ...problem,
      };
    });
    setProblems(updated);
    localStorage.setItem('problems', JSON.stringify(updated));
  }

  function handleFinishButtonClick() {
    setIsFinished(true);
    localStorage.setItem('isFinished', 'true');
    navigate('/result');
  }

  return (
    <div className='w-[500px] h-[800px] mx-auto rounded-lg bg-white ring-2 ring-indigo-600 px-10 py-10 text-center relative'>
      <h1 className='text-slate-800 text-5xl text-center font-bold'>
        {current?.category}
      </h1>
      <div className='mt-36 p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
        <p
          className='mb-2 text-2xl tracking-tight text-gray-900 break-all dark:text-white'
          dangerouslySetInnerHTML={{ __html: current?.question ?? '' }}
        />
        <div className='m-10'>
          <div className='flex items-center mb-4'>
            <input
              id='answer-true'
              type='radio'
              name='answer'
              className='w-6 h-6 border-gray-300'
              checked={current?.answer === 'True'}
              onChange={() => handleAnswer('True')}
              disabled={isFinished}
            />
            <label
              className={`block ml-2 text-2xl font-medium dark:text-gray-300 ${
                isFinished && current?.correct_answer === 'True'
                  ? 'text-sky-600'
                  : 'text-gray-900'
              }`}
            >
              True
            </label>
          </div>
          <div className='flex items-center'>
            <input
              id='answer-false'
              type='radio'
              name='answer'
              className='w-6 h-6 border-gray-300'
              checked={current?.answer === 'False'}
              onChange={() => handleAnswer('False')}
              disabled={isFinished}
            />
            <label
              className={`block ml-2 text-2xl font-medium text-gray-900 dark:text-gray-300 ${
                isFinished && current?.correct_answer === 'False'
                  ? 'text-sky-600'
                  : 'text-gray-900'
              }`}
            >
              False
            </label>
          </div>
        </div>
      </div>

      <div className='w-[calc(100%-80px)]  flex justify-between items-center absolute bottom-6'>
        <button
          className='w-24 text-base rounded-md bg-indigo-600 text-white hover:bg-indigo-500 active:bg-indigo-400 py-2 px-1 disabled:bg-indigo-300'
          onClick={handlePreviousButtonClick}
          type='button'
          disabled={id === '1'}
        >
          Previous
        </button>
        <span className='text-3xl'>{`${id} of 10`}</span>

        {id !== '10' ? (
          <button
            className='w-24 text-base rounded-md bg-indigo-600 text-white hover:bg-indigo-500 active:bg-indigo-400 py-2 px-1 disabled:bg-indigo-300'
            onClick={handleNextButtonClick}
            type='button'
          >
            Next
          </button>
        ) : !isFinished ? (
          <button
            className='w-24 text-base rounded-md bg-indigo-600 text-white hover:bg-indigo-500 active:bg-indigo-400 py-2 px-1 disabled:bg-indigo-300'
            onClick={handleFinishButtonClick}
            type='button'
          >
            Finish
          </button>
        ) : (
          <Link to='/result'>
            <button
              className='w-24 text-base rounded-md bg-indigo-600 text-white hover:bg-indigo-500 active:bg-indigo-400 py-2 px-1 disabled:bg-indigo-300'
              type='button'
            >
              See Result
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export { Paper };
