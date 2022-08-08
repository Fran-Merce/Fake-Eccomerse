import { useState } from 'react';
import { DropDown } from './components/FilterSidebar/DropDown/DropDown';
import { Sidebar } from './components/FilterSidebar/Sidebar';
import { ProductList } from './components/ProductList/ProductList';
import { Search } from './components/Search/Search';
import { ProductsPageStyled } from './ProductsPageStyles';
import { AnimatePresence } from 'framer-motion';
const ProductsPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <ProductsPageStyled>
      <AnimatePresence>{open && <Sidebar setOpen={setOpen} />}</AnimatePresence>
      <div
        style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
      >
        <button onClick={() => setOpen(!open)}>Seleccionar categoria</button>
        <ProductList />
      </div>
    </ProductsPageStyled>
  );
};

export default ProductsPage;
