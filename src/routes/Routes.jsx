import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main/Main';
import Intro from '../pages/Intro/Intro';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path='/main' element={<Main />} />
      <Route exact path='/' element={<Intro />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
