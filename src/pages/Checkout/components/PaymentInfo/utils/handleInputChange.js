import { formatCreditCardNumber, formatCVC, formatExpirationDate } from "./formatPayInfo";

export const handleInputChange = (e,handleChange) => {
  const { target } = e;
  handleChange(e);
  if (target.name === 'number') {
    target.value = formatCreditCardNumber(target.value);
  } else if (target.name === 'expiry') {
    target.value = formatExpirationDate(target.value);
  } else if (target.name === 'cvc') {
    target.value = formatCVC(target.value);
  }
};