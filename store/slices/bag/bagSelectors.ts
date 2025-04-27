import { RootState } from '@/store'; // Adjust path if store index is elsewhere

// Select the entire bag slice state
export const selectBag = (state: RootState) => state.bag;

// Select only the items from the bag state
export const selectBagItems = (state: RootState) => state.bag.items;

// Select the loading status
export const selectBagStatus = (state: RootState) => state.bag.status;

// Select the error message
export const selectBagError = (state: RootState) => state.bag.error;

// Example of a derived selector (calculating total count)
export const selectBagTotalItemsCount = (state: RootState) =>
  state.bag.items.reduce((total, item) => total + item.quantity, 0);

// Example of a derived selector (calculating total price)
export const selectBagTotalPrice = (state: RootState) =>
  state.bag.items.reduce((total, item) => total + item.price * item.quantity, 0);