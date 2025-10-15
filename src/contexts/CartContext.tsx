import { useState, useEffect, type ReactNode } from 'react';
import type { CartItem, CartContextType } from '@/types';
import { gameService } from '@/services/gameService';
import { CartContext } from './CartContextDefinition';

const STORAGE_KEY = 'epic_games_cart';

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addToCart = (gameId: string) => {
    // Check if already in cart
    if (items.some(item => item.gameId === gameId)) {
      return;
    }

    const newItem: CartItem = {
      gameId,
      addedAt: new Date().toISOString(),
    };

    setItems([...items, newItem]);
  };

  const removeFromCart = (gameId: string) => {
    setItems(items.filter(item => item.gameId !== gameId));
  };

  const clearCart = () => {
    setItems([]);
  };

  const total = items.reduce((sum, item) => {
    const game = gameService.getGameById(item.gameId);
    return sum + (game?.price || 0);
  }, 0);

  const value: CartContextType = {
    items,
    addToCart,
    removeFromCart,
    clearCart,
    itemCount: items.length,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
