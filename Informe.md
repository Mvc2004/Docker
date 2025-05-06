# Informe de Despliegue con Docker y GitHub Actions

**Nombre:** Merly  velasquez cortez
**Código:** 2266016

## Aplicación Seleccionada

Una app Node.js con Redis que cuenta las visitas.  
Basado en ejemplos de Docker y Express:  
https://hub.docker.com/_/node  
https://www.npmjs.com/package/redis

## Contenedores

- **Node.js app**: Maneja las solicitudes y cuenta visitas.
- **Redis**: Base de datos en memoria para almacenar las visitas.

## Configuración

**Dockerfile**: Instala dependencias, copia el código y expone el puerto 3000.  
**docker-compose.yml**: Define los dos servicios y establece dependencia de `web` sobre `redis`.

## Pruebas y Resultados

### Salida de `docker ps`

```bash
CONTAINER ID   IMAGE          ...   PORTS                  NAMES
abcd1234       node-redis     ...   0.0.0.0:3000->3000/tcp web
efgh5678       redis:alpine   ...   6379/tcp               redis
```

### Respuesta de curl

```bash
$ curl http://localhost:3000
Número de visitas: 1
```
