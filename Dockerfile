FROM golang:latest

# Set an env var that matches your github repo name, replace treeder/dockergo here with your repo name
#ENV SRC_DIR=/go/src/github.com/youturnmedia/youturn-web/

COPY . /go/src/github.com/youturnmedia/youturn-web/
WORKDIR /go/src/github.com/youturnmedia/youturn-web/

# Install glide
RUN curl https://glide.sh/get | sh ; 

# Install yarn
RUN curl -sL https://deb.nodesource.com/setup_7.x | bash - ; curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - ;echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list; apt-get update && apt-get -y install yarn
#RUN apt-get install yarn

# Build it:
RUN make install; make build


ENTRYPOINT ["./youturnapp", "run"]

ENV PORT=5001

EXPOSE 5001
