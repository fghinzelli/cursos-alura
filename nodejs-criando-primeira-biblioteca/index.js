import chalk from 'chalk';
import fs from 'fs';

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'));
}

async function pegaArquivo(caminhoDoArquivo) {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(chalk.green(texto))
    } catch (erro) {
        console.log(trataErro(erro))
    } finally {
        console.log(chalk.yellow('Operaçao finalizada'))
    }

}

// function pegaArquivo(caminhoDoArquivo) {
    // const encoding = 'utf-8';
    // fs.promises.readFile(caminhoDoArquivo, encoding)
    // .then(texto => console.log(chalk.green(texto)))
    // .catch(erro => trataErro(erro))
// }



pegaArquivo(`./arquivos/texto1.md`);