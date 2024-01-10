import { CSSProperties, FC } from 'react';
import { FieldType } from '../../types/FieldType';
import { Cell } from '../Cell';
import style from './Field.module.scss';

export const Field: FC<FieldType> = ({ selectedMode, onCellHoverChange }) => {
  // TODO - useEffect to renderCells accoring to selectedMode
  // const [cells, setCells] = useState([])
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