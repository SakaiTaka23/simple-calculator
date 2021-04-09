import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { formType } from '../type/formType';

const useCalc = (getResult: ({ Num1, Num2 }: any) => Promise<any>) => {
  const [Num1, setNum1] = useState(1);
  const [Num2, setNum2] = useState(1);
  const [result, setResult] = useState(2);
  const methods = useForm<formType>({
    defaultValues: {
      Num1: 1,
      Num2: 1,
    },
  });

  const handleChange = async (data: formType) => {
    console.log(data);
    const response = getResult({ ...data });
    setResult((await response).getResult());
    setNum1(data.Num1);
    setNum2(data.Num2);
  };

  return { methods, handleChange, Num1, Num2, result };
};

export default useCalc;
