import { CSSProperties, FC, ReactNode, useEffect, useState } from 'react';
import { FieldType } from '../../types/FieldType';
import { Cell } from '../Cell';
import style from './Field.module.scss';

export const Field: FC<FieldType> = ({ selectedMode, onCellHoverChange }) => {
  const [cells, setCells] = useState<ReactNode[]>([]);

  useEffect(() => {
    const generateCells = () => {
      const newCells = [];
      const totalCells = selectedMode.field ** 2;

      for (let i = 0; i < totalCells; i++) {
        newCells.push(
          <Cell key={`${i}-${selectedMode.id}`} cellIndex={i} onCellHoverChange={onCellHoverChange} />
        );
      }

      setCells(newCells);
    };

    generateCells();
  }, [selectedMode, onCellHoverChange]);

  const gridContainerStyle: CSSProperties = {
    gridTemplateColumns: `repeat(${selectedMode.field}, 1fr)`,
    gridTemplateRows: `repeat(${selectedMode.field}, 1fr)`,
  };

  return (
    <div className={style.field} style={gridContainerStyle}>
      {cells}
    </div>
  );
};
