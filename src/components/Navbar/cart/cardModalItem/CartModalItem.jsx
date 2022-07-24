import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';
import {
  CartModalItemImg,
  CartModalItemStyled,
  QuantityWrapper,
} from './CartModalItemStyled';

import { formatPrice } from '../../../../helpers/formatPrice';
import { useDispatch } from 'react-redux';

import {
  addProductAction,
  removeProductAction,
} from '../../../../redux/cart/cartActions';

export const CartModalItem = ({ product }) => {
  const { name, price, quantity, id, image } = product;
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
          onClick={() => dispatch(removeProductAction(product))}
          color='#000'
          cursor='pointer'
        />
      </QuantityWrapper>
    </CartModalItemStyled>
  );
};
