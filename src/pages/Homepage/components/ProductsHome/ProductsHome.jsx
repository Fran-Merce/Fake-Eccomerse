import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductCard } from '../../../../components/ProductCard/ProductCard';

import {
  Button,
  ProductCardsWrapper,
  ProductHomeStyled,
  Title,
} from './ProductsHomeStyles';

export const ProductsHome = ({ title = '', data = [] }) => {
  const navigate = useNavigate();
  return (
    <ProductHomeStyled>
      <Title>{title}</Title>
      <ProductCardsWrapper>
        {data.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductCardsWrapper>
      <Button onClick={() => navigate('/products')}>Ver Todos</Button>
    </ProductHomeStyled>
  );
};
