import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoriesData } from '../../../../../data/categories';
import {
  removeCategoryAction,
  setCategoryAction,
  setSearchAction,
} from '../../../../../redux/filter/filterActions';
import {
  DropDownOptionStyled,
  DropDownOptionsWrapper,
} from '../DropDown/DropDownStyled';

export const DropDownOptions = () => {
  const { categorySelected,search } = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(
    categorySelected ? categorySelected : null
  );

  const handleSelect = option => {
    if (option === selected) {
      dispatch(removeCategoryAction());
      dispatch(setSearchAction(search));
      return setSelected(null);
    }
    setSelected(option);
    dispatch(setCategoryAction(option));
    dispatch(setSearchAction(search));
  };
  return (
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
  );
};
