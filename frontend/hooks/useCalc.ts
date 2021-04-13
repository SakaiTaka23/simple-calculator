import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { CalcResponse } from '../proto/calc_pb';
import { formType } from '../type/formType';

const useCalc = (fetchResult: ({ Num1, Num2 }: formType) => Promise<CalcResponse>) => {
  const [Num1, setNum1] = useState(1);
  const [Num2, setNum2] = useState(1);
  const [result, setResult] = useState(2);
  const methods = useForm<formType>({
    defaultValues: {
      Num1: 1,
      Num2: 1,
    },
  });

  useEffect(() => {
    handleChange({ Num1, Num2 });
  }, []);

  const handleChange = async (data: formType) => {
    console.log(data);
    const response = fetchResult({ ...data });
    setResult((await response).getResult());
    setNum1(data.Num1);
    setNum2(data.Num2);
  };

  return { methods, handleChange, Num1, Num2, result };
};

export default useCalc;
