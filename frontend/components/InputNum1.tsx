import React from 'react';
import { useFormContext } from 'react-hook-form';

const InputNum1 = () => {
  const { register } = useFormContext();

  return (
    <input
      type='number'
      min='1'
      max='99'
      {...register('Num1', {
        required: true,
        valueAsNumber: true,
        min: 1,
        max: 99,
      })}
    />
  );
};

export default InputNum1;
