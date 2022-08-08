const productsData = [
  {
    id: 1,
    name: 'Tofu60 Dk2',
    price: '12500',
    image: '/assets/imgs/products/custom1-1.png',
    category: 'teclados custom',
    warranty: '12 meses',
    brand: 'Custom',
    images: [
      {
        url: '/assets/imgs/products/custom1-1.png',
      },
      {
        url: '/assets/imgs/products/custom1-2.png',
      },
      {
        url: '/assets/imgs/products/custom1-3.png',
      },
      {
        url: '/assets/imgs/products/custom1-4.png',
      },
    ],
    details: {
      switchType: 'Switches Black Tofu',
      model: 'Modelo Tofu TK-1',
      weight: 'Peso 0.6 kg',
      size: 'Teclado 65%',
      rgb: 'RGB: no',
      keycaps: 'Keycaps: TK-1 Pro',
    },
  },
  {
    id: 2,
    name: 'Product 2',
    price: '200',
    image: '/assets/imgs/products/custom2-4.png',
    category: 'teclados custom',
    images: [
      {
        url: '/assets/imgs/products/custom2-4.png',
      },

      {
        url: '/assets/imgs/products/custom2-3.png',
      },
      {
        url: '/assets/imgs/products/custom2-2.png',
      },
      {
        url: '/assets/imgs/products/custom2-1.png',
      },
    ],
    details: {
      switchType: 'White',
      model: 'Modelo WhiteBear',
      weight: 'Peso 0.5 kg',
      size: 'Teclado 65%',
      rgb: 'RGB:  no',
      keycaps: 'Keycaps: whitebear Pro',
    },
  },
  {
    id: 3,
    name: 'Product 3',
    price: '200',
    image: '/assets/imgs/products/custom3-1.png',
    category: 'teclados custom',
    images: [
      {
        url: '/assets/imgs/products/custom3-1.png',
      },

      {
        url: '/assets/imgs/products/custom3-2.png',
      },
      {
        url: '/assets/imgs/products/custom3-3.png',
      },
      {
        url: '/assets/imgs/products/custom3-4.png',
      },
    ],
    details: {
      switchType: 'Switches White silence',
      model: 'Modelo Oceandark',
      weight: 'Peso 0.587 kg',
      size: 'Teclado 65%',
      rgb: 'RGB: no',
      keycaps: 'Keycaps: Custom',
    },
  },
  {
    id: 4,
    name: 'Product 4',
    price: '400',
    image: '/assets/imgs/products/custom4-1.png',
    brand: 'Razer',
    category: 'teclados custom',
    images: [
      {
        url: '/assets/imgs/products/custom4-1.png',
      },
      {
        url: '/assets/imgs/products/custom4-2.png',
      },
      {
        url: '/assets/imgs/products/custom4-3.png',
      },
      {
        url: '/assets/imgs/products/custom4-4.png',
      },
    ],
    details: {
      switchType: 'Switches Black',
      model: 'Modelo Darkhero K20',
      weight: 'Peso 0.624 kg',
      size: 'Teclado 65%',
      rgb: 'RGB: no',
      keycaps: 'Keycaps Hero Old',
    },
  },
  {
    id: 5,
    name: 'Product 5',
    price: '200',
    image: '/assets/imgs/products/custom5-1.png',
    brand: 'Razer',
    category: 'teclados custom',
    images: [
      {
        url: '/assets/imgs/products/custom5-1.png',
      },
      {
        url: '/assets/imgs/products/custom5-2.png',
      },
      {
        url: '/assets/imgs/products/custom5-3.png',
      },
      {
        url: '/assets/imgs/products/custom5-4.png',
      },
    ],
    details: {
      switchType: 'Cherry Red',
      model: 'Modelo G502',
      weight: 'Peso 0.5 kg',
      size: 'Teclado 60%',
      rgb: 'RGB: si',
      keycaps: 'Keycaps: Rainbow',
    },
  },
  {
    id: 6,
    name: 'Product 6',
    price: '200',
    image: '/assets/imgs/products/custom6-1.png',
    category: 'teclados custom',
    images: [
      {
        url: '/assets/imgs/products/custom6-1.png',
      },
      {
        url: '/assets/imgs/products/custom6-2.png',
      },
      {
        url: '/assets/imgs/products/custom6-3.png',
      },
      {
        url: '/assets/imgs/products/custom6-4.png',
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
    image: '/assets/imgs/products/custom7-1.png',
    brand: 'Logitech',
    category: 'teclados custom',
    images: [
      {
        url: '/assets/imgs/products/custom7-1.png',
      },
      {
        url: '/assets/imgs/products/custom7-2.png',
      },
      {
        url: '/assets/imgs/products/custom7-3.png',
      },
      {
        url: '/assets/imgs/products/custom7-4.png',
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
    image: '/assets/imgs/products/custom8-1.png',
    brand: 'Logitech',
    category: 'teclados custom',
    images: [
      {
        url: '/assets/imgs/products/custom8-1.png',
      },
      {
        url: '/assets/imgs/products/custom8-2.png',
      },
      {
        url: '/assets/imgs/products/custom8-3.png',
      },
      {
        url: '/assets/imgs/products/custom8-4.png',
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
    image: '/assets/imgs/products/keycap1-1.png',
    brand: 'Logitech',
    category: 'keycaps',
    images: [
      {
        url: '/assets/imgs/products/keycap1-1.png',
      },
      {
        url: '/assets/imgs/products/keycap1-2.png',
      },
      {
        url: '/assets/imgs/products/keycap1-3.png',
      },
      {
        url: '/assets/imgs/products/keycap1-4.png',
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
    image: '/assets/imgs/products/keycap2-1.png',
    brand: 'Logitech',
    category: 'keycaps',
    images: [
      {
        url: '/assets/imgs/products/keycap2-1.png',
      },
      {
        url: '/assets/imgs/products/keycap2-2.png',
      },
      {
        url: '/assets/imgs/products/keycap2-3.png',
      },
      {
        url: '/assets/imgs/products/keycap2-4.png',
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
    image: '/assets/imgs/products/keycap3-1.png',
    brand: 'Logitech',
    category: 'keycaps',
    images: [
      {
        url: '/assets/imgs/products/keycap3-1.png',
      },
      {
        url: '/assets/imgs/products/keycap3-2.png',
      },
      {
        url: '/assets/imgs/products/keycap3-3.png',
      },
      {
        url: '/assets/imgs/products/keycap3-4.png',
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
    image: '/assets/imgs/products/keycap4-2.png',
    category: 'keycaps',
    images: [
      {
        url: '/assets/imgs/products/keycap4-1.png',
      },
      {
        url: '/assets/imgs/products/keycap4-2.png',
      },
      {
        url: '/assets/imgs/products/keycap4-3.png',
      },
      {
        url: '/assets/imgs/products/keycap4-4.png',
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

    category: 'keycaps',
    image: '/assets/imgs/products/keycap5-1.png',
    images: [
      {
        url: '/assets/imgs/products/keycap5-1.png',
      },
      {
        url: '/assets/imgs/products/keycap5-2.png',
      },
      {
        url: '/assets/imgs/products/keycap5-3.png',
      },
      {
        url: '/assets/imgs/products/keycap5-4.png',
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
    name: 'Keycaps Violet',
    price: '200',

    category: 'keycaps',
    image: '/assets/imgs/products/keycap6-1.png',
    images: [
      {
        url: '/assets/imgs/products/keycap6-1.png',
      },
      {
        url: '/assets/imgs/products/keycap6-2.png',
      },
      {
        url: '/assets/imgs/products/keycap6-3.png',
      },
      {
        url: '/assets/imgs/products/keycap6-4.png',
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
