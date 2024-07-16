FROM node:22-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .


# Install npm globally and update Prisma CLI
RUN npm install -g npm@10.8.2
RUN npm install -g prisma@latest

# Install dependencies with increased network timeout
RUN npm install -f

COPY . .

RUN npx prisma generate || npx prisma generate || npx prisma generate

RUN npm run build

EXPOSE 3000

CMD ["npm","run","start"]