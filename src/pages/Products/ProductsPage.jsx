import { useState } from 'react';
import { Sidebar } from './components/FilterSidebar/Sidebar';
import { ProductList } from './components/ProductList/ProductList';
import { ProductsPageStyled } from './ProductsPageStyles';
import { AnimatePresence } from 'framer-motion';
import { PrimaryButton } from '../../components/UI/Buttons/PrimaryButton';
const ProductsPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <ProductsPageStyled>
      <AnimatePresence>{open && <Sidebar setOpen={setOpen} />}</AnimatePresence>
      <div
        style={{ display: 'flex', alignItems: 'center', flexDirection: 'column',width: '90%' }}
      >
        <PrimaryButton onClick={() => setOpen(!open)}> Aplicar Filtros </PrimaryButton>
        <ProductList />
      </div>
    </ProductsPageStyled>
  );
};

export default ProductsPage;
