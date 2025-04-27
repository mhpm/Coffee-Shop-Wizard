import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BagItem, BagState } from './bagTypes'; // Import types from this folder
import { fetchBagItems } from './bagThunks'; // Import the thunk from this folder

// Initial state using the imported BagState type
const initialState: BagState = {
  items: [],
  status: 'idle',
  error: null,
};

const bagSlice = createSlice({
  name: 'bag',
  initialState,
  reducers: {
    // Keep existing reducers for direct state manipulation
    addToBag(state, action: PayloadAction<BagItem>) {
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
      // Find the specific item instance to remove (important if multiple identical items exist but should be treated uniquely by instance ID if applicable)
      // If ID is unique per instance (e.g., UUID generated on add), this is fine.
      // If ID refers to product type, you might need a more specific identifier (like an index or a temporary instance ID)
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateItemQuantity(
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) {
      // Similar consideration as removeFromBag regarding uniqueness of 'id'
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        // Ensure quantity doesn't go below 1, or handle removal if 0
        item.quantity = Math.max(0, action.payload.quantity);
        if (item.quantity === 0) {
           // Optionally remove the item if quantity becomes 0
           state.items = state.items.filter((i) => i.id !== action.payload.id);
        }
      }
    },
    clearBag(state) {
      state.items = [];
      state.status = 'idle'; // Reset status on clear
      state.error = null;
    },
  },
  // Use the imported fetchBagItems thunk in extraReducers
  extraReducers: (builder) => {
    builder
      .addCase(fetchBagItems.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchBagItems.fulfilled, (state, action: PayloadAction<BagItem[]>) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchBagItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ?? action.error.message;
      });
  },
});

// Export only the actions
export const { addToBag, removeFromBag, updateItemQuantity, clearBag } =
  bagSlice.actions;

// Export the reducer as default
export default bagSlice.reducer;
