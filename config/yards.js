const com = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

module.exports.argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', com)
    .command('crear', 'genera una tabla de multiplicar', com)
    .help()
    .argv;