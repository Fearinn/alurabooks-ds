import styled from 'styled-components';
import { IAbOption } from '../../interfaces/Option';

export const StyledOptionsList = styled.div`
  box-sizing: border-box;
  display: flex;
  font-family: 'Poppins', sans-serif;
  gap: 1.25rem;

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export const StyledOption = styled.div<IAbOption>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props: IAbOption) =>
    props.selected
      ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)'
      : '#FFFFFF'};
  border: 1px solid;
  border-color: ${(props: IAbOption) =>
    props.selected
      ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)'
      : '#eb9b00'};
  border-radius: 8px;
  cursor: pointer;
  gap: 0.5rem;
  width: 194px;
  height: 88px;
  padding: 0.5rem 0;
  font-size: 0.75rem;
  color: ${(props: IAbOption) => (props.selected ? '#FFFFFF' : '#eb9b00')};

  h3 {
    text-transform: capitalize;
  }
  strong {
    font-size: 1rem;
    font-weight: 700;
  }

  span:not(:has(strong)) {
    color: ${(props: IAbOption) =>
      props.selected ? 'inherit' : 'rgba(0, 0, 0, 0.54)'};
  }
`;
