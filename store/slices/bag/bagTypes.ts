// Define BagItem interface
export interface BagItem {
  id: string;
  name: string;
  size: string;
  milk: string;
  extras: string[];
  price: number;
  quantity: number;
}

// Define BagState interface including loading status and error
export interface BagState {
  items: BagItem[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined; // Allow storing error message
}