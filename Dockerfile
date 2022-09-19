FROM node:lts
WORKDIR /usr
COPY package.json ./
COPY tsconfig.json ./
COPY src ./src
COPY public ./public
RUN ls -a
RUN npm install
EXPOSE 3000
CMD ["npm","start"]