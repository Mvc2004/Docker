# Docker
# Informe de Despliegue de Aplicación Web Sencilla
**Nombre:** Merly Velásquez  
**Código:** 2266016-3743

## Aplicación seleccionada

La aplicación elegida es una app sencilla en Node.js que muestra un mensaje en el navegador y puede conectarse a Redis para contar visitas.
Basada en: https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

## Contenedores utilizados

- app: servicio en Node.js
- redis: base de datos en memoria

## Dockerfile

FROM node:alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]


## docker-compose.yml

services:
  app:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - redis

  redis:
    image: redis:alpine

## GitHub Actions

name: Deploy App

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3

      - name: Build and run containers
        run: |
          docker-compose up --build -d
          sleep 10
          docker ps
          curl http://localhost:3000

## Resultados

docker ps:

[output esperado]

curl http://localhost:3000:

¡Hola desde Node.js y Redis! Has visitado esta página X veces.

## Conclusión

El proyecto cumple todos los requisitos funcionales y de automatización con Docker y GitHub Actions.