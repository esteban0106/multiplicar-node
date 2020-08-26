const argv = require('./config/yards').argv;
const colors = require('colors');

const multiplicar = require('./multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log(argv);
        multiplicar.listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        console.log(argv);
        multiplicar.hacerArchivo(argv.base, argv.limite = 10).then(archivo => console.log(archivo))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
        break;
}