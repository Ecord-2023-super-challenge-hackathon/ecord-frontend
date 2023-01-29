import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../../component/Layout/Layout';
import Input from './Input';
import { ReactComponent as Ecord_Title } from '../../assets/svg/Ecord_Title.svg';
import Button from '../../component/Button/Button';

const Submit = styled.button`
  background-color: ${(props) => props.theme.colors.mainGreen}; //
  color: ${(props) => props.theme.colors.white}; //

  border-radius: 5px;
  border: none;
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
    <Layout>
      <Ecord_Title style={{ marginTop: '160px', marginBottom: '80px' }} />
      <Input name='id' value={user.id} onChange={userHandler} />
      <Input name='password' value={user.password} onChange={userHandler} />
      <Button hover type='button' onClick={login}>
        로그인
      </Button>
    </Layout>
  );
};

export default Login;
