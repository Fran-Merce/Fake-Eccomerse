import { AnimatePresence } from 'framer-motion';
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
    <AnimatePresence>
      <ProductHomeStyled
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Title>{title}</Title>
        <ProductCardsWrapper>
          {data.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductCardsWrapper>
        <Button onClick={() => navigate('/products')}>Ver Todos</Button>
      </ProductHomeStyled>
    </AnimatePresence>
  );
};
