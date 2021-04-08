COMPOSE = docker-compose
UP = $(COMPOSE) up
RUN = docker run
RUN_RM = $(RUN) --rm

PROTO_CMD_BACK = protoc \
	-I ./proto proto/*.proto \
    --go_out=./backend/proto --go_opt=paths=source_relative \
    --go-grpc_out=./backend/proto --go-grpc_opt=paths=source_relative \
    --govalidators_out=./backend/proto \

PROTO_CMD_FRONT =  protoc \
	-I=proto proto/*.proto \
	--js_out=import_style=commonjs:frontend/proto \
	--grpc-web_out=import_style=typescript,mode=grpcwebtext:frontend/proto

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
	$(COMPOSE) run back go mod tidy

protoc: protoc-back protoc-front
	$(info Made code for backend and frontend)

protoc-back:
	$(info Making code from proto files for backend)
	@rm -f backend/proto/*.proto
	@$(PROTO_CMD_BACK)

protoc-front:
	$(info Making code from proto files for frontend)
	@rm -f frontend/proto/*.ts
	@rm -f frontend/proto/*.js
	$(PROTO_CMD_FRONT)

protoc-doc: proto/*.proto
	$(info Making docs from proto files)
	@$(DOC_CMD)
	
doc-open:
	$(info See the doc on the browser)
	open doc/index.html
