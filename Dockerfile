FROM oven/bun@sha256:8f780b55dff2ed547ba2503b3b5c247dc4bcb9c3db56e382f48387f24ee31c13 AS builder
RUN groupadd -g 10001 nonroot && \
    useradd -u 10000 \
            -g nonroot \
            -d /home/nonroot \
            -s /bin/bash \
            -m nonroot

USER nonroot:nonroot

WORKDIR /home/nonroot

COPY ./package.json ./bun.lockb ./
RUN bun i --production \
          --frozen-lockfile \
          --verbose
COPY . .
RUN bun build-prod

FROM scratch
COPY --from=builder /home/nonroot/birthday /app
CMD [ "./app/birthday" ]