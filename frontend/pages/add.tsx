import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import InputNum1 from '../components/InputNum1';
import InputNum2 from '../components/InputNum2';
import { formType } from '../type/formType';

const Add = () => {
  const methods = useForm<formType>({
    defaultValues: {
      Num1: 1,
      Num2: 99,
    },
  });

  const handleOnSubmit = ({ Num1, Num2 }: formType) => {
    console.log(Num1, Num2);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleOnSubmit)}>
        <InputNum1 />
        <InputNum2 />
        <button type='submit'>Submit</button>
      </form>
    </FormProvider>
  );
};

export default Add;
