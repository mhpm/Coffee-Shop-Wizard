import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index'; // Import RootState

interface BagItem {
  id: string;
  name: string;
  size: string;
  milk: string;
  extras: string[];
  price: number;
  quantity: number;
}

interface BagState {
  items: BagItem[];
}

// Add mock data here
const mockBagItems: BagItem[] = [
  {
    id: 'cappuccino-123', // Example ID
    name: 'Cappuccino',
    size: 'Medium',
    milk: 'Oat Milk',
    extras: ['Extra Shot'],
    price: 4.50,
    quantity: 1,
  },
  // Add more mock items if needed
  // {
  //   id: 'latte-456',
  //   name: 'Latte',
  //   size: 'Large',
  //   milk: 'Whole Milk',
  //   extras: [],
  //   price: 5.00,
  //   quantity: 2,
  // },
];

const initialState: BagState = {
  items: mockBagItems, // Use the mock data
};

const bagSlice = createSlice({
  name: 'bag',
  initialState,
  reducers: {
    addToBag(state, action: PayloadAction<BagItem>) {
      // Check if item already exists (by id, size, milk, and extras)
      const existing = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.milk === action.payload.milk &&
          JSON.stringify(item.extras) === JSON.stringify(action.payload.extras)
      );
      if (existing) {
        existing.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromBag(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateItemQuantity(
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    clearBag(state) {
      state.items = [];
    },
  },
});

export const { addToBag, removeFromBag, updateItemQuantity, clearBag } =
  bagSlice.actions;

// Update the selector to use RootState
export const selectBag = (state: RootState) => state.bag;

export default bagSlice.reducer;
