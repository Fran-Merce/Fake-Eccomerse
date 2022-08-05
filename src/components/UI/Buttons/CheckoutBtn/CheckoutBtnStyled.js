import styled from "styled-components";

export const CheckoutBtnStyled = styled.button`
  position: relative;
  width: 50%;
  max-width: 150px;
  padding: 0 0.5rem;
  height: 35px;
  border: 1px solid #fff;
  background-color: transparent;
  color: #fff;
  font-family: 'Signika', sans-serif;
  font-size: 1.1rem;
  font-weight: 300;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 1rem;
  :disabled {
    cursor: not-allowed;
    & > span {
      display: none;
    }
  }
  & > span {
    top: 0;
    position: absolute;
    width: 100%;
    left: -200%;
    background-color: #fff;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.3s;
    & img {
      width: 32px;
      height: auto;
      margin-left: 10px;
    }
  }

  &:hover span {
    left: 0;
    color: #000;
  }
`;
