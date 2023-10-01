import { connect } from 'react-redux';
import List from './List';
import { deleteContactData } from 'redux/slices/contacts';

const mapStateProps = state => ({
  list: state.contacts.list,
  filter: state.contacts.filter,
});

const mapDispatchProps = {
  deleteContact: deleteContactData,
};

export default connect(mapStateProps, mapDispatchProps)(List);
