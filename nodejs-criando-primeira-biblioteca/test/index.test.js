import pegaArquivo  from '../index';

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('pegaArquivo::', () => {
    it('deve ser uma função', () => {
        expect(typeof pegaArquivo).toBe('function');
    })
    it('deve retornar um array com os resultados', async () => {
        const resultado = await pegaArquivo('/home/fghinzelli/projetos/cursos-alura/nodejs-criando-primeira-biblioteca/test/arquivos/texto1.md')
        expect(resultado).toEqual(arrayResult)
    })
    it('deve retornar mensagem "não há links"', async () => {
        const resultado = await pegaArquivo('/home/fghinzelli/projetos/cursos-alura/nodejs-criando-primeira-biblioteca/test/arquivos/texto1_semlinks.md')
        expect(resultado).toBe('Não há links')
    })
})