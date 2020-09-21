## Nodejs, yargs y colors

Este proyecto genera archivos de texto con tablas de multiplicar

...
npm install
...

Para mostrar en consola la tabla de multiplicar
...
node app listar -b 2 -l 10
...

Para crear un archivo de texto con la tabla de multiplicar
...
node app crear -b 2 -l 10
...

Parametros:
-b, --base
Es la tabla de multiplicar que se va a generar
-l, --limite
Es el valor hasta el cual va a llegar la tabla (este parametro no es oblifatorio, tiene valor 100 por default)