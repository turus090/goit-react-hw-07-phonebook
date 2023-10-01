import axios from 'axios';
const url = 'https://6518207c582f58d62d356ba6.mockapi.io/api';

export const getContacts = async () => {
  const { data } = await axios.get(`${url}/contacts`);
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`${url}/contacts/${id}`);
  return data;
};

export const addContact = async (name, phone) => {
  const { data } = await axios.post(`${url}/contacts`, {
    name,
    phone,
  });
  return data;
};
