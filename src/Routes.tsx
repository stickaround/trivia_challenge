import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';

function TriviaRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export { TriviaRoutes };
