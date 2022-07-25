import React from 'react';
import { ProductBtn } from '../../../../components/ProductCard/ProductCardStyles';
import { AiOutlineCheck } from 'react-icons/ai';
import { BsShieldCheck } from 'react-icons/bs';
import { MdOutlineLocalShipping } from 'react-icons/md';
import {
  ProductInfoWrapper,
  ProductInfoContent,
  ProductInfoHeader,
  ProductInfoBody,
  ProductInfoText,
  BtnWrapper,
} from './ProductInfoStyles';
import { formatPrice } from '../../../../helpers/formatPrice';
import { useDispatch } from 'react-redux';
import { addProductAction } from '../../../../redux/cart/cartActions';
import { useCheckout } from '../../../../hooks/useCheckout';
export const ProductInfo = ({ product }) => {
  const { name, price, description, details } = product;
  const { switchType, brand, model, warranty, weight, size, rgb, keycaps } = details;
  const handleCheckout = useCheckout();
  const dispatch = useDispatch();
  return (
    <ProductInfoWrapper>
      <ProductInfoHeader>
        <h1>
          {brand} {name}
        </h1>
        <h3>{formatPrice(price)}</h3>
      </ProductInfoHeader>

      <ProductInfoBody>
        <ProductInfoContent>
          <h3>Informacion Tecnica</h3>
          <p>Switches: {switchType}</p>
          <p>tamaño: {size}</p>
          <p>peso: {weight}</p>
          <p>Rgb: {rgb}</p>
          <p>keycaps: {keycaps}</p>
          <p>modelo: {model}</p>
        </ProductInfoContent>
        <hr />
        <ProductInfoContent color={'#3fff50'}>
          <ProductInfoText>
            <BsShieldCheck /> Garantia <span>{warranty}</span>
          </ProductInfoText>
          <p>
            <AiOutlineCheck /> Stock disponible
          </p>
          <p>
            <MdOutlineLocalShipping /> Envio a todo el pais
          </p>
        </ProductInfoContent>
        <p>{description}</p>
      </ProductInfoBody>
      <BtnWrapper>
        <ProductBtn onClick={handleCheckout}>Comprar</ProductBtn>
        <ProductBtn onClick={() => dispatch(addProductAction(product))}>
          Agregar
        </ProductBtn>
      </BtnWrapper>
    </ProductInfoWrapper>
  );
};
