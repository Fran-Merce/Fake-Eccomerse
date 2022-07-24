import styled from 'styled-components';

export const NotFoundPageStyled = styled.div`
  width: 100%;
  height: calc(100vh - 90px);
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
      width: 55%;
    }
  }
`;
