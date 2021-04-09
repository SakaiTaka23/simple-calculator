import { CalcServiceClient } from '../proto/CalcServiceClientPb';
import { CalcRequest } from '../proto/calc_pb';
import { formType } from '../type/formType';

const funcMap = (sign: '+' | '-' | '*' | '/' | '%') => {
  switch (sign) {
    case '+':
      return getAddResult;
    case '-':
      return getSubResult;
    case '*':
      return getMultResult;
    case '/':
      return getDivResult;
    case '%':
      return getRemainResult;
  }
};

const getAddResult = async ({ Num1, Num2 }: formType) => {
  const request = new CalcRequest();
  request.setNum1(Num1);
  request.setNum2(Num2);
  const client = new CalcServiceClient('http://localhost:8080');
  const response = await client.addition(request, {});
  return response;
};

const getSubResult = async ({ Num1, Num2 }: formType) => {
  const request = new CalcRequest();
  request.setNum1(Num1);
  request.setNum2(Num2);
  const client = new CalcServiceClient('http://localhost:8080');
  const response = await client.subtraction(request, {});
  return response;
};

const getMultResult = async ({ Num1, Num2 }: formType) => {
  const request = new CalcRequest();
  request.setNum1(Num1);
  request.setNum2(Num2);
  const client = new CalcServiceClient('http://localhost:8080');
  const response = await client.multiplication(request, {});
  return response;
};

const getDivResult = async ({ Num1, Num2 }: formType) => {
  const request = new CalcRequest();
  request.setNum1(Num1);
  request.setNum2(Num2);
  const client = new CalcServiceClient('http://localhost:8080');
  const response = await client.division(request, {});
  return response;
};

const getRemainResult = async ({ Num1, Num2 }: formType) => {
  const request = new CalcRequest();
  request.setNum1(Num1);
  request.setNum2(Num2);
  const client = new CalcServiceClient('http://localhost:8080');
  const response = await client.remain(request, {});
  return response;
};

export { funcMap };
