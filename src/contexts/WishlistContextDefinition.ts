import { createContext } from 'react';
import type { WishlistContextType } from '@/types';

export const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);
