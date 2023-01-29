import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Input from './Input';

// 임시 정렬 컴포넌트
const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  border: 1px solid #05be70;
  width: 360px;
  height: 100%;
`;

const Image = styled.div`
  margin-top: 160px;
  margin-bottom: 80px;
  height: 37px;
  width: 98px;
  background-color: #05be70; //
`;

const Submit = styled.button`
  background-color: #05be70; //
  border-radius: 5px;
  border: none;
  color: white; //
  width: 296px;
  height: 44px;
  margin-top: 30px;
`;

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ id: '', password: '' });

  const userHandler = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const login = () => {
    axios
      .post(`${process.env.REACT_APP_API}/login`, {
        id: user.id,
        password: user.password,
      })
      .then((r) => {
        console.log(r.data);
        localStorage.setItem('token', r.data.token);
        localStorage.setItem('user_index', r.data.user_index);
        localStorage.setItem('user_name', r.data.user_name);
        // navigate('/home');
      });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
      <Flex>
        <Image>ecord</Image>
        <Input name='id' value={user.id} onChange={userHandler} />
        <Input name='password' value={user.password} onChange={userHandler} />
        <Submit type='button' onClick={login}>
          로그인
        </Submit>
      </Flex>
    </div>
  );
};

export default Login;
