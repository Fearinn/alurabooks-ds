import styled from 'styled-components';

const StyledCard = styled.div`
  box-sizing: border-box;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;

  @media (min-width: 768px) {
    padding: 2rem;
  }

  @media (min-width: 1200px) {
    padding: 3rem 2rem 3rem 3rem;
    max-width: 551px;
  }
`;

export default StyledCard;
