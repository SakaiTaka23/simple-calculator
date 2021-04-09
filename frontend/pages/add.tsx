import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import InputNum1 from '../components/InputNum1';
import InputNum2 from '../components/InputNum2';
import ShowResult from '../components/showResult';
import { CalcServiceClient } from '../proto/CalcServiceClientPb';
import { CalcRequest } from '../proto/calc_pb';
import { formType } from '../type/formType';

const Add = () => {
  const [Num1, setNum1] = useState(1);
  const [Num2, setNum2] = useState(1);
  const [result, setResult] = useState(2);
  const methods = useForm<formType>({
    defaultValues: {
      Num1: 1,
      Num2: 99,
    },
  });

  const handleChange = (data: formType) => {
    console.log(data);
    getResult({ ...data });
    setNum1(data.Num1);
    setNum2(data.Num2);
  };

  const getResult = async ({ Num1, Num2 }: formType) => {
    const request = new CalcRequest();
    request.setNum1(Num1);
    request.setNum2(Num2);
    const client = new CalcServiceClient('http://localhost:8080');
    const response = await client.addition(request, {});
    setResult(response.getResult());
    console.log(result);
  };

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
