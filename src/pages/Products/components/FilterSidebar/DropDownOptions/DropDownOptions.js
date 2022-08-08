import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoriesData } from '../../../../../data/categories';
import {
  removeCategoryAction,
  setCategoryAction,
} from '../../../../../redux/filter/filterActions';
import {
  DropDownOptionStyled,
  DropDownOptionsWrapper,
} from '../DropDown/DropDownStyled';

export const DropDownOptions = () => {
  const { categorySelected } = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(
    categorySelected ? categorySelected : null
  );

  const handleSelect = option => {
    if (option === selected) {
      dispatch(removeCategoryAction());
      return setSelected(null);
    }
    setSelected(option);
    dispatch(setCategoryAction(option));
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
