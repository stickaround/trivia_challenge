import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';

function TriviaRoutes() {
  return (
    <div className='min-h-screen w-[100%] bg-pink-200 flex '>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export { TriviaRoutes };
