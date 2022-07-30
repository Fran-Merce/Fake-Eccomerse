import { DropDown } from './components/FilterSidebar/DropDown/DropDown';
import { ProductList } from './components/ProductList/ProductList';
import { Search } from './components/Search/Search';
import { ProductsPageStyled } from './ProductsPageStyles';

const ProductsPage = () => {
  // const { data } = useSelector(state => state.filter);
  // const { state } = useRedux(useReduxTypes.filter);
  // const { categorySelected, dataFiltered } = state;

  // const [products, setProducts] = useState(data.slice(0, 5));
  // const dispatch = useDispatch();
  // const handleClick = e => {
  //   e.preventDefault();
  //   setProducts(prev =>
  //     prev.concat(data.slice(prev.length, prev.length + 5))
  //   );
  // };

  return (
    <ProductsPageStyled>
      <DropDown />
      <Search/>
      <ProductList />
    </ProductsPageStyled>
  );
};

export default ProductsPage;
