import { FC } from 'react';
import style from './CellsList.module.scss';
import { CellsListType } from '../../types/CellsListType';

export const CellsList: FC<CellsListType> = ({ hoveredCells, selectedMode }) => {
  return (
    <div className={style.container}>
      <h2>Hovered squares:</h2>
      <ul className={style.list}>
        {hoveredCells.map(cell => {
           const column = ((cell - 1) % selectedMode.field) + 1;
           const row = Math.ceil(cell / selectedMode.field);
          return <li className={style.item} key={cell}> Row:<span className={style.accent}>{row}</span>, Column:<span className={style.accent}>{column}</span></li>
        })}
      </ul>
    </div>
  )
}