import { createAsyncThunk } from '@reduxjs/toolkit';
import { BagItem } from './bagTypes'; // Import type from within the same folder
import { fetchItemsFromApi } from '@/api/bagAPI';

// Create the async thunk
export const fetchBagItems = createAsyncThunk<
  BagItem[],
  void,
  { rejectValue: string }
>('bag/fetchItems', async (_, { rejectWithValue }) => {
  try {
    const items = await fetchItemsFromApi();
    return items;
  } catch (err) {
    if (err instanceof Error) {
      return rejectWithValue(err.message);
    }
    return rejectWithValue('An unknown error occurred');
  }
});
