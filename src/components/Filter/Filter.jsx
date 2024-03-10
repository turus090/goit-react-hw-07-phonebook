import s from './filter.module.css';

const Filter = ({ filter, changeFilter }) => {
  return (
    <div className={s.block}>
      <p className={s.text}>Find contacts by name</p>
      <input
        value={filter}
        onChange={e => {
          changeFilter(e.target.value);
        }}
        className={s.inputFilter}
        placeholder="Entry name"
      />
    </div>
  );
};

export default Filter;
