import React from 'react';

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
