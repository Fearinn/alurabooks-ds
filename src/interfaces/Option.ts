import { ReactNode } from 'react';

export interface IAbOption {
  identificator: number;
  selected?: boolean;
  title: string;
  price: number;
  formats: string;
  children?: ReactNode;
  onClick?: () => void;
  className: string;
}

export interface IAbOptionsGroup {
  options: IAbOption[];
  defaultOption?: IAbOption | null;
  className: string;
}
