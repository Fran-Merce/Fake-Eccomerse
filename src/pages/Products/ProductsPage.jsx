import { DropDown } from './components/FilterSidebar/DropDown/DropDown';
import { ProductList } from './components/ProductList/ProductList';
import { Search } from './components/Search/Search';
import { ProductsPageStyled } from './ProductsPageStyles';

const ProductsPage = () => {

  return (
    <ProductsPageStyled>
      <DropDown />
      <Search/>
      <ProductList />
    </ProductsPageStyled>
  );
};

export default ProductsPage;
