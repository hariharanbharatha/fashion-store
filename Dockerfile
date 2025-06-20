# Multistage build
FROM node:18 AS frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build

FROM node:18
WORKDIR /app
COPY backend/ ./backend/
RUN cd backend && npm install
COPY --from=frontend-build /app/frontend/build/ ./frontend/

EXPOSE 5000
CMD ["node", "backend/server.js"]

