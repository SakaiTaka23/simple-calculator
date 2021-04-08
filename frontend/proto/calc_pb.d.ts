import * as jspb from 'google-protobuf'

import * as github_com_mwitkow_go$proto$validators_validator_pb from './github.com/mwitkow/go-proto-validators/validator_pb';


export class CalcRequest extends jspb.Message {
  getNum1(): number;
  setNum1(value: number): CalcRequest;

  getNum2(): number;
  setNum2(value: number): CalcRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CalcRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CalcRequest): CalcRequest.AsObject;
  static serializeBinaryToWriter(message: CalcRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CalcRequest;
  static deserializeBinaryFromReader(message: CalcRequest, reader: jspb.BinaryReader): CalcRequest;
}

export namespace CalcRequest {
  export type AsObject = {
    num1: number,
    num2: number,
  }
}

export class CalcResponse extends jspb.Message {
  getResult(): number;
  setResult(value: number): CalcResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CalcResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CalcResponse): CalcResponse.AsObject;
  static serializeBinaryToWriter(message: CalcResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CalcResponse;
  static deserializeBinaryFromReader(message: CalcResponse, reader: jspb.BinaryReader): CalcResponse;
}

export namespace CalcResponse {
  export type AsObject = {
    result: number,
  }
}

