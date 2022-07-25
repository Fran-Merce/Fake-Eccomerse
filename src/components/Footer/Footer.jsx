import React from 'react';
import logo from '../../assets/imgs/logo.svg';
import { FooterContent, FooterStyled, SocialMediaWrapper } from './FooterStyles';
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from 'react-icons/ai';
import { SubscribeNewsletter } from '../UI/SubscribeNesletter/SubscribeNewsletter';
export const Footer = () => {
  return (
    <FooterStyled>
      <SubscribeNewsletter />

      <FooterContent>
        <SocialMediaWrapper>
          <AiOutlineInstagram size='2rem' />
          <AiOutlineGithub size='2rem' />
          <AiOutlineTwitter size='2rem' />
          <AiOutlineLinkedin size='2rem' />
        </SocialMediaWrapper>
      </FooterContent>
    </FooterStyled>
  );
};
