import styled from "styled-components";

export const LoaderStyled = styled.div`
  width:100vw;
  height:100vh;
  position: absolute;
  top:0;
  left:0;
  display: grid;
  place-items: center;
  background-color: #000;
`
export const LoaderImg = styled.img`
display: block;
  width: 110px;
  height: 110px;
  margin: auto;
  animation: spin 1.5s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`