import React, { useState } from 'react';

import img from '../../../../assets/imgs/product1.png';
import {
  PrimaryImage,
  PrimaryImageWrapper,
  ProductGalleryWrapper,
  SecondaryImagesWrapper,
  SecondaryImageWrapper,
} from './ProductGalleryStyles';
export const ProductsGallery = ({ images = [] }) => {
  console.log(images);
  const [currentImage, setCurrentImage] = useState(images[0].url);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleHover = idImg => {
    if (idImg === currentIndex) return;
    setCurrentIndex(idImg);
    setCurrentImage(images[idImg]?.url);
  };

  return (
    <ProductGalleryWrapper>
      <PrimaryImageWrapper>
        <PrimaryImage src={currentImage} alt='' />
      </PrimaryImageWrapper>
      <SecondaryImagesWrapper>
        {images.map(({ idImg, url }) => {
          return (
            <SecondaryImageWrapper
              key={idImg}
              onMouseEnter={() => handleHover(idImg)}
            >
              <img key={idImg} src={url} />
            </SecondaryImageWrapper>
          );
        })}
      </SecondaryImagesWrapper>
    </ProductGalleryWrapper>
  );
};
