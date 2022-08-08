import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { useTriviaProvider } from '../../context/Trivia';
import { Problem } from '../../types/index';

function Paper() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [current, setCurrent] = React.useState<Problem | null>(null);
  const { problems } = useTriviaProvider();

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

  return (
    <div className='w-[500px] h-[800px] mx-auto rounded-lg bg-white ring-2 ring-indigo-600 px-10 py-10 text-center relative'>
      <h1 className='text-slate-800 text-5xl text-center font-bold'>
        {current?.category}
      </h1>
      <div className='mt-36 p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
        <p className='mb-2 text-2xl tracking-tight text-gray-900 dark:text-white'>
          {current?.question}
        </p>

        <div className='m-10'>
          <div className='flex items-center mb-4'>
            <input
              id='country-option-1'
              type='radio'
              name='countries'
              value='USA'
              className='w-6 h-6 border-gray-300'
              checked
            />
            <label
              // for='country-option-1'
              className='block ml-2 text-2xl font-medium text-gray-900 dark:text-gray-300'
            >
              True
            </label>
          </div>
          <div className='flex items-center'>
            <input
              id='country-option-2'
              type='radio'
              name='countries'
              value='Germany'
              className='w-6 h-6 border-gray-300'
            />
            <label
              // for='country-option-2'
              className='block ml-2 text-2xl font-medium text-gray-900 dark:text-gray-300'
            >
              False
            </label>
          </div>
        </div>
      </div>

      <div className='w-[420px]  flex justify-between items-center absolute bottom-6'>
        <button
          className='w-24 text-base rounded-md bg-indigo-600 text-white hover:bg-indigo-500 active:bg-indigo-400 py-2 px-1 disabled:bg-indigo-300'
          onClick={handlePreviousButtonClick}
          type='button'
          disabled={id === '1'}
        >
          Previous
        </button>
        <span className='text-3xl'>{`${id} / 10`}</span>

        {id !== '10' ? (
          <button
            className='w-24 text-base rounded-md bg-indigo-600 text-white hover:bg-indigo-500 active:bg-indigo-400 py-2 px-1 disabled:bg-indigo-300'
            onClick={handleNextButtonClick}
            type='button'
          >
            Next
          </button>
        ) : (
          <button
            className='w-24 text-base rounded-md bg-indigo-600 text-white hover:bg-indigo-500 active:bg-indigo-400 py-2 px-1 disabled:bg-indigo-300'
            // onClick={handleFinishClick}
            type='button'
          >
            Finish
          </button>
        )}
      </div>
    </div>
  );
}

export { Paper };
