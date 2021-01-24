const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }

}
const argv = require('yargs')
    .command('listar', 'Imprime en la consola la tabla de multiplicar', opts)
    .command('crear', 'Crea un archivo en la carpeta multiplicar con la tabla de la base especificada hasta el limite si lo hubiere', opts)
    .help()
    .argv;

module.exports = {
    argv
}