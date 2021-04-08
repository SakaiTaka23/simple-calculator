COMPOSE = docker-compose
UP = $(COMPOSE) up
RUN = docker run
RUN_RM = $(RUN) --rm

PROTO_CMD = protoc \
	-I ./proto \
    --go_out=./backend/proto --go_opt=paths=source_relative \
    --go-grpc_out=./backend/proto --go-grpc_opt=paths=source_relative \
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
	$(COMPOSE) run back go mod tidy

protoc:
	$(info Making code from proto files)
	@rm -f backend/proto/*.proto
	@$(PROTO_CMD)

protoc-doc: proto/*.proto
	$(info Making docs from proto files)
	@$(DOC_CMD)
	
doc-open:
	$(info See the doc on the browser)
	open doc/index.html
