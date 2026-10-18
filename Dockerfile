FROM mcr.microsoft.com/playwright:v1.64.1-noble

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npx playwright install --with-deps

CMD ["npm", "test"]