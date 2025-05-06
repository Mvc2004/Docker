const express = require('express');
const redis = require('redis');
const app = express();
const port = 3000;


const client = redis.createClient({
  host: 'redis', 
  port: 6379
});

client.on('connect', function() {
  console.log('Conectado a Redis');
});

app.get('/', (req, res) => {
  client.incr('visits', function(err, visits) {
    if (err) {
      res.status(500).send('Error con Redis');
      return;
    }
    res.send(`Número de visitas: ${visits}`);
  });
});


app.listen(port, () => {
  console.log(`Aplicación escuchando en http://localhost:${port}`);
});
