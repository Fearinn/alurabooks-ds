import React, { useEffect, useRef } from 'react';
import IAbModal from '../../interfaces/Modal';
import StyledModal from './StyledModal';

export function AbModal({
  title,
  children,
  htmlId,
  whenClosed,
  open,
}: IAbModal) {
  const modalBoxRef = useRef<HTMLDivElement>(null);
  const modalBgRef = useRef<HTMLDivElement>(null);


  const handleClick = (event: Event) => {
    if (
      event.target instanceof Node &&
      !modalBoxRef.current?.contains(event.target)
    ) {
      whenClosed();
    }
  };

  useEffect(() => {
    if (modalBoxRef.current) {
      modalBoxRef.current?.setAttribute('tabindex', '0');
      modalBoxRef.current?.addEventListener('focusout', (event) => {
        if (
          event.relatedTarget instanceof Node &&
          !modalBoxRef.current?.contains(event.relatedTarget)
        )
          modalBoxRef.current?.focus();
      });
    }

    modalBgRef.current?.addEventListener('click', handleClick);

    return () => {
      modalBgRef.current?.removeEventListener('click', handleClick);
    };
  }, [open]);

  return (
    <>
      {open && (
        <StyledModal role="dialog" aria-labelledby={htmlId} ref={modalBgRef}>
          <div className="abmodal-box" ref={modalBoxRef}>
            <header>
              <h2 id={htmlId}>{title}</h2>
              <button
                aria-label="fechar modal"
                type="button"
                onClick={() => whenClosed()}
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
