import React from 'react';
import {
  Price,
  ProductBtn,
  ProductButtonsWrapper,
  ProductCardImgWrapper,
  ProductCardWrapper,
  ProductContentWrapper,
  ProductQuantity,
} from './ProductCardStyles';
import img from '../../assets/imgs/product1.png';
export const ProductCard = props => {
  return (
    <ProductCardWrapper>
      <ProductCardImgWrapper>
        <img src={img} alt='' />
      </ProductCardImgWrapper>

      <ProductContentWrapper>
        <h3>Fount K24</h3>
        <p>
          hoal aslflaslfs aslfaskl;flas fas fl;asfkl;asklf
          asfsfaf;alkskl;fl;aksfkl;askfsal;flpaskl;f
        </p>
        <Price>Precio $300</Price>
        <ProductButtonsWrapper>
          <ProductQuantity>
            <p>-</p>
            <p>1</p>
            <p>+</p>
          </ProductQuantity>
          <ProductBtn>AGREGAR</ProductBtn>
        </ProductButtonsWrapper>
      </ProductContentWrapper>
    </ProductCardWrapper>
  );
};
