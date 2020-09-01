var fs = require('fs');

var arquivo = process.argv[2];

fs.readFile(arquivo, function(image, buffer) {
  console.log('arquivo lido');

  fs.writeFile('image2.jpg', buffer, function() {
    console.log('arquivo escrito');
  })
})