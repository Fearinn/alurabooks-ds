import React, { useState } from 'react';
import { IAbOption, IAbOptionsGroup } from '../../interfaces/Option';
import { StyledOption, StyledOptionsList } from './StyledOptionsGroup';

export function AbOptionsGroup({
  defaultOption = null,
  options,
}: IAbOptionsGroup) {
  const [selected, setSelected] = useState<IAbOption | null>(defaultOption);
  return (
    <StyledOptionsList role="listbox">
      {options.map((option) => {
        const price = Intl.NumberFormat('pt-br', {
          style: 'currency',
          currency: 'BRL',
        }).format(option.price);
        return (
          <StyledOption
            {...option}
            aria-labelledby={`aboption${option.identificator}-title-id`}
            key={option.identificator}
            role="option"
            tabIndex={0}
            aria-selected={selected?.identificator === option.identificator}
            selected={selected?.identificator === option.identificator}
            onClick={() => {
              setSelected(option);
            }}
          >
            <h3 id={`aboption${option.identificator}-title-id`}>
              {option.title}
            </h3>
            <span>
              <strong>{price}</strong>
            </span>
            <span>{option.formats}</span>
          </StyledOption>
        );
      })}
    </StyledOptionsList>
  );
}
