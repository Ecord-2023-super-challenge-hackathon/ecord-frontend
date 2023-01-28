import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main/Main';
import Login from '../pages/Login/Login';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Main />} />
      <Route exact path='/login' element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
