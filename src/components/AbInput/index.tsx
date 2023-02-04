import React from 'react';
import IAbInput from '../../interfaces/Input';
import StyledInput from './StyledInput';

export function AbInput({
  id,
  label,
  type = 'text',
  placeholder,
  onChange,
  className
}: IAbInput) {
  return (
    <StyledInput>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className={`${className}`}
        id={id}
      />
    </StyledInput>
  );
}
