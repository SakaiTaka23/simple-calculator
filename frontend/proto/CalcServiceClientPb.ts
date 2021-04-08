/**
 * @fileoverview gRPC-Web generated client stub for proto
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as calc_pb from './calc_pb';


export class CalcServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoaddition = new grpcWeb.AbstractClientBase.MethodInfo(
    calc_pb.CalcResponse,
    (request: calc_pb.CalcRequest) => {
      return request.serializeBinary();
    },
    calc_pb.CalcResponse.deserializeBinary
  );

  addition(
    request: calc_pb.CalcRequest,
    metadata: grpcWeb.Metadata | null): Promise<calc_pb.CalcResponse>;

  addition(
    request: calc_pb.CalcRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: calc_pb.CalcResponse) => void): grpcWeb.ClientReadableStream<calc_pb.CalcResponse>;

  addition(
    request: calc_pb.CalcRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: calc_pb.CalcResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.CalcService/addition',
        request,
        metadata || {},
        this.methodInfoaddition,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.CalcService/addition',
    request,
    metadata || {},
    this.methodInfoaddition);
  }

  methodInfosubtraction = new grpcWeb.AbstractClientBase.MethodInfo(
    calc_pb.CalcResponse,
    (request: calc_pb.CalcRequest) => {
      return request.serializeBinary();
    },
    calc_pb.CalcResponse.deserializeBinary
  );

  subtraction(
    request: calc_pb.CalcRequest,
    metadata: grpcWeb.Metadata | null): Promise<calc_pb.CalcResponse>;

  subtraction(
    request: calc_pb.CalcRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: calc_pb.CalcResponse) => void): grpcWeb.ClientReadableStream<calc_pb.CalcResponse>;

  subtraction(
    request: calc_pb.CalcRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: calc_pb.CalcResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.CalcService/subtraction',
        request,
        metadata || {},
        this.methodInfosubtraction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.CalcService/subtraction',
    request,
    metadata || {},
    this.methodInfosubtraction);
  }

  methodInfomultiplication = new grpcWeb.AbstractClientBase.MethodInfo(
    calc_pb.CalcResponse,
    (request: calc_pb.CalcRequest) => {
      return request.serializeBinary();
    },
    calc_pb.CalcResponse.deserializeBinary
  );

  multiplication(
    request: calc_pb.CalcRequest,
    metadata: grpcWeb.Metadata | null): Promise<calc_pb.CalcResponse>;

  multiplication(
    request: calc_pb.CalcRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: calc_pb.CalcResponse) => void): grpcWeb.ClientReadableStream<calc_pb.CalcResponse>;

  multiplication(
    request: calc_pb.CalcRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: calc_pb.CalcResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.CalcService/multiplication',
        request,
        metadata || {},
        this.methodInfomultiplication,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.CalcService/multiplication',
    request,
    metadata || {},
    this.methodInfomultiplication);
  }

  methodInfodivision = new grpcWeb.AbstractClientBase.MethodInfo(
    calc_pb.CalcResponse,
    (request: calc_pb.CalcRequest) => {
      return request.serializeBinary();
    },
    calc_pb.CalcResponse.deserializeBinary
  );

  division(
    request: calc_pb.CalcRequest,
    metadata: grpcWeb.Metadata | null): Promise<calc_pb.CalcResponse>;

  division(
    request: calc_pb.CalcRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: calc_pb.CalcResponse) => void): grpcWeb.ClientReadableStream<calc_pb.CalcResponse>;

  division(
    request: calc_pb.CalcRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: calc_pb.CalcResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.CalcService/division',
        request,
        metadata || {},
        this.methodInfodivision,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.CalcService/division',
    request,
    metadata || {},
    this.methodInfodivision);
  }

  methodInforemain = new grpcWeb.AbstractClientBase.MethodInfo(
    calc_pb.CalcResponse,
    (request: calc_pb.CalcRequest) => {
      return request.serializeBinary();
    },
    calc_pb.CalcResponse.deserializeBinary
  );

  remain(
    request: calc_pb.CalcRequest,
    metadata: grpcWeb.Metadata | null): Promise<calc_pb.CalcResponse>;

  remain(
    request: calc_pb.CalcRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: calc_pb.CalcResponse) => void): grpcWeb.ClientReadableStream<calc_pb.CalcResponse>;

  remain(
    request: calc_pb.CalcRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: calc_pb.CalcResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.CalcService/remain',
        request,
        metadata || {},
        this.methodInforemain,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.CalcService/remain',
    request,
    metadata || {},
    this.methodInforemain);
  }

}

