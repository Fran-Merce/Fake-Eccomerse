import img from '../assets/imgs/product1.png';

const productsData = [
  {
    id: 1,
    name: 'Product 1',
    price: '100',
    image: img,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, se lorem lorem lorem',
    category: 'Teclados',
  },
  {
    id: 2,
    name: 'Product 2',
    price: '200',
    image: img,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, se lorem lorem lorem',
    category: 'Teclados',
  },
  {
    id: 3,
    name: 'Product 3',
    price: '200',
    image: img,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, se lorem lorem lorem',
    category: 'Teclados',
  },
  {
    id: 4,
    name: 'Product 4',
    price: '400',
    image: img,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, se lorem lorem lorem',
    category: 'Teclados',
  },
  {
    id: 5,
    name: 'Product 5',
    price: '200',
    image: img,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, se lorem lorem lorem',
    category: 'Monitores',
  },
  {
    id: 6,
    name: 'Product 6',
    price: '200',
    image: img,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, se lorem lorem lorem',
    category: 'Monitores',
  },
  {
    id: 7,
    name: 'Product 7',
    price: '200',
    image: img,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, se lorem lorem lorem',
    category: 'Monitores',
  },
  {
    id: 8,
    name: 'Product 8',
    price: '200',
    image: img,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, se lorem lorem lorem',
    category: 'Mouses',
  },
  {
    id: 9,
    name: 'Product 9',
    price: '200',
    image: img,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, se lorem lorem lorem',
    category: 'Mouses',
  },
  {
    id: 10,
    name: 'Product 10',
    price: '200',
    image: img,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, se lorem lorem lorem',
    category: 'Mouses',
  },
  {
    id: 11,
    name: 'Product 11',
    price: '200',
    image: img,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, se lorem lorem lorem',
    category: 'Teclado',
  },
  {
    id: 12,
    name: 'Product 12',
    price: '200',
    image: img,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, se lorem lorem lorem',
    category: 'Monitor',
  },
  {
    id: 13,
    name: 'Product 13',
    price: '200',
    image: img,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, se lorem lorem lorem',
    category: 'Mouses',
  },
  {
    id: 14,
    name: 'Product 14',
    price: '200',
    image: img,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, se lorem lorem lorem',
    category: 'Teclado',
  },
  {
    id: 15,
    name: 'Product 15',
    price: '200',
    image: img,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, se lorem lorem lorem',
    category: 'Monitor',
  },
  {
    id: 16,
    name: 'Product 16',
    price: '200',
    image: img,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, se lorem lorem lorem',
    category: 'Mouses',
  },
];
export const TotalProducts = productsData.length;

export const products = productsData.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }

  acc[product.category] = [...acc[product.category], product];

  return acc;
}, {});
