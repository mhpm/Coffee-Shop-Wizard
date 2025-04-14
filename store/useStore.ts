import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserStore, UserInfo, CartItem, ShoppingBag } from '../types/store';

const defaultUserInfo: UserInfo = {
  id: '',
  name: '',
  email: '',
  phone: '',
  avatarId: 1,
  alias: 'Coffee Enthusiast',
  isLoggedIn: false,
};

// Add initial items to the shopping bag
const initialBag: ShoppingBag = {
  items: [
    {
      id: 1,
      name: "Cappuccino",
      size: "Medium",
      milk: "Oat Milk",
      extras: ["Extra Shot", "Vanilla Syrup"],
      price: 5.99,
      image: "/images/coffee-1.jpg",
      quantity: 1
    },
    {
      id: 2,
      name: "Espresso",
      size: "Small",
      milk: "None",
      extras: [],
      price: 3.49,
      image: "/images/coffee-2.jpg",
      quantity: 2
    }
  ],
  total: 12.97 // 5.99 + (3.49 * 2)
};

// Calculate the total price of all items in the bag
const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

export const useStore = create<UserStore>()(
  persist(
    (set) => ({
      user: defaultUserInfo,
      bag: initialBag,

      // User actions
      login: (userData) => 
        set((state) => ({
          user: {
            ...state.user,
            ...userData,
            isLoggedIn: true,
          },
        })),

      logout: () => 
        set(() => ({
          user: defaultUserInfo,
        })),

      updateUserInfo: (userData) => 
        set((state) => ({
          user: {
            ...state.user,
            ...userData,
          },
        })),

      // Shopping bag actions
      addToBag: (item) => 
        set((state) => {
          // Check if the item already exists in the bag
          const existingItemIndex = state.bag.items.findIndex(
            (i) => i.id === item.id && 
                  i.size === item.size && 
                  i.milk === item.milk && 
                  JSON.stringify(i.extras) === JSON.stringify(item.extras)
          );

          let newItems;
          
          if (existingItemIndex >= 0) {
            // Update quantity if item exists
            newItems = [...state.bag.items];
            newItems[existingItemIndex] = {
              ...newItems[existingItemIndex],
              quantity: newItems[existingItemIndex].quantity + (item.quantity || 1),
            };
          } else {
            // Add new item
            newItems = [...state.bag.items, { ...item, quantity: item.quantity || 1 }];
          }

          return {
            bag: {
              items: newItems,
              total: calculateTotal(newItems),
            },
          };
        }),

      removeFromBag: (itemId) => 
        set((state) => {
          const newItems = state.bag.items.filter((item) => item.id !== itemId);
          
          return {
            bag: {
              items: newItems,
              total: calculateTotal(newItems),
            },
          };
        }),

      updateItemQuantity: (itemId, quantity) => 
        set((state) => {
          const newItems = state.bag.items.map((item) => 
            item.id === itemId ? { ...item, quantity } : item
          );
          
          return {
            bag: {
              items: newItems,
              total: calculateTotal(newItems),
            },
          };
        }),

      clearBag: () => 
        set(() => ({
          bag: {
            items: [],
            total: 0
          },
        })),
    }),
    {
      name: 'coffee-shop-storage', // name of the item in localStorage
      partialize: (state) => ({ 
        user: state.user,
        bag: state.bag,
      }),
    }
  )
);
