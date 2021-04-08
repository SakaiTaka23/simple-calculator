package config

import (
	grpc_middleware "github.com/grpc-ecosystem/go-grpc-middleware"
	grpc_auth "github.com/grpc-ecosystem/go-grpc-middleware/auth"
	grpc_zap "github.com/grpc-ecosystem/go-grpc-middleware/logging/zap"
	grpc_validator "github.com/grpc-ecosystem/go-grpc-middleware/validator"
	"google.golang.org/grpc"
)

func CreateServer() *grpc.Server {

	logger, opts := SetLog()

	s := grpc.NewServer(
		grpc.UnaryInterceptor(
			grpc_middleware.ChainUnaryServer(
				grpc_zap.UnaryServerInterceptor(logger, opts...),
				grpc_auth.UnaryServerInterceptor(Authenticate),
				grpc_validator.UnaryServerInterceptor(),
			),
		),
		grpc.StreamInterceptor(
			grpc_middleware.ChainStreamServer(
				grpc_zap.StreamServerInterceptor(logger, opts...),
				grpc_auth.StreamServerInterceptor(Authenticate),
				grpc_validator.StreamServerInterceptor(),
			),
		),
	)

	return s
}
