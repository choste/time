FROM node:lts-alpine

ENV DATABASE_URL=file:/tmp/garden.db

COPY . .
RUN npm ci && npm run prisma migrate deploy

FROM node:lts-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm ci --omit=dev
# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source
COPY . .

ENV DATABASE_URL=file:/usr/src/app/garden.db
COPY --from=0 /tmp/garden.db /usr/src/app/garden.db
RUN npm run prisma generate

EXPOSE 8080
CMD [ "node", "build/index.js" ]
