import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../../helpers/formatPrice';
import { addProductAction } from '../../redux/cart/cartActions';
import {
  Price,
  ProductBtn,
  ProductButtonsWrapper,
  ProductCardImgWrapper,
  ProductCardWrapper,
  ProductContentWrapper,
  ProductQuantity,
} from './ProductCardStyles';
// import img from '../../assets/imgs/product1.png';
export const ProductCard = ({ product } = {}) => {
  const { id, price, name, image, category, description } = product;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const hadleNavigate = () => {
    navigate(`/product/${id}`);
  };
  return (
  
      <ProductCardWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <ProductCardImgWrapper>
          <img src={image} alt='' />
        </ProductCardImgWrapper>

        <ProductContentWrapper>
          <h3>{name}</h3>
          <p>{description}</p>
          <Price>{formatPrice(price)}</Price>
          <ProductButtonsWrapper>
            <ProductQuantity onClick={hadleNavigate}>VER</ProductQuantity>
            <ProductBtn onClick={() => dispatch(addProductAction(product))}>
              AGREGAR
            </ProductBtn>
          </ProductButtonsWrapper>
        </ProductContentWrapper>
      </ProductCardWrapper>
   
  );
};
