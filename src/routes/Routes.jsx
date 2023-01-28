import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main/Main';
import Footer_Navigate from '../assets/theme/Footer_Navigate';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Main />} />
      <Route exact path='/FooterNavigate' element={<Main />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
