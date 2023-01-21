import React from 'react';
import IAbCard from '../../interfaces/Card';
import StyledCard from './StyledCard';

export function AbCard({ children }: IAbCard) {
  return <StyledCard>{children}</StyledCard>;
}
