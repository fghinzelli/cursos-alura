const fs = require('fs');

// fs.readFile('./assets/pmcs.jpg', (erro, buffer) => {
//     console.log('Arquivo bufferizado');
//     fs.writeFile('./assets/pmcs2.jpg', buffer, erro => {
//         console.log('Arquivo gravado');
//     })
// })

fs.createReadStream('./assets/pmcs.jpg')
    .pipe(fs.createWriteStream('./assets/pmcs-stream.jpg'))
    .on('finish', () => console.log('Imagem escrita com stream de dados'));
