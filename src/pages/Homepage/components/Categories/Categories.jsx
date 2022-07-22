import { categoriesData } from '../../../../data/categories';

import React from 'react';
import { Categorie } from './Categorie';
import { CategoriesWrapper } from './CategoriesStyles';
export const Categories = () => {
  return (
    <CategoriesWrapper>
      {categoriesData.map(category => (
        <Categorie key={category.id} {...category} />
      ))}
    </CategoriesWrapper>
  );
};
