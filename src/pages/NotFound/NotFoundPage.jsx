import { NotFoundPageStyled } from './NotFoundPageStyled';
import img from '../../assets/imgs/notfound.png';

export const NotFoundPage = () => {
  return (
    <NotFoundPageStyled>
      <img src={img} alt='' />
    </NotFoundPageStyled>
  );
};
