import { startSearch } from 'assets/searchFn';
import ListItem from './ListItem';
const List = props => {
  console.log(props.list);
  const currentList =
    props.filter.length === 0
      ? props.list
      : startSearch(props.list, props.filter);
  const listCollection = currentList.map(item => (
    <ListItem key={item.id} {...item} deleteContact={props.deleteContact} />
  ));
  return <ul>{listCollection}</ul>;
};

export default List;
