import React, { useState } from 'react';
import { CalcServiceClient } from '../proto/CalcServiceClientPb';
import { CalcRequest } from '../proto/calc_pb';

const Sub = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState(0);

  const onChangeA = (e: React.ChangeEvent<HTMLInputElement>) => {
    setA(Number(e.target.value));
  };

  const onChangeB = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (a >= Number(e.target.value)) {
      setB(Number(e.target.value));
    }
  };

  const onClick = async () => {
    console.log(a, b);
    const request = new CalcRequest();
    request.setNum1(a);
    request.setNum2(b);
    const client = new CalcServiceClient('http://localhost:8080');
    const response = await client.subtraction(request, {});
    setResult(response.getResult());
  };

  return (
    <div className='App'>
      <input type='number' value={a} onChange={onChangeA} min={0} max={20} />
      <input type='number' value={b} onChange={onChangeB} min={0} max={20} />
      <button onClick={onClick}>Subtract</button>
      <p>{`${a} - ${b} = ${result}`}</p>
    </div>
  );
};

export default Sub;
