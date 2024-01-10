import { ResponseType } from './ResponseType';

export interface FieldType {
  selectedMode: ResponseType;
  onCellHoverChange: (cellIndex: number, isHovered: boolean) => void;
}