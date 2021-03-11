import React, { useState } from 'react';
import { CalcServiceClient } from '../calc/CalcServiceClientPb';
import { CalcRequest } from '../calc/calc_pb';

const Div = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState(0);

  const onChangeA = (e: React.ChangeEvent<HTMLInputElement>) => {
    setA(Number(e.target.value));
  };

  const onChangeB = (e: React.ChangeEvent<HTMLInputElement>) => {
    setB(Number(e.target.value));
  };

  const onClick = async () => {
    console.log(a, b);
    const request = new CalcRequest();
    request.setNum1(a);
    request.setNum2(b);
    const client = new CalcServiceClient('http://localhost:8080');
    const response = await client.division(request, {});
    setResult(response.getResult());
  };

  return (
    <div className='App'>
      <input type='number' value={a} onChange={onChangeA} min={0} max={20} />
      <input type='number' value={b} onChange={onChangeB} min={1} max={20} />
      <button onClick={onClick}>Divide</button>
      <p>{`${a} / ${b} = ${result}`}</p>
    </div>
  );
};

export default Div;
