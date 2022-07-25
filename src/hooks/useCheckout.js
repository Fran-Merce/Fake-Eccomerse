import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TYPES } from '../redux';
import { handleCartToggleAction } from '../redux/cart/cartActions';
export const useCheckout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { status } = useSelector(state => state.auth);
  const { hidden } = useSelector(state => state.cart);

  const handleCheckout = () => {
    if (status === 'authenticated') {
      return navigate('/checkout');
    }
    navigate('/auth/login');
    if (!hidden) {
      dispatch(handleCartToggleAction());
    }
  };
  return handleCheckout;
};
