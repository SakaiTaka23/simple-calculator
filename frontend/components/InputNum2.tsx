import React from 'react';
import { useFormContext } from 'react-hook-form';

const InputNum2 = () => {
  const { register } = useFormContext();

  return (
    <input
      type='number'
      min='1'
      max='99'
      {...register('Num2', {
        required: true,
        valueAsNumber: true,
        min: 1,
        max: 99,
      })}
    />
  );
};

export default InputNum2;
