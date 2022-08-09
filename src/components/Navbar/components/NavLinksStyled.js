import styled from 'styled-components';

export const LinksWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: 'poppins', sans-serif;
`;
export const CartIconWrapper = styled.button`
  position: relative;
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background:none;
  border: none ;
  transition: all 0.3s ease-in-out;
  & > p {
    position: absolute;
    top: -5px;
    right: -5px;
    font-size: 0.9rem;
    color: var(--secondary-text);
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;