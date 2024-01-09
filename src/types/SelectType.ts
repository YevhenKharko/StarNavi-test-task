import { ResponseType } from './ResponseType';

export interface SelectType {
  setSelectedMode: (val: ResponseType) => void;
  data: ResponseType[];
}