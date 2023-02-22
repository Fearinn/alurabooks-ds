import React, { useState } from 'react';
import { IAbQuantity } from '../../interfaces/Quantity';
import StyledQuantity from './StyledQuantity';

export function AbQuantity({
  onChangeQuantity,
  initialQuantity = 0,
}: IAbQuantity) {
  const [quantity, setQuantity] = useState(initialQuantity);
  return (
    <StyledQuantity>
      <label>Quantidade</label>
      <div>
        <button
          aria-controls="ab_quantity_id"
          onClick={() => {
            if (quantity) {
              if (onChangeQuantity) onChangeQuantity(quantity - 1);
              setQuantity(quantity - 1);
            }
          }}
          type="button"
        >
          -
        </button>
        <span id="ab_quantity_id" aria-live="polite">
          {quantity.toString().padStart(2, '0')}
        </span>
        <button
          aria-controls="ab_quantity_id"
          onClick={() => {
            if (onChangeQuantity) onChangeQuantity(quantity + 1);
            setQuantity(quantity + 1);
          }}
          type="button"
        >
          +
        </button>
      </div>
    </StyledQuantity>
  );
}
