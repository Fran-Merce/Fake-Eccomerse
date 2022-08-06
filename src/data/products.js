

const productsData = [
  {
    id: 1,
    name: 'Product 1',
    price: '100',
    image: './assets/imgs/product1.png',
    category: 'teclados',
    warranty: '12 meses',
    brand: 'Logitech',
    images: [
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_1_top_down_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_2_angled_left_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_1_top_down_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_fps_pro_1_us_main_a0215554-cca4-4ef3-b904-8d0b54585f7a_300x.jpg?v=1655754825',
      },
    ],
    details: {
      switchType: 'Switches cherry blue',
      model: 'Modelo G502',
      weight: 'Peso 0.5 kg',
      size: 'Teclado 60%',
      rgb: 'RGB: si',
      keycaps: 'Keycaps: ksmw',
    },
  },
  {
    id: 2,
    name: 'Product 2',
    price: '200',
   image: './assets/imgs/product1.png',
    brand: 'teton',
    category: 'teclados',
    images: [
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_1_top_down_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_2_angled_left_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_1_top_down_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_fps_pro_1_us_main_a0215554-cca4-4ef3-b904-8d0b54585f7a_300x.jpg?v=1655754825',
      },
    ],
    details: {
      switchType: 'Switches cherry blue',
      model: 'Modelo G502',
      weight: 'Peso 0.5 kg',
      size: 'Teclado 60%',
      rgb: 'RGB: si',
      keycaps: 'Keycaps: ksmw',
    },
  },
  {
    id: 3,
    name: 'Product 3',
    price: '200',
   image: './assets/imgs/product1.png',
    brand: 'teton',
    category: 'teclados',
    images: [
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_1_top_down_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_2_angled_left_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_1_top_down_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_fps_pro_1_us_main_a0215554-cca4-4ef3-b904-8d0b54585f7a_300x.jpg?v=1655754825',
      },
    ],
    details: {
      switchType: 'Switches cherry blue',
      model: 'Modelo G502',
      weight: 'Peso 0.5 kg',
      size: 'Teclado 60%',
      rgb: 'RGB: si',
      keycaps: 'Keycaps: ksmw',
    },
  },
  {
    id: 4,
    name: 'Product 4',
    price: '400',
   image: './assets/imgs/product1.png',
    brand: 'Razer',
    category: 'teclados',
    images: [
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_1_top_down_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_2_angled_left_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_1_top_down_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_fps_pro_1_us_main_a0215554-cca4-4ef3-b904-8d0b54585f7a_300x.jpg?v=1655754825',
      },
    ],
    details: {
      switchType: 'Switches cherry blue',
      model: 'Modelo G502',
      weight: 'Peso 0.5 kg',
      size: 'Teclado 60%',
      rgb: 'RGB: si',
      keycaps: 'Keycaps: ksmw',
    },
  },
  {
    id: 5,
    name: 'Product 5',
    price: '200',
   image: './assets/imgs/product1.png',
    brand: 'Razer',
    category: 'monitoreses',
    images: [
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_1_top_down_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_2_angled_left_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_1_top_down_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_fps_pro_1_us_main_a0215554-cca4-4ef3-b904-8d0b54585f7a_300x.jpg?v=1655754825',
      },
    ],
    details: {
      switchType: 'Switches cherry blue',
      model: 'Modelo G502',
      weight: 'Peso 0.5 kg',
      size: 'Teclado 60%',
      rgb: 'RGB: si',
      keycaps: 'Keycaps: ksmw',
    },
  },
  {
    id: 6,
    name: 'Product 6',
    price: '200',
   image: './assets/imgs/product1.png',
    brand: 'Razer',
    category: 'monitoreses',
    images: [
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_1_top_down_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_2_angled_left_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_1_top_down_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_fps_pro_1_us_main_a0215554-cca4-4ef3-b904-8d0b54585f7a_300x.jpg?v=1655754825',
      },
    ],
    details: {
      switchType: 'Switches cherry blue',
      model: 'Modelo G502',
      weight: 'Peso 0.5 kg',
      size: 'Teclado 60%',
      rgb: 'RGB: si',
      keycaps: 'Keycaps: ksmw',
    },
  },
  {
    id: 7,
    name: 'Product 7',
    price: '200',
   image: './assets/imgs/product1.png',
    brand: 'Logitech',
    category: 'monitoreses',
    images: [
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_1_top_down_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_2_angled_left_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_1_top_down_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_fps_pro_1_us_main_a0215554-cca4-4ef3-b904-8d0b54585f7a_300x.jpg?v=1655754825',
      },
    ],
    details: {
      switchType: 'Switches cherry blue',
      model: 'Modelo G502',
      weight: 'Peso 0.5 kg',
      size: 'Teclado 60%',
      rgb: 'RGB: si',
      keycaps: 'Keycaps: ksmw',
    },
  },
  {
    id: 8,
    name: 'Product 8',
    price: '200',
   image: './assets/imgs/product1.png',
    brand: 'Logitech',
    category: 'Mouses',
    images: [
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_1_top_down_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_2_angled_left_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_1_top_down_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_fps_pro_1_us_main_a0215554-cca4-4ef3-b904-8d0b54585f7a_300x.jpg?v=1655754825',
      },
    ],
    details: {
      switchType: 'Switches cherry blue',
      model: 'Modelo G502',
      weight: 'Peso 0.5 kg',
      size: 'Teclado 60%',
      rgb: 'RGB: si',
      keycaps: 'Keycaps: ksmw',
    },
  },
  {
    id: 9,
    name: 'Product 9',
    price: '200',
   image: './assets/imgs/product1.png',
    brand: 'Logitech',
    category: 'Mouses',
    images: [
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_1_top_down_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_2_angled_left_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_1_top_down_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_fps_pro_1_us_main_a0215554-cca4-4ef3-b904-8d0b54585f7a_300x.jpg?v=1655754825',
      },
    ],
    details: {
      switchType: 'Switches cherry blue',
      model: 'Modelo G502',
      weight: 'Peso 0.5 kg',
      size: 'Teclado 60%',
      rgb: 'RGB: si',
      keycaps: 'Keycaps: ksmw',
    },
  },
  {
    id: 10,
    name: 'Product 10',
    price: '200',
   image: './assets/imgs/product1.png',
    brand: 'Logitech',
    category: 'Mouses',
    images: [
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_1_top_down_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_2_angled_left_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_1_top_down_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_fps_pro_1_us_main_a0215554-cca4-4ef3-b904-8d0b54585f7a_300x.jpg?v=1655754825',
      },
    ],
    details: {
      switchType: 'Switches cherry blue',
      model: 'Modelo G502',
      weight: 'Peso 0.5 kg',
      size: 'Teclado 60%',
      rgb: 'RGB: si',
      keycaps: 'Keycaps: ksmw',
    },
  },
  {
    id: 11,
    name: 'Product 11',
    price: '200',
   image: './assets/imgs/product1.png',
    brand: 'Logitech',
    category: 'teclados',
    images: [
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_1_top_down_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_2_angled_left_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_1_top_down_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_fps_pro_1_us_main_a0215554-cca4-4ef3-b904-8d0b54585f7a_300x.jpg?v=1655754825',
      },
    ],
    details: {
      switchType: 'Switches cherry blue',
      model: 'Modelo G502',
      weight: 'Peso 0.5 kg',
      size: 'Teclado 60%',
      rgb: 'RGB: si',
      keycaps: 'Keycaps: ksmw',
    },
  },
  {
    id: 12,
    name: 'Product 12',
    price: '200',
   image: './assets/imgs/product1.png',
    brand: 'Logitech',
    category: 'monitores',
    images: [
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_1_top_down_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_2_angled_left_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_1_top_down_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_fps_pro_1_us_main_a0215554-cca4-4ef3-b904-8d0b54585f7a_300x.jpg?v=1655754825',
      },
    ],
    details: {
      switchType: 'Switches cherry blue',
      model: 'Modelo G502',
      weight: 'Peso 0.5 kg',
      size: 'Teclado 60%',
      rgb: 'RGB: si',
      keycaps: 'Keycaps: ksmw',
    },
  },
  {
    id: 13,
    name: 'Product 13',
    price: '200',
   image: './assets/imgs/product1.png',
    brand: 'Logitech',
    category: 'Mouses',
    images: [
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_1_top_down_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_2_angled_left_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_1_top_down_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_fps_pro_1_us_main_a0215554-cca4-4ef3-b904-8d0b54585f7a_300x.jpg?v=1655754825',
      },
    ],
    details: {
      switchType: 'Switches cherry blue',
      model: 'Modelo G502',
      weight: 'Peso 0.5 kg',
      size: 'Teclado 60%',
      rgb: 'RGB: si',
      keycaps: 'Keycaps: ksmw',
    },
  },
  {
    id: 14,
    name: 'Product 14',
    price: '200',
   image: './assets/imgs/product1.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, se lorem lorem lorem',
    category: 'teclados',
    brand: 'Hyperx',
    warranty: '12 meses',
    images: [
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_1_top_down_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_2_angled_left_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_1_top_down_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_fps_pro_1_us_main_a0215554-cca4-4ef3-b904-8d0b54585f7a_300x.jpg?v=1655754825',
      },
    ],
    details: {
      switchType: 'Switches cherry blue',
      model: 'Modelo G502',
      weight: 'Peso 0.5 kg',
      size: 'Teclado 60%',
      rgb: 'RGB: si',
      keycaps: 'Keycaps: ksmw',
    },
  },
  {
    id: 15,
    name: 'Product 15',
    price: '200',
   image: './assets/imgs/product1.png',
    brand: 'Logitech',
    category: 'monitores',
    images: [
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_1_top_down_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_2_angled_left_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_1_top_down_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_fps_pro_1_us_main_a0215554-cca4-4ef3-b904-8d0b54585f7a_300x.jpg?v=1655754825',
      },
    ],
    details: {
      switchType: 'Switches cherry blue',
      model: 'Modelo G502',
      weight: 'Peso 0.5 kg',
      size: 'Teclado 60%',
      rgb: 'RGB: si',
      keycaps: 'Keycaps: ksmw',
    },
  },
  {
    id: 16,
    name: 'Product 16',
    price: '200',
   image: './assets/imgs/product1.png',
    brand: 'Logitech',
    category: 'Mouses',
    images: [
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_1_top_down_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_2_angled_left_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_origins_65_english_us_aqua_1_top_down_300x.jpg?v=1655760987',
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_alloy_fps_pro_1_us_main_a0215554-cca4-4ef3-b904-8d0b54585f7a_300x.jpg?v=1655754825',
      },
    ],
    details: {
      switchType: 'Switches cherry blue',
      model: 'Modelo G502',
      weight: 'Peso 0.5 kg',
      size: 'Teclado 60%',
      rgb: 'RGB: si',
      keycaps: 'Keycaps: ksmw',
    },
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
