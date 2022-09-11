import {
  ArrowButtonStyled,
  HeroContentStyled,
  HeroWrapperStyled,
} from './HeroStyled';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { arrowVariants } from './framerMotionVariants';
export const Hero = () => {
  return (
    <HeroWrapperStyled>
      <HeroContentStyled>
        <h1>Custom Fans</h1>
        <p>
          En custom Fans Tenermos una amplia variedad de teclados, switches, keycaps y
          mucho mas. Tamiben tenemos los mejores precios del mercado.
          <span > ! Hecho por Fans pora Fans !</span>
        </p>
      </HeroContentStyled>
      <ArrowButtonStyled initial='hidden' animate='show' variants={arrowVariants}>
        <AiOutlineArrowDown fontSize={'2.3rem'} />
      </ArrowButtonStyled>
    </HeroWrapperStyled>
  );
};
