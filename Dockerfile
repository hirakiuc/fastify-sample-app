FROM node:6

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN curl -o- -L https://yarnpkg.com/install.sh | bash && \
  yarn install --pure-lockfile

EXPOSE 3000

CMD ["yarn", "run", "start"]
