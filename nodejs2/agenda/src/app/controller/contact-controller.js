const db = require('../../config/database');
const ContactDao = require('../infra/contact-dao');
const { validationResult } = require('express-validator/check');
const templates = require('../views/templates');
const { response } = require('../../config/custom-express');

class ContactController {
  rotas() {
    return {
      list: '/contacts',
      new: '/contacts/form',
      edit: '/contacts/:id',
      delete: '/contacts/:id'
    }
  }

  list() {
    return (req, res) => {
      const contactDao = new ContactDao(db);
      contactDao.list()
      .then(contacts => res.marko(
        templates.contacts.list,
        { contacts: contacts }
      ))
      .catch(erro => console.log(erro));
    }
  }

  formNew() {

  }

  formEdit() {

  }

  newContact() {

  } 

  editContact() {

  }

  deleteContact() {

  }
}