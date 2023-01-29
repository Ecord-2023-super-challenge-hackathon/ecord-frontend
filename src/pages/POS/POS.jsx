import React from 'react';
import axios from 'axios';

const POS = () => {
  const onClickFunction = () => {
    axios.post('http://43.207.42.44:4000/message', 'sender send');
    console.log('sender success');
  };

  return (
    <div>
      <h1>Sender</h1>
      <button onClick={onClickFunction}>send web socket chat</button>
    </div>
  );
};

export default POS;
