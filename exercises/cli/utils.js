const fs = require('fs')
const path = require('path')

// this path needs to be relative to work with fs
const contactsLocation = path.join(__dirname,'contacts.json')

/**
 * should read the contacts at the
 * @contactsLocation path and convert
 * it to a js object
 */
const getContacts = () => {
  const text=fs.readFileSync(contactsLocation).toString()
  const strings = JSON.parse(text)
  return strings;
}

/**
 * takes a contacts object, converts it to JSON
 * and saves it at the @contactsLocation path
 * @param {Object} contacts contacts object
 */
const saveContacts = (contacts) => {
  const text=JSON.stringify(contacts,null,2);
  fs.writeFileSync(contactsLocation,text);
  return true;
}

module.exports = {
  contactsLocation,
  getContacts,
  saveContacts
}

