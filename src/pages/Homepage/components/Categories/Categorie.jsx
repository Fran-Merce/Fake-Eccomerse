import React from 'react';
import { CategorieCard } from './CategoriesStyles';


export const Categorie = ({ name, image, id }) => {
  return (
    <CategorieCard color={id === 2 ? '--soft-black' : ''}>
      <img src={image} alt='' />
      <h3>{name}</h3>
    </CategorieCard>
  );
};
