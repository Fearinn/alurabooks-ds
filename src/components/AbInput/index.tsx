import React from 'react';
import IAbInput from '../../interfaces/Input';
import StyledInput from './StyledInput';

export function AbInput({
  htmlId,
  label,
  type = 'text',
  placeholder,
  onChange,
  value
}: IAbInput) {
  return (
    <StyledInput>
      <label htmlFor={htmlId}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        id={htmlId}
      />
    </StyledInput>
  );
}
