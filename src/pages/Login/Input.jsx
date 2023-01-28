import styled from 'styled-components';
import { MdEmail, MdLock } from 'react-icons/md';

const InputWrapper = styled.div`
  background-color: #edf0f7; //
  display: flex;
  align-items: center;

  width: 296px;
  height: 44px;
  border-radius: 5px;
  margin-bottom: 8px;
  padding: 18px;
`;

const InputBox = styled.input`
  background-color: transparent;
  border: none;
  padding-left: 12px;
`;

const Input = ({ name, onChange, value }) => {
  return (
    <InputWrapper>
      {name === 'id' && (
        <>
          <MdEmail color='#B2B5BE' />
          <InputBox name={name} onChange={onChange} value={value} placeholder='이메일 주소 입력' />
        </>
      )}
      {name === 'password' && (
        <>
          <MdLock color='#B2B5BE' />
          <InputBox name={name} onChange={onChange} value={value} placeholder='비밀번호 입력' />
        </>
      )}
    </InputWrapper>
  );
};

export default Input;
