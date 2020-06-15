const baseRoutes = require('./base-routes');
const contactsRoutes = require('./contacts-routes');

module.exports = (app) => {
  baseRoutes(app);
  contactsRoutes(app);
}