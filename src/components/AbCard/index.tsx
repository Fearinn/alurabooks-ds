import React from 'react';
import IAbCard from '../../interfaces/Card';
import StyledCard from './StyledCard';

export function AbCard({ children, className }: IAbCard) {
  return <StyledCard className={`${className}`}>{children}</StyledCard>;
}
