import styled from 'styled-components';

const StyledInput = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    box-sizing: border-box;
    color: #002f52;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    margin-left: 1rem;
  }

  input {
    box-sizing: border-box;
    line-height: 1.5rem;
    border: 1px solid #002f52;
    border-radius: 45px;
    color: #002f52;
    font-size: 1rem;
    padding: 0.5rem 1.5rem;
    width: 100%;

    &:focus {
      outline: none;
    }
  }
`;

export default StyledInput;
