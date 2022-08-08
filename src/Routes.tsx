import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { TriviaProvider } from './context/Trivia';
import { Home } from './pages/Home';
import { Paper } from './pages/Paper';

function TriviaRoutes() {
  return (
    <div className='min-h-screen w-[100%] bg-pink-200 flex items-center'>
      <BrowserRouter>
        <TriviaProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/paper/:id' element={<Paper />} />
          </Routes>
        </TriviaProvider>
      </BrowserRouter>
    </div>
  );
}

export { TriviaRoutes };
