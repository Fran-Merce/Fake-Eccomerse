import React from 'react';
import { CategorieCard } from './CategoriesStyles';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TYPES } from '../../../../redux/TYPES';
export const Categorie = ({ name, image, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRedirect = () => {
    dispatch({ type: TYPES.SET_CATEGORY, payload: name });
    navigate('/products');
  };

  return (
    <CategorieCard
      onClick={handleRedirect}
      color={id === 2 ? '--soft-black' : '--black'}
    >
      <div>
      <img src={image} alt='' />
      </div>
      <h3>{name}</h3>
    </CategorieCard>
  );
};
