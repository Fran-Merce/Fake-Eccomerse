export const formatString = value => value.replace(/ /g, '').toLowerCase();

export const formatLength = (value, limit = 10) =>
  value.length < limit ? value : `${value.slice(0, limit)}...`;
