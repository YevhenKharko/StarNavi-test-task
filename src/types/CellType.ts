export interface CellType {
  cellIndex: number;
  onCellHoverChange: (cellIndex: number, isHovered: boolean) => void;
}