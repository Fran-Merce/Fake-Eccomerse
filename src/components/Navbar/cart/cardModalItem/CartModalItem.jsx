import { RiArrowUpSLine, RiArrowDownSLine} from 'react-icons/ri';
import {BiXCircle } from 'react-icons/bi';
import {
  CartModalItemImg,
  CartModalItemStyled,
  QuantityWrapper,
} from './CartModalItemStyled';

import { formatPrice } from '../../../../helpers/formatPrice';
import { useDispatch } from 'react-redux';

import {
  addProductAction,
  removeOneProductAction,
  removeProductAction,
} from '../../../../redux/cart/cartActions';

export const CartModalItem = ({ product }) => {
  const { name, price, quantity, image } = product;
  const dispatch = useDispatch();

  return (
    <CartModalItemStyled>
      <div>
        <CartModalItemImg src={image} alt='' />
      </div>
      <div>
        <p>{name}</p>
        <p>{formatPrice(price)}</p>
      </div>
      <QuantityWrapper>
        <RiArrowUpSLine
          color='#000'
          cursor='pointer'
          onClick={() => dispatch(addProductAction(product))}
        />
        <p>{quantity}</p>
        <RiArrowDownSLine
          onClick={() => dispatch(removeOneProductAction(product))}
          color='#000'
          cursor='pointer'
        />
        <BiXCircle
          cursor='pointer'
          color='red'
          onClick={() => dispatch(removeProductAction(product))}
          fontSize='1.4rem'
        >
          x
        </BiXCircle>
      </QuantityWrapper>
    </CartModalItemStyled>
  );
};
