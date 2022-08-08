import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
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
import { toast } from 'react-toastify';
export const ProductCard = ({ product, size = '' } = {}) => {
  const { id, price, name, image, category } = product;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const hadleNavigate = () => {
    navigate(`/product/${id}`);
  };

  const handleAddProduct = () => {
    dispatch(addProductAction(product));
    toast.success('Producto agregado al carrito');
  };

  return (
    <ProductCardWrapper
      size={size}
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
        <p>Categoria: {category}</p>
        <Price>{formatPrice(price)}</Price>
        <ProductButtonsWrapper>
          <ProductQuantity onClick={hadleNavigate}>VER</ProductQuantity>
          <ProductBtn onClick={handleAddProduct}>AGREGAR</ProductBtn>
        </ProductButtonsWrapper>
      </ProductContentWrapper>
    </ProductCardWrapper>
  );
};
