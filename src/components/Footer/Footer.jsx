import React from 'react';
import logo from '../../assets/imgs/logo.svg';
import { FooterStyled, SocialMediaWrapper } from './FooterStyles';
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from 'react-icons/ai';
export const Footer = () => {
  return (
    <FooterStyled>
      <p>&copy; 2022 Francisco merce</p>

      <SocialMediaWrapper>
        <AiOutlineInstagram size='2rem' />
        <AiOutlineGithub size='2rem' />
        <AiOutlineTwitter size='2rem' />
        <AiOutlineLinkedin size='2rem' />
      </SocialMediaWrapper>
    </FooterStyled>
  );
};
