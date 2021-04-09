import React, { FC } from 'react';

type Prop = {
  Num1: number;
  Num2: number;
  sign: '+' | '-' | '*' | '/' | '%';
  result: number;
};

const ShowResult: FC<Prop> = ({ Num1, Num2, sign, result }) => {
  return (
    <div>
      <span>{`${Num1} ${sign} ${Num2} = ${result}`}</span>
    </div>
  );
};

export default ShowResult;
