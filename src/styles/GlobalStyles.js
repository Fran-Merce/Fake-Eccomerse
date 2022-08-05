import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600&display=swap');

:root{
  --primary-text:#fff;
  --secondary-text:#f7c942ff;
  --soft-yellow:#ffee32ff;
  --black:#101010ff;
  --soft-black:#252525;
  --grey:#333533ff;
  
} 

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* font-family: 'Poppins', sans-serif; */
  text-decoration: none;
  list-style: none;
}

*::selection {
  background: #f7c942;

}
body{
  /* color:  var(--primary-text); */
  background-color: var(--black);
}

*:visited{
  text-decoration: none;
  color: inherit;
}
`;
