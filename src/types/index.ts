export interface User {
  id: string;
  username: string;
  email: string;
  displayName: string;
  avatar?: string;
  library: string[]; // game IDs
  wishlist: string[]; // game IDs
  cart: CartItem[];
  friends: string[]; // user IDs
  joinedDate: string;
}

export interface CartItem {
  gameId: string;
  addedAt: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (email: string, password: string, username: string) => Promise<void>;
  isAuthenticated: boolean;
  loading: boolean;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (gameId: string) => void;
  removeFromCart: (gameId: string) => void;
  clearCart: () => void;
  itemCount: number;
  total: number;
}

export interface WishlistContextType {
  items: string[];
  addToWishlist: (gameId: string) => void;
  removeFromWishlist: (gameId: string) => void;
  isInWishlist: (gameId: string) => boolean;
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export interface SearchParams {
  query?: string;
  genre?: string;
  priceRange?: 'free' | 'under20' | 'under40' | 'all';
  sortBy?: 'popular' | 'recent' | 'price-low' | 'price-high' | 'rating';
  platform?: 'windows' | 'mac' | 'linux' | 'all';
}
