const express = require("express");
const { createClient } = require("redis");

const app = express();
const port = 3000;

const client = createClient({
  url: 'redis://redis:6379' // nombre del contenedor en docker-compose
});

client.on('error', err => console.log('Redis Client Error', err));

async function startServer() {
  await client.connect(); // Espera a que Redis esté conectado

  app.get("/", async (req, res) => {
    const visits = await client.incr("visits");
    res.send(`Número de visitas: ${visits}`);
  });

  app.listen(port, () => {
    console.log(`Aplicación escuchando en http://localhost:${port}`);
  });
}

startServer();
