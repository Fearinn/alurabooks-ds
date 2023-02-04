import React from 'react';
import IAbTag from '../../interfaces/Tag';
import StyledTag from './StyledTag';

export function AbTag({ children, className }: IAbTag) {
  return <StyledTag className={`${className}`}>{children}</StyledTag>;
}
