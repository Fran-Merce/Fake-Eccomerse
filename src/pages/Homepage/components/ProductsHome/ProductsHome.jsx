import React from 'react';
import { ProductCard } from '../../../../components/ProductCard/ProductCard';
import { HeroButtonStyled } from '../Hero/HeroStyled';
import {
  Button,
  ProductCardsWrapper,
  ProductHomeStyled,
  Title,
} from './ProductsHomeStyles';

export const ProductsHome = ({ title }) => {
  return (
    <ProductHomeStyled>
      {title && <Title>{title}</Title>}
      <ProductCardsWrapper>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductCardsWrapper>
      {/* <ProductCard />
        <ProductCard />
        <ProductCard /> */}
      <Button>Ver Todos</Button>
    </ProductHomeStyled>
  );
};
