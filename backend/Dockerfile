FROM golang:1.16.3-alpine3.13 as base

ENV CGO_ENABLED=0

WORKDIR /app/go/base

COPY go.mod .
COPY go.sum .

RUN go mod download
RUN go get -u github.com/cosmtrek/air
COPY . .

RUN go build -o main

FROM alpine as production

COPY --from=base /app/go/base/main .

EXPOSE 5000
CMD [ "./main" ]
