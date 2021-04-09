package handler

import (
	"context"
	"log"

	pb "server/proto"

	"server/config"
	"server/utils"
)

type CalcServiceServer struct {
	pb.UnimplementedCalcServiceServer
}

func (s *CalcServiceServer) Addition(ctx context.Context, r *pb.CalcRequest) (*pb.CalcResponse, error) {
	log.Printf("Recieved : Add %d , %d", r.GetNum1(), r.GetNum2())
	return &pb.CalcResponse{Result: int32(r.GetNum1() + r.GetNum2())}, nil
}

func (s *CalcServiceServer) Division(ctx context.Context, r *pb.CalcRequest) (*pb.CalcResponse, error) {
	log.Printf("Recieved : Divide %d , %d", r.GetNum1(), r.GetNum2())
	return &pb.CalcResponse{Result: int32(r.GetNum1() / r.GetNum2())}, nil
}

func (s *CalcServiceServer) Multiplication(ctx context.Context, r *pb.CalcRequest) (*pb.CalcResponse, error) {
	log.Printf("Recieved : Multiply %d , %d", r.GetNum1(), r.GetNum2())
	return &pb.CalcResponse{Result: int32(r.GetNum1() * r.GetNum2())}, nil
}

func (s *CalcServiceServer) Subtraction(ctx context.Context, r *pb.CalcRequest) (*pb.CalcResponse, error) {
	log.Printf("Recieved : Subtract %d , %d", r.GetNum1(), r.GetNum2())
	return &pb.CalcResponse{Result: int32(r.GetNum1() - r.GetNum2())}, nil
}

func (s *CalcServiceServer) Remain(ctx context.Context, r *pb.CalcRequest) (*pb.CalcResponse, error) {
	log.Printf("Recieved : Remain %d, %d", r.GetNum1(), r.GetNum2())
	return &pb.CalcResponse{Result: int32(r.GetNum1() % r.GetNum2())}, nil
}

func (s *CalcServiceServer) AuthFuncOverride(ctx context.Context, fullMethodName string) (context.Context, error) {
	log.Println("client is calling method:", fullMethodName)
	skipAuth := []string{"/proto.CalcService/addition", "/proto.CalcService/division", "/proto.CalcService/multiplication", "/proto.CalcService/subtraction"}
	if utils.Contains(skipAuth, fullMethodName) {
		return ctx, nil
	}

	ctx, err := config.Authenticate(ctx)
	if err != nil {
		return ctx, err
	}

	return ctx, nil
}
