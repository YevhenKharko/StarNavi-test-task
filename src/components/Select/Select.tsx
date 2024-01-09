import { SelectType } from '../../types/SelectType';
import style from './Select.module.scss';

export const Select = (props: SelectType) => {
  const { setSelectedMode, data } = props;

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedName = e.target.value;
    const mode = data.find(el => el.name === selectedName);
    mode && setSelectedMode(mode);
  }

  return (
    <select className={style.select} onChange={handleSelectChange} defaultValue={'Pick mode:'}>
      <option disabled>Pick mode:</option>
      {data.map(el => <option value={el.name} key={el.id}>{el.name}</option>)}
    </select>
  );
}