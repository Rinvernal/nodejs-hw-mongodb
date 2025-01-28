import { Contact } from '../db/models/contacts.js';

export const getAllContacts = async () => {
  console.log('Fetching contacts from database...');
  const contacts = await Contact.find();
  console.log('Contacts:', contacts);
  return contacts;
};

export const getContactById = async (contactId) => {
  const contact = await Contact.findById(contactId);
  return contact;
};  