import React, { useEffect, useRef, useState } from 'react';
import IAbModal from '../../interfaces/Modal';
import StyledModal from './StyledModal';

export function AbModal({ title, open = false, children, htmlId }: IAbModal) {
  const [isOpen, setIsOpen] = useState(open);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.setAttribute('tabindex', '0');
      modalRef.current.addEventListener('focusout', (event) => {
        if (event.relatedTarget instanceof Node && !modalRef.current?.contains(event.relatedTarget))
          modalRef.current?.focus();
      });
    }

    document.addEventListener('click', (event) => {
      if (
        event.target instanceof Node &&
        !modalRef.current?.contains(event.target)
      ) {
        setIsOpen(false);
      }
    });
  }, []);

  return (
    <>
      {isOpen && (
        <StyledModal role="dialog" aria-labelledby={htmlId}>
          <div className="abmodal-box" ref={modalRef}>
            <header>
              <h2 id={htmlId}>{title}</h2>
              <button
                aria-label="fechar modal"
                type="button"
                onClick={() => setIsOpen(false)}
              >
                X
              </button>
            </header>
            <main>{children}</main>
          </div>
        </StyledModal>
      )}
    </>
  );
}
