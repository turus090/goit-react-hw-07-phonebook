export const startSearch = (contacts, filter) =>
  contacts.filter(contactItem => {
    return contactItem.name.toLowerCase().includes(filter.toLowerCase());
  });
