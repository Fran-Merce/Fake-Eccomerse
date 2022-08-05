import styled from 'styled-components';

export const PrimaryButton = styled.button`
  margin-top: 3rem;
  border: 1px solid #fff;
  min-width: 130px;
  padding: 0.5rem 0;
  background-color: transparent;
  font-size: 1.2rem;
  cursor: pointer;
  font-family: 'Signika', sans-serif;
  font-weight: 500;
  letter-spacing: 1px;
  color: #fff;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #fff;
    color: #000;
  }
  &:disabled{
    opacity: 0.3;
    cursor: not-allowed;
    :hover{
      background-color: transparent;
      color: #fff;
    }
  }
`;
