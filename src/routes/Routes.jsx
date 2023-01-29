import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main/Main';
import Login from '../pages/Login/Login';
import Intro from '../pages/Intro/Intro';
import NotMobile from '../pages/NotMobile/NotMobile';

const Router = () => (
  <BrowserRouter>
    <NotMobile />
    <Routes>
      <Route exact path='/main' element={<Main />} />
      <Route exact path='/intro' element={<Intro />} />
      <Route exact path='/login' element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
