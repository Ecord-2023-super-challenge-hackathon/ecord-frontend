import styled from 'styled-components';
import { MdEmail, MdLock } from 'react-icons/md';

const InputWrapper = styled.div`
  width: 296px;
  height: 44px;
  background-color: #edf0f7; //
  border-radius: 5px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  padding: 18px;
`;

const InputBox = styled.input`
  background-color: transparent;
  border: none;
  padding-left: 12px;
`;

const Input = ({ placeholder, name, onChange, value, icon }) => {
  return (
    <InputWrapper icon={icon}>
      {icon === 'id' && <MdEmail color='#B2B5BE' />}
      {icon === 'password' && <MdLock color='#B2B5BE' />}
      <InputBox name={name} onChange={onChange} value={value} placeholder={placeholder} />
    </InputWrapper>
  );
};

export default Input;
