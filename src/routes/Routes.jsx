import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main/Main';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Main />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
