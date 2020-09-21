//requires, hay  3 tipos
//las que pertenecen a node,
//las que se deben instalar y
//los archivos que nosotroe creamos
const fs = require('fs');
const colors = require('colors');

const listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) & !Number(limite)) {
            reject(`${base} y ${limite} no son numeros`);
            return;
        }

        if (!Number(base)) {
            reject(`${base} no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`${limite} no es un número`);
            return;
        }

        if (limite < 1) {
            reject(`El límite debe ser mayor a 0`);
            return;
        }

        console.log('+++++++++++++++++++++++++++++++'.green);
        console.log(`Tabla del ${base}`.green);
        console.log('+++++++++++++++++++++++++++++++'.green);

        let data = '';

        for (let i = 1; i <= limite; i++) {
            const valor = `${base} * ${i} = ${base * i}`;
            data += `${valor}\n`;
        }

        resolve(data);
    });
};

const crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            const resultado = base * i;

            data += `${base} * ${i} = ${resultado}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve(`tabla-${base}-al-${limite}.txt`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
};