import React from 'react';
import ICard from '../../interfaces/Card';
import StyledCard from './StyledCard';

export function Card({ children }: ICard) {
  return <StyledCard>{children}</StyledCard>;
}
