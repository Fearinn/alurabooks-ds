import styled, { css } from 'styled-components';
import IButton from '../../interfaces/Button';

const StyledButton = styled.button<IButton>`
  box-sizing: border-box;
  background: ${(props: IButton) =>
    props.customType === 'primary' ? '#eb9b00' : '#FFFFFF'};
  padding: 1rem 2rem;
  border: 2px solid #eb9b00;
  color: ${(props: IButton) =>
    props.customType === 'primary' ? '#FFFFFF' : '#eb9b00'};
  font-size: 1.25rem;
  cursor: pointer;

  ${(props: IButton) =>
    props.customType === 'primary'
      ? css`
          &:hover {
            background-color: #b87900;
            border: 2px solid #b87900;
          }
        `
      : css`
          &:hover {
            background-color: #FFFFFF;
            border: 2px solid #b87900;
            color: #b87900;
          }
        `}
`;

export default StyledButton;
