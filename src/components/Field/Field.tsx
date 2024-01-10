import { CSSProperties, FC } from 'react';
import { FieldType } from '../../types/FieldType';
import style from './Field.module.scss';
import { Cell } from '../Cell';

export const Field: FC<FieldType> = ({ selectedMode, onCellHoverChange }) => {
  const gridContainerStyle: CSSProperties = {
    gridTemplateColumns: `repeat(${selectedMode.field}, 1fr)`,
    gridTemplateRows: `repeat(${selectedMode.field}, 1fr)`,
  };

  const generateCells = () => {
    const cells = [];
    const totalCells = selectedMode.field ** 2;

    for (let i = 0; i < totalCells; i++) {
      cells.push(<Cell key={i} cellIndex={i} onCellHoverChange={onCellHoverChange}/>);
    }

    return cells;
  };

  return (
    <div className={style.field} style={gridContainerStyle}>
      {generateCells()}
    </div>
  );
}