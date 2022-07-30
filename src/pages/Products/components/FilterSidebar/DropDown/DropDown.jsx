import { useState } from 'react';
import {
  DropDownOptionStyled,
  DropDownOptionsWrapper,
  DropDownWrapper,
} from './DropDownStyled';

import { useRedux, useReduxTypes } from '../../../../../hooks/useRedux';
import { removeCategoryAction, setCategoryAction } from '../../../../../redux/filter//filterActions';
import { categoriesData } from '../../../../../data/categories';

export const DropDown = () => {
  const { state, dispatch } = useRedux(useReduxTypes.filter);
  const { categorySelected, dataFiltered } = state;
  const [selected, setSelected] = useState(categorySelected ? categorySelected : null);

  const handleSelect = option => {
    if(option === selected){
      dispatch(removeCategoryAction());
      setSelected(null);
      return
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
