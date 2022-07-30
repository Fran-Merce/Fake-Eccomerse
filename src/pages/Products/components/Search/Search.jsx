import React, { useEffect, useRef } from 'react';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import {
  clearSearchAction,
  setSearchAction,
} from '../../../../redux/filter/filterActions';

export const Search = () => {

  const dispatch = useDispatch();

  const handleChangeValues = e => debouncedSearch(e.target.value.toLowerCase().trim());

  const debouncedSearch = useRef(
    debounce(value => {
      // const valueFormatted=value.trim().toLoweCase();
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

  return <input onChange={handleChangeValues} type='text' />;
};
