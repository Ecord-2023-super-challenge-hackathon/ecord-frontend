import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main/Main';
import Login from '../pages/Login/Login';
import Intro from '../pages/Intro/Intro';
import ReceiptDetail from '../pages/ReceiptDetail/ReceiptDetail';
import POS from '../pages/POS/POS';
import NotMobile from '../pages/NotMobile/NotMobile';
import Test from '../pages/Test/Test';

const Router = () => (
  <BrowserRouter>
    {/* <NotMobile /> */}
    <Routes>
      <Route exact path='/main' element={<Main />} />
      <Route exact path='/' element={<Intro />} />
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/receiptDetail' element={<ReceiptDetail />} />
      <Route exact path='/pos' element={<POS />} />
      <Route exact path='/test' element={<Test />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
