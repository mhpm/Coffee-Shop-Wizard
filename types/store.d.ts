export interface UserInfo {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatarId: number;
  alias: string;
  isLoggedIn: boolean;
}

export interface CartItem {
  id: number;
  name: string;
  size: string;
  milk: string;
  extras: string[];
  price: number;
  image: string;
  quantity: number;
}

export interface ShoppingBag {
  items: CartItem[];
  total: number;
}

export interface UserStore {
  user: UserInfo;
  bag: ShoppingBag;
  
  // User actions
  login: (userData: Partial<UserInfo>) => void;
  logout: () => void;
  updateUserInfo: (userData: Partial<UserInfo>) => void;
  
  // Shopping bag actions
  addToBag: (item: CartItem) => void;
  removeFromBag: (itemId: number) => void;
  updateItemQuantity: (itemId: number, quantity: number) => void;
  clearBag: () => void;
}
