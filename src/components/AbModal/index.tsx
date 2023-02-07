import React, { useEffect, useRef} from 'react';
import IAbModal from '../../interfaces/Modal';
import StyledModal from './StyledModal';

export function AbModal({ title, open, children, htmlId, whenClosed}: IAbModal) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.setAttribute('tabindex', '0');
      modalRef.current.addEventListener('focusout', (event) => {
        if (
          event.relatedTarget instanceof Node &&
          !modalRef.current?.contains(event.relatedTarget)
        )
          modalRef.current?.focus();
      });
    }

    document.addEventListener('click', (event) => {
      if (
        event.target instanceof Node &&
        !modalRef.current?.contains(event.target)
      ) {
        whenClosed(false)
      }
    });
  }, []);

  return (
    <>
      {open && (
        <StyledModal role="dialog" aria-labelledby={htmlId}>
          <div className="abmodal-box" ref={modalRef}>
            <header>
              <h2 id={htmlId}>{title}</h2>
              <button
                aria-label="fechar modal"
                type="button"
                onClick={() => whenClosed(open)}
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
