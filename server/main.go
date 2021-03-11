package main

import (
	"context"
	"log"
	"net"

	pb "github.com/SakaiTaka23/simple-calculator/server/calc/calc.pb.go"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

const (
	port = ":9090"
)

type server struct{}

func (s *server) Addition(ctx context.Context, r *pb.CalcRequest) (*pb.CalcResponse, error) {
	log.Printf("Recieved : %s , %s", r.GetNum1(), r.GetNum2())
	return &pb.CalcResponse{r.GetNum1() + r.GetNum2()}, nil
}

func main() {
	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	s := grpc.NewServer()
	pb.RegisterCalcServiceServer(s, &server{})
	reflection.Register(s)
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %c", err)
	}
}
