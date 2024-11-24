FROM node:18 AS development

WORKDIR /usr/src/app

COPY  package.json ./
COPY pnpm-lock.yaml ./

# npm comes with node by defualt -- > so we have to download pnpm using npm
RUN npm install pnpm -g

# all dependices
RUN pnpm install

COPY . .

RUN pnpm run build




FROM node:18 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY  package.json ./
COPY pnpm-lock.yaml ./

RUN npm install pnpm -g 

RUN pnpm install --prod

COPY --from=Development /usr/src/app/dist ./dist

CMD ["node" , "dist/apps/reservations/main"]










