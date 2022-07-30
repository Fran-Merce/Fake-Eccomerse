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
  const [currentImage, setCurrentImage] = useState(images[0].url);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleHover = index => {
    if (index === currentIndex) return;
    setCurrentIndex(index);
    setCurrentImage(images[index]?.url);
  };

  return (
    <ProductGalleryWrapper>
      <PrimaryImageWrapper>
        <PrimaryImage src={currentImage} alt='' />
      </PrimaryImageWrapper>
      <SecondaryImagesWrapper>
        {images.map((img, index) => {
          return (
            <SecondaryImageWrapper
              key={index}
              onMouseEnter={() => handleHover(index)}
            >
              <img key={index} src={img.url} />
            </SecondaryImageWrapper>
          );
        })}
      </SecondaryImagesWrapper>
    </ProductGalleryWrapper>
  );
};
