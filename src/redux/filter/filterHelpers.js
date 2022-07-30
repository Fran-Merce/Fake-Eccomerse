import { formatString } from '../../helpers/formatString';

export const searchDataFiltered = (data, search, category) => {
  const searchFormatted = formatString(search);

  if (category) {
    return data
      .filter(product => product.category === category)
      .filter(item => formatString(item.name).includes(searchFormatted));
  }

  return data.filter(item => formatString(item.name).includes(searchFormatted));
};
