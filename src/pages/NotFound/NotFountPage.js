import styled from 'styled-components';

export const NotFoundPageStyled = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0b1837;

  img {
    width: 100%;
  }
  @media screen and (min-width: 1024px) {
   img {
    width:55%;
   }
  }
`;

export const BtnBack = styled.button`
  position: absolute;
  top: 10%;
  margin: auto;
  font-size: 2rem;
  width: 300px;
  border: none;
  border: 3px solid #fff;
  border-radius: 25px;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #fff;
    color: #0b1837;
  }
`