import React from 'react';
import IButton from '../../interfaces/Button';
import StyledButton from './StyledButton';

export function AbButton({ text = "Click here", customType = 'primary', onClick }: IButton) {
  return (
    <StyledButton customType={customType} onClick={onClick}>
      {text}
    </StyledButton>
  );
}
