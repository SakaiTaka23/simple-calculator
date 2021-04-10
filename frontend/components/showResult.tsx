import Typography from '@material-ui/core/Typography';
import React, { FC } from 'react';

type Prop = {
  Num1: number;
  Num2: number;
  sign: '+' | '-' | '*' | '/' | '%';
  result: number;
};

const ShowResult: FC<Prop> = ({ Num1, Num2, sign, result }) => {
  return <Typography variant='h3'>{`${Num1} ${sign} ${Num2} = ${result}`}</Typography>;
};

export default ShowResult;
