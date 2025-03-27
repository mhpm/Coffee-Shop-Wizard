// Types for coffee shop data
export interface Coffee {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  bgColor: string;
}

export interface Size {
  id: number;
  name: string;
  price: number;
}

export interface MilkType {
  id: number;
  name: string;
  price: number;
}

export interface Extra {
  id: number;
  name: string;
  price: number;
}

// Coffee data
export const coffees: Coffee[] = [
  {
    id: 1,
    name: 'Espresso',
    price: 2.99,
    description:
      'Strong and concentrated coffee served in a small cup. Made by forcing pressurized hot water through finely-ground coffee beans. Known for its intense flavor, rich crema, and ability to serve as the foundation for many coffee drinks.',
    image:
      'https://images.unsplash.com/photo-1610889556528-9a770e32642f?q=80&w=500&auto=format',
    bgColor: 'from-amber-800/80 to-amber-600/80',
  },
  {
    id: 2,
    name: 'Cappuccino',
    price: 3.99,
    description:
      'Espresso with steamed milk and foam. Made with equal parts espresso, steamed milk, and milk foam. The perfect balance of rich espresso and creamy milk, topped with a thick, velvety foam layer thats often dusted with cocoa powder.',
    image:
      'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=500&auto=format',
    bgColor: 'from-amber-700/80 to-amber-500/80',
  },
  {
    id: 3,
    name: 'Latte',
    price: 4.49,
    description:
      'Espresso with a lot of steamed milk and a light layer of foam. Features a more subtle coffee flavor than a cappuccino due to the higher ratio of steamed milk. Perfect for those who enjoy a creamier, more mellow coffee experience.',
    image:
      'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&w=500&auto=format',
    bgColor: 'from-amber-600/80 to-amber-400/80',
  },
  {
    id: 4,
    name: 'Mocha',
    price: 4.99,
    description:
      'Espresso with chocolate, steamed milk and whipped cream. A delightful combination of espresso and rich chocolate syrup, topped with steamed milk and a generous dollop of whipped cream. Sometimes garnished with chocolate shavings.',
    image:
      'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?q=80&w=500&auto=format',
    bgColor: 'from-amber-900/80 to-amber-700/80',
  },
  {
    id: 5,
    name: 'Americano',
    price: 3.49,
    description:
      'Espresso diluted with hot water for a milder flavor. Created by adding hot water to espresso, producing a coffee similar in strength to regular drip coffee but with a different flavor profile. Popular among those who enjoy the taste of espresso but prefer a larger, less intense drink.',
    image:
      'https://images.unsplash.com/photo-1551030173-122aabc4489c?q=80&w=500&auto=format',
    bgColor: 'from-amber-800/80 to-amber-600/80',
  },
  {
    id: 6,
    name: 'Macchiato',
    price: 3.79,
    description:
      'Espresso with a small amount of foamed milk. "Macchiato" means "marked" in Italian, referring to the mark that the small amount of steamed milk leaves on top of the espresso. Perfect for those who want just a touch of milk to cut the intensity of straight espresso.',
    image:
      'https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=500&auto=format',
    bgColor: 'from-amber-700/80 to-amber-500/80',
  },
  {
    id: 7,
    name: 'Flat White',
    price: 4.29,
    description:
      'Espresso with steamed milk and minimal foam. Originally from Australia/New Zealand, featuring microfoam (very finely textured milk) poured over a double shot of espresso. Known for its velvety smooth texture and strong coffee flavor.',
    image:
      'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?q=80&w=500&auto=format',
    bgColor: 'from-amber-600/80 to-amber-400/80',
  },
  {
    id: 8,
    name: 'Cold Brew',
    price: 4.79,
    description:
      "Coffee steeped in cold water for 12+ hours. This slow-brewing process creates a smooth, less acidic coffee with a naturally sweet taste. Served chilled over ice, it's perfect for hot days and those who prefer less bitter coffee.",
    image:
      'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=500&auto=format',
    bgColor: 'from-amber-900/80 to-amber-700/80',
  },
  {
    id: 9,
    name: 'Affogato',
    price: 5.49,
    description:
      'Vanilla ice cream topped with a shot of hot espresso. This Italian dessert-coffee combines the warmth of fresh espresso with cold, creamy vanilla ice cream, creating a delightful contrast of temperatures and textures. The perfect after-dinner treat.',
    image:
      'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=500&auto=format',
    bgColor: 'from-amber-800/80 to-amber-600/80',
  },
  {
    id: 10,
    name: 'Chai Latte',
    price: 4.59,
    description:
      'Spiced tea with steamed milk and a touch of honey. A warming blend of black tea infused with aromatic spices like cinnamon, cardamom, ginger, and cloves. The addition of steamed milk and honey creates a comforting, slightly sweet beverage.',
    image:
      'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=500&auto=format',
    bgColor: 'from-amber-700/80 to-amber-500/80',
  },
  {
    id: 11,
    name: 'Matcha Latte',
    price: 4.99,
    description:
      'Japanese green tea powder whisked with steamed milk. Made from finely ground shade-grown green tea leaves, providing a unique earthy flavor and natural energy boost. Rich in antioxidants and offers a more sustained energy release compared to coffee.',
    image:
      'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=500&auto=format',
    bgColor: 'from-amber-600/80 to-amber-400/80',
  },
  {
    id: 12,
    name: 'Caramel Frappuccino',
    price: 5.29,
    description:
      'Blended coffee with caramel, milk, and ice. A sweet, creamy frozen drink that combines coffee, milk, ice, and rich caramel sauce, topped with whipped cream and a caramel drizzle. Perfect for those hot summer days when you need a coffee fix.',
    image:
      'https://images.unsplash.com/photo-1586195831800-24f14c992cea?q=80&w=500&auto=format',
    bgColor: 'from-amber-900/80 to-amber-700/80',
  },
  {
    id: 13,
    name: 'Iced Coffee',
    price: 3.79,
    description:
      'Chilled coffee served over ice with optional milk. Brewed double-strength and cooled, then served over ice for a refreshing coffee experience. Can be customized with various milk options and sweeteners. A perfect pick-me-up on warm days.',
    image:
      'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=500&auto=format',
    bgColor: 'from-amber-800/80 to-amber-600/80',
  },
  {
    id: 14,
    name: 'Hot Chocolate',
    price: 4.29,
    description:
      'Rich chocolate melted into steamed milk with whipped cream. Made with premium chocolate and fresh steamed milk for the ultimate comfort drink. Topped with fluffy whipped cream and optional chocolate shavings or marshmallows for extra indulgence.',
    image:
      'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?q=80&w=500&auto=format',
    bgColor: 'from-amber-700/80 to-amber-500/80',
  },
];

// Size options
export const sizes: Size[] = [
  { id: 1, name: 'Small', price: 0 },
  { id: 2, name: 'Medium', price: 0.5 },
  { id: 3, name: 'Large', price: 1 },
];

// Milk type options
export const milkTypes: MilkType[] = [
  { id: 1, name: 'Whole Milk', price: 0 },
  { id: 2, name: 'Almond Milk', price: 0.5 },
  { id: 3, name: 'Oat Milk', price: 0.5 },
];

// Extra options
export const extras: Extra[] = [
  { id: 1, name: 'Whipped Cream', price: 0.5 },
  { id: 2, name: 'Caramel Drizzle', price: 0.5 },
  { id: 3, name: 'Extra Shot', price: 1 },
];

// Category mapping for filtering
export const categoryMapping = {
  'Cold Drinks': ['Cold Brew', 'Iced Coffee', 'Caramel Frappuccino'],
  Tea: ['Chai Latte', 'Matcha Latte'],
  Specialty: ['Affogato', 'Hot Chocolate'],
};
