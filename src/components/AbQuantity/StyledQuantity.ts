import styled from 'styled-components';

const StyledQuantity = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-family: Arial, Helvetica, sans-serif;

  label {
    box-sizing: border-box;
    color: #002f52;
    display: block;
    font-weight: 700;
  }

  div {
    box-sizing: border-box;
    display: flex;
    gap: 0.5rem;
    place-items: center;
  }

  button {
    background: #002f52;
    border-radius: 50%;
    border: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    color: #ffffff;
    cursor: pointer;
    height: 28px;
    width: 28px;
  }
  span {
    color: #002f52;
    line-height: 1.5rem;
    font-size: 1.125rem;
  }
`;

export default StyledQuantity;
