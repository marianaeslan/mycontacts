const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Mariana',
    email: 'mariana@icloud.com',
    phone: '11998877665',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
