import React from 'react';
import IAbTag from '../../interfaces/Tag';
import StyledTag from './StyledTag';

export function AbTag({ children }: IAbTag) {
  return <StyledTag>{children}</StyledTag>;
}
