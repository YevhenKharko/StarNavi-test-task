import { FieldType } from '../../types/FieldType';
import style from './Field.module.scss';
// import { Cell } from '../Cell';

export const Field = (props: FieldType) => {
  const { selectedMode} = props;
  console.log(selectedMode);
  return (
    <div className={style.field}>
      <h1>Field</h1>
    </div>
  )
}