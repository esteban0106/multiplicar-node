const fs = require('fs');
const colors = require('colors');


module.exports.listarTabla = (base, limite) => {
    for (i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}\n`.rainbow);
    }
}



module.exports.hacerArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor '${base}' no es un numero`);
            return;
        }
        let datos = '';
        for (i = 1; i <= limite; i++) {
            datos += (`${base} * ${i} = ${base*i}\n`);
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, datos, (err) => {
            if (err) reject(err);
            console.log(`El archivo tabla-${base}.txt se creo!`);
        });
    });
}