import { FC, useState } from 'react';
import { CellType } from '../../types/CellType';
import style from './Cell.module.scss';

export const Cell: FC<CellType> = ({ cellIndex, onCellHoverChange }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
    onCellHoverChange(cellIndex + 1, !isHovered);
  };

  return (
    <div
      className={`${style.cell} ${isHovered ? style.hovered : ''}`}
      onMouseEnter={handleHover}
    >
      C
    </div>
  );
};