import React, { FC } from 'react';
import { FormProvider } from 'react-hook-form';
import { funcMap } from '../hooks/funcMap';
import useCalc from '../hooks/useCalc';
import ShowResult from './ShowResult';
import InputNum1 from './InputNum1';
import InputNum2 from './InputNum2';

type Prop = {
  sign: '+' | '-' | '*' | '/' | '%';
};

const CalcTemplate: FC<Prop> = ({ sign }) => {
  const { methods, handleChange, Num1, Num2, result } = useCalc(funcMap(sign));

  return (
    <>
      <FormProvider {...methods}>
        <form onChange={methods.handleSubmit(handleChange)}>
          <InputNum1 />
          <InputNum2 />
        </form>
      </FormProvider>
      <ShowResult Num1={Num1} Num2={Num2} sign={sign} result={result} />
    </>
  );
};

export default CalcTemplate;
