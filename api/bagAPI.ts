import { BagItem } from '@/store/slices/bag/bagTypes'; // Import type from the new types file

// Mock API function (simulates fetching data)
export const fetchItemsFromApi = async (): Promise<BagItem[]> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  // In a real app, fetch from an API endpoint
  // For now, return mock data
  const mockBagItems: BagItem[] = [
    {
      id: 'cappuccino-123',
      name: 'Cappuccino',
      size: 'Medium',
      milk: 'Oat Milk',
      extras: ['Extra Shot'],
      price: 4.5,
      quantity: 1,
    },
    {
      id: 'latte-456',
      name: 'Latte',
      size: 'Large',
      milk: 'Whole Milk',
      extras: [],
      price: 5.0,
      quantity: 2,
    },
  ];
  // Simulate potential error
  // if (Math.random() > 0.75) {
  //   throw new Error('Failed to fetch bag items');
  // }
  return mockBagItems;
};
