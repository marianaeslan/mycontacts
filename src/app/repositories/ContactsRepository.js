const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Mariana',
    email: 'mariana@icloud.com',
    phone: '11998877665',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Camila',
    email: 'camila@icloud.com',
    phone: '15998877665',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) =>
      resolve(contacts.find((contact) => contact.id === id))
    );
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
