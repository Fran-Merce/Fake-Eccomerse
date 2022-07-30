import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ProductCard } from '../../../../components/ProductCard/ProductCard';
import { PrimaryButton } from '../../../../components/UI/PrimaryButton/PrimaryButton';
import { ProductListStyled, ProductListWrapper } from './ProductListStyled';
export const ProductList = () => {
  const { dataFiltered } = useSelector(state => state.filter);
  const [data, setData] = useState(dataFiltered.slice(0, 6));

  const hadleClick = e => {
    e.preventDefault();
    setData(prevState => [
      ...prevState,
      ...dataFiltered.slice(prevState.length, prevState.length + 6),
    ]);
  };
  
  useEffect(() => {
    setData(dataFiltered.slice(0, 6));
  }, [dataFiltered]);

  return (
    <ProductListWrapper justifyContent={data.length ? 'space-betweeen' : 'center'}>
      {data.length ? (
        <ProductListStyled >
          <AnimatePresence>
            {data.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </ProductListStyled>
      ) : (
        <h2>no products</h2>
      )}
      {data.length < dataFiltered.length && <PrimaryButton onClick={hadleClick}>Ver mas</PrimaryButton>}
    </ProductListWrapper>
  );
};
