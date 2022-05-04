import chalk from 'chalk';
import fs from 'fs';

console.log(chalk.blue.bgWhite.bold('Alura'));

console.log(chalk.blue.bgBlue('Curso', 'de', 'NodeJS'));

console.log(chalk.red('vermelho'), chalk.underline.bgBlue('azul'))
const paragrafo = 'Lorem ipsum';

console.log(`
    CPU: ${chalk.red('90%')}
    RAM: ${chalk.green('40%')}
    DISK: ${chalk.yellow('70%')}
`);