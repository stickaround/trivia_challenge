import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useTriviaProvider } from '../../context/Trivia';
import { getProblems } from '../../services/api';

function Home() {
  const [isFetching, setIsFetching] = React.useState(false);
  const { setProblems, setIsFinished, isFinished, isLoaded } =
    useTriviaProvider();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isFinished && isLoaded) {
      navigate('/paper/1');
    }
  }, [isFinished, isLoaded, navigate]);

  async function handleBeginButtonClick() {
    try {
      setIsFetching(true);
      const {
        data: { results },
      } = await getProblems();

      const problems = results.map((problem, index) => ({
        id: index + 1,
        ...problem,
      }));
      setProblems(problems);
      setIsFinished(false);
      localStorage.setItem('problems', JSON.stringify(problems));
      localStorage.setItem('isFinished', 'false');
      navigate('/paper/1');
    } catch (err) {
    } finally {
      setIsFetching(false);
    }
  }

  return (
    <div className='w-[500px] h-[800px] mx-auto rounded-lg bg-white ring-2 ring-indigo-600 px-16 py-10 text-center'>
      <h1 className='text-slate-800 text-5xl text-center font-bold'>
        Welcome to the trivia challenge!
      </h1>
      <p className='text-slate-600 mt-36 text-center text-3xl'>
        You will be presented 10 True or False questions.
      </p>
      <p className='text-slate-600 mt-36 text-center text-3xl'>
        Can you score 100%?
      </p>

      <button
        className='text-3xl rounded-md bg-indigo-600 text-white hover:bg-indigo-500 active:bg-indigo-400 py-2 px-5 mt-32 disabled:bg-indigo-300'
        onClick={handleBeginButtonClick}
        type='button'
        disabled={isFetching || !isFinished}
      >
        <div className='flex items-center'>
          {isFetching && (
            <svg
              className='inline mr-1 w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
              viewBox='0 0 100 101'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                fill='currentColor'
              />
              <path
                d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                fill='currentFill'
              />
            </svg>
          )}
          BEGIN
        </div>
      </button>
    </div>
  );
}

export { Home };
