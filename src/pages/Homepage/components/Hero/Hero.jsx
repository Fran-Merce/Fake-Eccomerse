import {
  ArrowButtonStyled,
  HeroButtonStyled,
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit.
        </p>
  
      </HeroContentStyled>
      <ArrowButtonStyled initial='hidden' animate='show' variants={arrowVariants}>
        <AiOutlineArrowDown fontSize={'2.3rem'} />
      </ArrowButtonStyled>
    </HeroWrapperStyled>
  );
};
