package main

import (
	"log"
	"net"

	"server/config"
	"server/handler"
	pb "server/proto"

	"google.golang.org/grpc/reflection"
)

const (
	port = ":9090"
)

func main() {
	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	s := config.CreateServer()

	pb.RegisterCalcServiceServer(s, &handler.CalcServiceServer{})
	reflection.Register(s)
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %c", err)
	}
}
