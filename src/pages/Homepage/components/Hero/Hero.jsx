import {
  ArrowButtonStyled,
  HeroButtonStyled,
  HeroContentStyled,
  HeroWrapperStyled,
} from './HeroStyled';
export const Hero = () => {
  return (
    <HeroWrapperStyled>
      <HeroContentStyled>
        <h1>Custom Keybord is Art</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit.
        </p>
        <HeroButtonStyled>Ver Mas </HeroButtonStyled>
      </HeroContentStyled>
      <ArrowButtonStyled />
    </HeroWrapperStyled>
  );
};
