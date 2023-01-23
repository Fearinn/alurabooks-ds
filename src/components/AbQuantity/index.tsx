import React, { useState } from 'react';
import StyledQuantity from './StyledQuantity';

export function AbQuantity() {
  const [quantity, setQuantity] = useState(0);
  return (
    <StyledQuantity>
      <label>Quantidade</label>
      <div>
        <button
          aria-controls="ab_quantity_id"
          onClick={() => {
            if (quantity) setQuantity(quantity - 1);
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
          onClick={() => setQuantity(quantity + 1)}
          type="button"
        >
          +
        </button>
      </div>
    </StyledQuantity>
  );
}
