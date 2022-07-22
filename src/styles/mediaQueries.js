const breakPoints = {
  mobile: 440,

  tablet: 768,
  laptop: 1024,
  desktop: 1400,
};

export const mediaQueries = {
  mobile: `min-width: ${breakPoints.mobile}px`,
  tablet: `min-width: ${breakPoints.tablet}px`,
  laptop: `min-width: ${breakPoints.laptop}px`,
  desktop: `min-width: ${breakPoints.desktop}px`,
};
