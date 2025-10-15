import { useContext } from 'react';
import { WishlistContext } from '@/contexts/WishlistContextDefinition';
import type { WishlistContextType } from '@/types';

export const useWishlist = (): WishlistContextType => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
