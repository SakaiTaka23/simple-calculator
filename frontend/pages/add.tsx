import React from 'react';
import { FormProvider } from 'react-hook-form';
import InputNum1 from '../components/InputNum1';
import InputNum2 from '../components/InputNum2';
import ShowResult from '../components/showResult';
import useCalc from '../hooks/useCalc';

const Add = () => {
  const { methods, handleChange, Num1, Num2, result } = useCalc();

  return (
    <>
      <FormProvider {...methods}>
        <form onChange={methods.handleSubmit(handleChange)}>
          <InputNum1 />
          <InputNum2 />
          <button type='submit'>Submit</button>
        </form>
      </FormProvider>
      <ShowResult Num1={Num1} Num2={Num2} sign='+' result={result} />
    </>
  );
};

export default Add;
