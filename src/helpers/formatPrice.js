export const formatPrice = price => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'ARS',
  }).format(price);
};
