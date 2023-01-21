import React from 'react';
import IAbTag from '../../interfaces/Tag';
import StyledTag from './StyledTag';

export function AbTag({ text = "I'm a tag" }: IAbTag) {
  return <StyledTag>{text}</StyledTag>;
}
