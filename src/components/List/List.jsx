import { startSearch } from 'assets/searchFn';
import ListItem from './ListItem';
const List = ({ list, filter, deleteContact }) => {
  const currentList = filter.length === 0 ? list : startSearch(list, filter);

  return (
    <ul>
      {currentList.map(item => (
        <ListItem key={item.id} {...item} deleteContact={deleteContact} />
      ))}
    </ul>
  );
};

export default List;
