import { Order } from '../types/orderTypes';

export const orderHistory: Order[] = [
  {
    id: 'ORD-1237',
    date: 'May 16, 2024',
    items: [
      {
        id: 5,
        name: 'Mocha',
        size: 'Large',
        milk: 'Whole Milk',
        extras: ['Chocolate Syrup', 'Whipped Cream'],
        price: 6.49,
        image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c',
      },
    ],
    total: 6.49,
    status: 'In Progress',
  },
  {
    id: 'ORD-1234',
    date: 'May 15, 2024',
    items: [
      {
        id: 1,
        name: 'Cappuccino',
        size: 'Medium',
        milk: 'Oat Milk',
        extras: ['Caramel Syrup'],
        price: 5.99,
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d',
      },
    ],
    total: 5.99,
    status: 'Completed',
  },
  {
    id: 'ORD-1235',
    date: 'May 12, 2024',
    items: [
      {
        id: 2,
        name: 'Espresso',
        size: 'Small',
        milk: 'None',
        extras: [],
        price: 3.49,
        image: 'https://images.unsplash.com/photo-1579992357154-faf4bde95b3d',
      },
      {
        id: 3,
        name: 'Croissant',
        size: 'Regular',
        milk: 'None',
        extras: [],
        price: 2.99,
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a',
      },
    ],
    total: 6.48,
    status: 'Canceled',
  },
  {
    id: 'ORD-1236',
    date: 'May 8, 2024',
    items: [
      {
        id: 4,
        name: 'Latte',
        size: 'Large',
        milk: 'Almond Milk',
        extras: ['Vanilla Syrup', 'Extra Shot'],
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f',
      },
    ],
    total: 6.99,
    status: 'Completed',
  },
];