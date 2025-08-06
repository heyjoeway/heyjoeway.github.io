FROM node:22-alpine

# We need Git for a lot of stuff
# Taken from https://github.com/alpine-docker/git/blob/master/Dockerfile
RUN apk fix && \
    apk --no-cache --update add git git-lfs gpg less openssh patch perl && \
    git lfs install

WORKDIR /app

# Copy dependencies first to leverage Docker cache
COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 5173

CMD ["sh", "./watchChanges.sh"]