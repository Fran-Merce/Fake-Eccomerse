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
    name: 'GTMX Blue ',
    price: '8750',
    image: '/assets/imgs/products/switch1-1.png',

    category: 'switches',
    images: [
      {
        url: '/assets/imgs/products/switch1-1.png',
      },
      {
        url: '/assets/imgs/products/switch1-2.png',
      },
      {
        url: '/assets/imgs/products/switch1-3.png',
      },
      {
        url: '/assets/imgs/products/switch1-4.png',
      },
    ],
    details: {
      switchType: 'Tactile Blue',
      model: 'Modelo GTMX 245',
      durability: 'Durabilidad: 85 millones pulsaciones',
      force:'Fuerza Inicial: 42gf',
      compatible:'compatible con: MX-Switches',
      queantity:'catidad: 128 switches'
    },
  },
  {
    id: 16,
    name: 'Huano pink',
    price: '7500',
    image: '/assets/imgs/products/switch2-1.png',
    
    category: 'switches',
    images: [
      {
        url: '/assets/imgs/products/switch2-1.png',
      },
      {
        url: '/assets/imgs/products/switch2-2.png',
      },
      {
        url: '/assets/imgs/products/switch2-3.png',
      },
      {
        url: '/assets/imgs/products/switch2-4.png',
      },
    ],
    details: {
      switchType: 'Linear Pink',
      model: 'Modelo G502',
      durability: 'Durabilidad: 80 millones pulsaciones',
      force:'Fuerza Inicial: 45gf',
      compatible:'compatible con: MX-Switches',
      queantity:'Cantidad: 128 switches',
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
