import { ReactNode } from 'react';

export default interface IAbModal {
  open?: boolean;
  title: string;
  children?: ReactNode;
  className?: string;
  htmlId: string;
  whenClosed: (open: boolean) => void
}
