import React from 'react';
import IAbButton from '../../interfaces/Button';
import StyledButton from './StyledButton';

export function AbButton({ text = "Click here", customType = 'primary', onClick, className }: IAbButton) {
  return (
    <StyledButton customType={customType} onClick={onClick} className={`${className}`}>
      {text}
    </StyledButton>
  );
}
