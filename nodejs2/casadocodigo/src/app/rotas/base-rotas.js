const BaseControlador = require('../controladores/base-controlador');
const baseControlador = new BaseControlador();

module.exports = (app) => {
  const rotasBase = baseControlador.rotas();
  app.get(rotasBase.home, baseControlador.home());
};