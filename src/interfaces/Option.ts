import { ReactNode } from 'react';

export interface IOption {
  identificator: number;
  selected?: boolean;
  title: string;
  price: number;
  formats: string;
  children?: ReactNode;
  onClick: () => void;
}

export interface IOptionsGroup {
  options: IOption[];
  defaultOption: IOption | null;
}
