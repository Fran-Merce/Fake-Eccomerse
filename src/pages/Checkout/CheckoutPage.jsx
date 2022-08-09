import { CheckoutPageStyled, CheckoutPageWrapper } from './CheckoutStyled';
import { CheckoutProducts } from './components/CheckoutProducts/CheckoutProducts';
import { PaymentInfo } from './components/PaymentInfo/PaymentInfo';
const CheckoutPage = () => {
  return (
    <CheckoutPageStyled>
      <CheckoutPageWrapper>
        <PaymentInfo />
        <CheckoutProducts />
      </CheckoutPageWrapper>
    </CheckoutPageStyled>
  );
};
export default CheckoutPage;
