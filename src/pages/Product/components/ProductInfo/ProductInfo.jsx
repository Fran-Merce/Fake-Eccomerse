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
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
export const ProductInfo = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { name, price, details, warranty} = product;

  const handleCheckout = () => {
    dispatch(addProductAction(product));
    navigate('/checkout');
  };
const handleAddProduct = () => {
  addProductAction(product)
  toast.success('Producto agregado al carrito');
}
  return (
    <ProductInfoWrapper>
      <ProductInfoHeader>
        <h1>
          {name}
        </h1>
        <h3>{formatPrice(price)}</h3>
      </ProductInfoHeader>

      <ProductInfoBody>
        <ProductInfoContent>
          <h3>Informacion Tecnica</h3>
          {Object.values(details).map((detail, index) => (
            <p key={index}>{detail}</p>
          ))}
        </ProductInfoContent>
        
        <hr />

        <ProductInfoContent color={'#3fff50'}>
          <ProductInfoText>
            <BsShieldCheck /> Garantia <span>{warranty}</span>
          </ProductInfoText>
          <ProductInfoText>
            <AiOutlineCheck /> Stock disponible
          </ProductInfoText>
          <ProductInfoText>
            <MdOutlineLocalShipping /> Envio a todo el pais
          </ProductInfoText>
        </ProductInfoContent>
        <p>
         Al comprar este producto aceptas las condiciones de compra y venta.
        </p>
      </ProductInfoBody>
      <BtnWrapper>
        <ProductBtn onClick={handleCheckout}>Comprar</ProductBtn>
        <ProductBtn onClick={handleAddProduct}>
          Agregar
        </ProductBtn>
      </BtnWrapper>
    </ProductInfoWrapper>
  );
};
