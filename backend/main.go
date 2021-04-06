package main

import (
	"context"
	"log"
	"net"

	pb "server/calc"

	grpc_auth "github.com/grpc-ecosystem/go-grpc-middleware/auth"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

const (
	port = ":9090"
)

type server struct{}

func (s *server) Addition(ctx context.Context, r *pb.CalcRequest) (*pb.CalcResponse, error) {
	log.Printf("Recieved : Add %d , %d", r.GetNum1(), r.GetNum2())
	return &pb.CalcResponse{Result: r.GetNum1() + r.GetNum2()}, nil
}

func (s *server) Division(ctx context.Context, r *pb.CalcRequest) (*pb.CalcResponse, error) {
	log.Printf("Recieved : Divide %d , %d", r.GetNum1(), r.GetNum2())
	return &pb.CalcResponse{Result: r.GetNum1() / r.GetNum2()}, nil
}

func (s *server) Multiplication(ctx context.Context, r *pb.CalcRequest) (*pb.CalcResponse, error) {
	log.Printf("Recieved : Multiply %d , %d", r.GetNum1(), r.GetNum2())
	return &pb.CalcResponse{Result: r.GetNum1() * r.GetNum2()}, nil
}

func (s *server) Subtraction(ctx context.Context, r *pb.CalcRequest) (*pb.CalcResponse, error) {
	log.Printf("Recieved : Subtract %d , %d", r.GetNum1(), r.GetNum2())
	return &pb.CalcResponse{Result: r.GetNum1() - r.GetNum2()}, nil
}

func (s *server) Remain(ctx context.Context, r *pb.CalcRequest) (*pb.CalcResponse, error) {
	log.Printf("Recieved : Remain %d, %d", r.GetNum1(), r.GetNum2())
	return &pb.CalcResponse{Result: r.GetNum1() % r.GetNum2()}, nil
}

func authenticate(ctx context.Context) (context.Context, error) {
	token, err := grpc_auth.AuthFromMD(ctx, "bearer")
	log.Printf("Recievd : Token %s", token)
	if err != nil {
		return nil, err
	}
	return ctx, err
}

func (s *server) AuthFuncOverride(ctx context.Context, fullMethodName string) (context.Context, error) {
	log.Println("client is calling method:", fullMethodName)
	skipAuth := []string{"/CalcService/Addition", "/CalcService/Division", "/CalcService/Multiplication", "/CalcService/Subtraction"}
	if Contains(skipAuth, fullMethodName) {
		return ctx, nil
	}

	ctx, err := authenticate(ctx)
	if err != nil {
		return ctx, err
	}

	return ctx, nil
}

func Contains(s []string, e string) bool {
	for _, a := range s {
		if a == e {
			return true
		}
	}
	return false
}

func main() {
	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	s := grpc.NewServer(grpc.UnaryInterceptor(grpc_auth.UnaryServerInterceptor(authenticate)))
	pb.RegisterCalcServiceServer(s, &server{})
	reflection.Register(s)
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %c", err)
	}
}
