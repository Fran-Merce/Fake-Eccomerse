import styled from 'styled-components';
import { mediaQueries } from '../../../../styles/mediaQueries';

export const ProductGalleryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (${mediaQueries.tablet}) {
    width: 40%;
  }
`;
export const PrimaryImageWrapper = styled.div`
  width: 320px;
  min-height: 30vh;

  @media (${mediaQueries.mobile}) {
    width: 400px;
    margin-bottom: 20px;
  }
`;
export const PrimaryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const SecondaryImagesWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (${mediaQueries.mobile}) {
    gap: 10px;
  }
`;
export const SecondaryImageWrapper = styled.div`
  width: 30%;
  max-height: 100px;

  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.1);
  }
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (${mediaQueries.mobile}) {
    width: 150px;
    height: 100px;
  }
  @media (${mediaQueries.tablet}) {
    min-width: 90px;
    width: 160px;
  }
`;
