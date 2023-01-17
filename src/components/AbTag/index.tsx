import React from 'react';
import ITag from '../../interfaces/Tag';
import StyledTag from './StyledTag';

export function AbTag({ text = "I'm a tag" }: ITag) {
  return <StyledTag>{text}</StyledTag>;
}
