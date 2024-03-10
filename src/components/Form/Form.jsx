import s from './form.module.css';
import Button from '../Button/Button';
import { Notify } from 'notiflix';
import { useState } from 'react';

const Form = ({ list, createContact }) => {
  const [candidateName, setCandidateName] = useState('');
  const [candidatePhone, setCandidatePhone] = useState('');
  const handleCreateContact = e => {
    e.preventDefault();
    const result = list.find(
      contactItem =>
        contactItem.name.toLowerCase() === candidateName.toLowerCase()
    );
    if (result) {
      Notify.warning(`${candidateName} is already in contact`);
    } else {
      createContact({
        name: candidateName,
        phone: candidatePhone,
      });
      setCandidateName('');
      setCandidatePhone('');
    }
  };
  return (
    <form className={s.form} onSubmit={e => handleCreateContact(e)}>
      <p className={s.title}> Create new contact</p>
      <input
        className={s.wrapper}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={candidateName}
        onChange={e => setCandidateName(e.target.value)}
        placeholder="Entry new name"
      />
      <input
        className={s.wrapper}
        type="tel"
        name="number"
        value={candidatePhone}
        onChange={e => setCandidatePhone(e.target.value)}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Entry new phone number"
      />
      <Button text="Add contact" type="submit" />
    </form>
  );
};
export default Form;
