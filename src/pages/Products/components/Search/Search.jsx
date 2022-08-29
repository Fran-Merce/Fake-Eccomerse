import React, { useEffect, useRef } from 'react';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import {
  clearSearchAction,
  setSearchAction,
} from '../../../../redux/filter/filterActions';
import { InputSearchStyled } from './SearchStyled';

export const Search = () => {
  const dispatch = useDispatch();

  const handleChangeValues = e =>
    debouncedSearch(e.target.value.toLowerCase().trim());

  const debouncedSearch = useRef(
    debounce(value => {
      value.length === 0
        ? dispatch(clearSearchAction())
        : dispatch(setSearchAction(value));
    }, 300)
  ).current;

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);
  return (
    <div>
      <p>Buscar</p>
      <InputSearchStyled placeholder='Tofu60 Dk2' onChange={handleChangeValues} type='text' />
    </div>
  );
};
