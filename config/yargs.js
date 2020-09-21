//requires, hay  3 tipos
// las que perteneces a node,
//las que se deben instalar y
//los archivos que nosotroe creamos

const options = {
    base: { demand: true, alias: 'b' },
    limite: { alias: 'l', default: 100 }
};

const argv = require('yargs')
    //.command(nombre del comando, ayuda a mostrar, objeto de configuración de parámetros )
    //demand = true significa obligatorio
    //alias es otra forma de llamar al comando
    //default es para dar un valor en caso de que no sea enviasdo el comando
    .command('listar', 'Imprime en consola la tabla de multiplicar', options)
    .command('crear', 'Crea un archivo con la tabla de multiplicar', options)
    //help es para mostrar ayuda de cada comando
    //node app.js --help
    //node app.js listar --help
    .help()
    .argv;


module.exports = {
    argv
};