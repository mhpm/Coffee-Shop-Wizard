'use client'; // Mark this as a Client Component

import { Provider } from 'react-redux';
import { store } from '../store'; // Adjust path if your store is elsewhere

export function StoreProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}