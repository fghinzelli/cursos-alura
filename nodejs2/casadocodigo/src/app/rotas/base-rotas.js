
const BaseController = require('../controllers/base-controller');
const baseController = new BaseController();

module.exports = (app) => {
    const rotasBase = baseController.rotas();
    app.get(rotasBase.home, baseController.home());
};