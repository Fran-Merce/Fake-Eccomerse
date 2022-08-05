import { ModalOverlayStyled } from '../../components/Navbar/NavbarStyled';
import { CheckoutPageStyled, CheckoutPageWrapper } from './CheckoutStyled';
import { CheckoutProducts } from './components/CheckoutProducts/CheckoutProducts';
import { Congratulations } from './components/CongratulationsModal/Congratulations';
import { PaymentInfo } from './components/PaymentInfo/PaymentInfo';
const CheckoutPage = () => {
  if (true)
    return (
      <CheckoutPageStyled>
        <Congratulations />
        <ModalOverlayStyled />
      </CheckoutPageStyled>
    );
  return (
    <>
      <CheckoutPageStyled>
        <CheckoutPageWrapper>
          <PaymentInfo />
          <CheckoutProducts />
        </CheckoutPageWrapper>
      </CheckoutPageStyled>
    </>
  );
};
export default CheckoutPage;
