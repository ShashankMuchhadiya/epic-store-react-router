import { Link } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';
import { gameService } from '@/services/gameService';
import { Trash2, ShoppingBag } from 'lucide-react';

export const Cart = () => {
  const { items, removeFromCart, clearCart, total } = useCart();

  if (items.length === 0) {
    return (
      <div className='min-h-screen bg-gray-950 flex items-center justify-center px-6'>
        <div className='text-center'>
          <ShoppingBag className='w-24 h-24 text-gray-700 mx-auto mb-6' />
          <h1 className='text-3xl font-bold text-white mb-4'>
            Your cart is empty
          </h1>
          <p className='text-gray-400 mb-8'>
            Looks like you haven't added any games yet
          </p>
          <Link
            to='/store'
            className='inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors'
          >
            Browse Store
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gray-950 py-12'>
      <div className='max-w-[1600px] mx-auto px-6'>
        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-4xl font-bold text-white'>Shopping Cart</h1>
          <button
            onClick={clearCart}
            className='text-gray-400 hover:text-white transition-colors'
          >
            Clear Cart
          </button>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Cart Items */}
          <div className='lg:col-span-2 space-y-4'>
            {items.map(item => {
              const game = gameService.getGameById(item.gameId);
              if (!game) return null;

              return (
                <div
                  key={item.gameId}
                  className='bg-gray-900 rounded-lg p-6 flex gap-6 border border-gray-800'
                >
                  <Link
                    to={`/store/game/${game.slug}`}
                    className='w-32 h-44 rounded overflow-hidden flex-shrink-0'
                  >
                    <img
                      src={game.images.cover}
                      alt={game.title}
                      className='w-full h-full object-cover hover:scale-110 transition-transform duration-300'
                    />
                  </Link>

                  <div className='flex-1'>
                    <Link
                      to={`/store/game/${game.slug}`}
                      className='text-xl font-semibold text-white hover:text-blue-400 transition-colors mb-2 block'
                    >
                      {game.title}
                    </Link>
                    <p className='text-gray-400 text-sm mb-4 line-clamp-2'>
                      {game.description}
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      {game.genres.map((genre: string) => (
                        <span
                          key={genre}
                          className='px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded'
                        >
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className='flex flex-col items-end justify-between'>
                    <div className='text-right'>
                      {game.originalPrice && (
                        <div className='text-gray-500 line-through text-sm'>
                          ${game.originalPrice.toFixed(2)}
                        </div>
                      )}
                      <div className='text-2xl font-bold text-white'>
                        ${game.price.toFixed(2)}
                      </div>
                      {game.discount && (
                        <div className='text-green-500 text-sm'>
                          Save {game.discount}%
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => removeFromCart(item.gameId)}
                      className='p-2 text-gray-400 hover:text-red-500 transition-colors'
                    >
                      <Trash2 className='w-5 h-5' />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Summary */}
          <div className='lg:col-span-1'>
            <div className='bg-gray-900 rounded-lg p-6 border border-gray-800 sticky top-24'>
              <h2 className='text-2xl font-bold text-white mb-6'>
                Order Summary
              </h2>

              <div className='space-y-3 mb-6'>
                <div className='flex justify-between text-gray-400'>
                  <span>Subtotal ({items.length} items)</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className='flex justify-between text-gray-400'>
                  <span>Tax</span>
                  <span>$0.00</span>
                </div>
                <div className='border-t border-gray-800 pt-3'>
                  <div className='flex justify-between text-xl font-bold text-white'>
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button className='w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors mb-3'>
                Proceed to Checkout
              </button>

              <Link
                to='/store'
                className='block w-full py-3 px-4 bg-gray-800 hover:bg-gray-700 text-white text-center font-semibold rounded transition-colors'
              >
                Continue Shopping
              </Link>

              <div className='mt-6 pt-6 border-t border-gray-800'>
                <p className='text-gray-500 text-xs text-center'>
                  This is a demo. No actual payment will be processed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
