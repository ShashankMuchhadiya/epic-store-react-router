import { useState, useEffect, type ReactNode } from 'react';
import type { WishlistContextType } from '@/types';
import { WishlistContext } from './WishlistContextDefinition';

const STORAGE_KEY = 'epic_games_wishlist';

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<string[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addToWishlist = (gameId: string) => {
    if (!items.includes(gameId)) {
      setItems([...items, gameId]);
    }
  };

  const removeFromWishlist = (gameId: string) => {
    setItems(items.filter(id => id !== gameId));
  };

  const isInWishlist = (gameId: string) => {
    return items.includes(gameId);
  };

  const value: WishlistContextType = {
    items,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};
