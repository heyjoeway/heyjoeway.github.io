FROM node:22-bookworm

# Install required packages
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        git git-lfs gnupg2 less openssh-client patch perl && \
    git lfs install && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy dependencies first to leverage Docker cache
COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 5173

CMD ["sh", "watchChanges.sh"]