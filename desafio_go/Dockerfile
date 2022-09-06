FROM golang:1.16-alpine as base_go

WORKDIR /app

COPY src/hello_world_fc.go ./

RUN go build hello_world_fc.go

FROM scratch
WORKDIR /
COPY --from=base_go /app/hello_world_fc .
CMD ["./hello_world_fc"]
