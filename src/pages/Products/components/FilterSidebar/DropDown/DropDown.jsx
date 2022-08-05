import { useState } from 'react';
import {
  DropDownOptionStyled,
  DropDownOptionsWrapper,
  DropDownWrapper,
} from './DropDownStyled';

import { useSelector, useDispatch } from 'react-redux';
import {
  removeCategoryAction,
  setCategoryAction,
} from '../../../../../redux/filter//filterActions';
import { categoriesData } from '../../../../../data/categories';

export const DropDown = () => {
  const { categorySelected } = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(
    categorySelected 
    ? categorySelected 
    : null
  );

  const handleSelect = option => {
    if (option === selected) {
      dispatch(removeCategoryAction());
      setSelected(null);
      return;
    }
    setSelected(option);
    dispatch(setCategoryAction(option));
  };

  return (
    <DropDownWrapper>
      <p>Categorias</p>
      <DropDownOptionsWrapper>
        {categoriesData.map(({ name }) => (
          <DropDownOptionStyled
            selected={selected === name && selected}
            key={name}
            onClick={() => handleSelect(name)}
          >
            {name}
          </DropDownOptionStyled>
        ))}
      </DropDownOptionsWrapper>
    </DropDownWrapper>
  );
};
