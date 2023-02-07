import styled from 'styled-components';

const StyledModal = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  background-color: rgba(101, 101, 101, 0.85);
  z-index: 99;

  header {
    display: flex;
    justify-content: space-between;

    button {
      background-color: transparent;
      border: none;
      color: #002F52;
      cursor: pointer;
      font-size: 1.125rem;
    }
  }

  .abmodal-box {
    box-sizing: border-box;
    padding: 2.5rem 3rem 2.5rem 2.5rem;
    display: flex;
    background-color: #ffffff;
    border-radius: 24px;
    margin: 0;

    h2 {
      margin: 0;
      color: #eb9b00;
    }
  }
`;

export default StyledModal;
