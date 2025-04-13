export interface OrderItem {
  id: number;
  name: string;
  size: string;
  milk: string;
  extras: string[];
  price: number;
  image: string;
}

export interface Order {
  id: string;
  date: string;
  items: OrderItem[];
  total: number;
  status: 'Completed' | 'In Progress' | 'Canceled';
}