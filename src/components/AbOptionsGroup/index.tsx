import React, { useState } from 'react';
import { IOption, IOptionsGroup } from '../../interfaces/Option';
import { StyledOption, StyledOptionsList } from './StyledOptionsGroup';

export function AbOptionsGroup({
  defaultOption = null,
  options,
}: IOptionsGroup) {
  const [selected, setSelected] = useState<IOption | null>(defaultOption);
  return (
    <StyledOptionsList role="listbox">
      {options.map((option) => (
        <StyledOption
          {...option}
          key={option.identificator}
          role="option"
          aria-selected={selected?.identificator === option.identificator}
          selected={selected?.identificator === option.identificator}
          onClick={() => {
            setSelected(option);
          }}
        >
          <h3>{option.title}</h3>
          <span>
            <strong>R${option.price.toFixed(2)}</strong>
          </span>
          <span>{option.formats}</span>
        </StyledOption>
      ))}
    </StyledOptionsList>
  );
}
