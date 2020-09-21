//requires, hay  3 tipos
// las que perteneces a node,
//las que se deben instalar y
//los archivos que nosotroe creamos
const { argv } = require('./config/yargs');
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

/*
//--esto es para obtener el segundo parametro de
//--node app.js --base=3
let argv2 = process.argv;
let parametro = argv2[2]; // --base=3
//--se divide a partir del = y se obtiene la posición 1
//--['--base', '3']
//--pero esta forma requiere muchas validacines 
//--para que funcione optimamente
const base = parametro.split('=')[1];

crearArchivo(base)
    .then(archivo =>
        console.log(`Archivo ${archivo} creado`)
    )
    .catch(error =>
        console.log(error)
    );
*/

//obtener el primer comando escrito en la instrucción
const comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(res => console.log(res))
            .catch(error => console.log(error));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(error => console.log(error));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}