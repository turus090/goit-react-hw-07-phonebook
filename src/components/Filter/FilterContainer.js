import { connect } from 'react-redux';
import Filter from './Filter';
import { changeFilter } from 'redux/slices/contacts';

const mapStateToProps = state => ({
  filter: state.contacts.filter,
});
const mapDispatchToProps = {
  changeFilter: changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
