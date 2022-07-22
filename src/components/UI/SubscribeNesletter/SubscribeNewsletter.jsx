import React from 'react';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import {
  SubscribeButton,
  SubscribeInput,
  SubscribeWrapper,
} from './SubscribeStyles';

export const SubscribeNewsletter = () => {
  return (
    <SubscribeWrapper>
      <h5>Subscribite para recibir noticias</h5>
      <div>
        <SubscribeInput type='text' placeholder='youremail@gmail.com' />
        <SubscribeButton>Subscribirse</SubscribeButton>
      </div>
    </SubscribeWrapper>
  );
};
