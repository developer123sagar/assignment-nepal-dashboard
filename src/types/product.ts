export type Product = {
  image: string;
  name: string;
  category: string;
  price: number;
  sold: number;
  profit: number;
};

export const productsList: Product[] = [
  {
    image: '../images/product/product-01.png',
    name: 'Wireless Earbuds',
    category: 'Electronics',
    price: 29.99,
    sold: 1200,
    profit: 15000,
  },
  {
    image: '../images/product/product-02.png',
    name: 'Smart Watch',
    category: 'Electronics',
    price: 59.99,
    sold: 800,
    profit: 18000,
  },
  {
    image: '../images/product/product-03.png',
    name: 'Yoga Mat',
    category: 'Fitness',
    price: 19.99,
    sold: 1500,
    profit: 20000,
  },
  {
    image: '../images/product/product-04.png',
    name: 'Running Shoes',
    category: 'Footwear',
    price: 49.99,
    sold: 600,
    profit: 25000,
  },
  {
    image: '../images/product/product-05.png',
    name: 'Bluetooth Speaker',
    category: 'Electronics',
    price: 39.99,
    sold: 900,
    profit: 21000,
  },
  {
    image: '../images/product/product-06.png',
    name: 'Water Bottle',
    category: 'Accessories',
    price: 14.99,
    sold: 2000,
    profit: 18000,
  },
  {
    image: '../images/product/product-07.png',
    name: 'Backpack',
    category: 'Accessories',
    price: 34.99,
    sold: 700,
    profit: 24000,
  },
  {
    image: '../images/product/product-08.png',
    name: 'Desk Lamp',
    category: 'Home',
    price: 24.99,
    sold: 1300,
    profit: 22000,
  },
];
