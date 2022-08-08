function Home() {
  return (
    <div className='w-[500px] min-h-[800px] mx-auto rounded-lg bg-white ring-2 ring-indigo-600 px-16 py-10 text-center'>
      <h1 className='text-slate-800 text-5xl text-center font-bold'>
        Welcome to the trivia challenge!
      </h1>
      <p className='text-slate-600 mt-36 text-center text-3xl'>
        You will be presented 10 True or False questions.
      </p>
      <p className='text-slate-600 mt-36 text-center text-3xl'>
        Can you score 100%?
      </p>

      <button className='text-3xl mt-32 rounded-md bg-indigo-600 py-2 px-5 text-white hover:bg-indigo-500 active:bg-indigo-400'>
        BEGIN
      </button>
    </div>
  );
}

export { Home };
