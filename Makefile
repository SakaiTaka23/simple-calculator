COMPOSE = docker-compose
UP = $(COMPOSE) up
RUN = docker run
RUN_RM = $(RUN) --rm

PROTO_CMD = $(RUN_RM) \
	-v $(PWD):$(PWD) \
	-w $(PWD) znly/protoc:0.4.0 \
	-I ./proto \
	--go_out=plugins=grpc:./backend/proto \
	--govalidators_out=./backend/proto \
	proto/*.proto

DOC_CMD = $(RUN_RM) \
  	-v $(PWD)/doc:/out \
  	-v $(PWD)/proto:/protos \
  	pseudomuto/protoc-gen-doc

up:
	$(UP)
back:
	$(UP) back
front:
	$(UP) front
db:
	$(UP) db

tidy:
	$(RUN) backend go mod tidy

protoc:
	$(info Making code from proto files)
	@rm -f backend/proto/*.proto
	@$(PROTO_CMD)

protoc-doc: proto/*.proto
	$(info Making docs from proto files)
	@$(DOC_CMD)
	
