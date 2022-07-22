import styled from 'styled-components';


const loginBg =
  'https://external-preview.redd.it/ieV4VoFLENgOJ7S-CBjQXUODx2xEx9rFb7VtIV0qMh0.jpg?auto=webp&s=ffcb1a82ed1cfb5001a8b30f17fc896bfb41a3f1';
const registerBg = 'https://cdn.wallpapersafari.com/32/39/O0cm74.png';

export const AuthLayoutStyled = styled.div`
  width: 100%;
  height: calc(100vh - 90px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--soft-black);
  background-image: url(${props => (props.bg === 'login' ? loginBg : registerBg)});
  background-size: cover;
  background-position: center;
`;
