import { connect } from 'react-redux';
import Form from './Form';
import { addContactData } from './../../redux/slices/contacts';

const mapStateProps = state => ({
  list: state.contacts.list,
});

const mapDispatchProps = {
  createContact: addContactData,
};

export default connect(mapStateProps, mapDispatchProps)(Form);
