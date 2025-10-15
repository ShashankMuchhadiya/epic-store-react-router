import { Link } from 'react-router-dom';
import type { Game } from '@/data/games';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';
import { Heart, ShoppingCart } from 'lucide-react';

interface GameCardProps {
  game: Game;
}

export const GameCard = ({ game }: GameCardProps) => {
  const { addToCart, items } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const isInCart = items.some(item => item.gameId === game.id);
  const inWishlist = isInWishlist(game.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isInCart) {
      addToCart(game.id);
    }
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    if (inWishlist) {
      removeFromWishlist(game.id);
    } else {
      addToWishlist(game.id);
    }
  };

  return (
    <Link
      to={`/store/game/${game.slug}`}
      className='relative overflow-hidden transition-all duration-300 bg-gray-900 rounded-lg group hover:shadow-xl hover:shadow-blue-500/20'
    >
      {/* Image */}
      <div className='relative aspect-[3/4] overflow-hidden'>
        <img
          src={game.images.cover}
          alt={game.title}
          className='object-cover w-full h-full transition-transform duration-500 group-hover:scale-110'
          onError={e => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://picsum.photos/800/1000?random=999';
          }}
        />

        {/* Overlay on hover */}
        <div className='absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:opacity-100' />

        {/* Badges */}
        <div className='absolute flex flex-col gap-1 top-2 left-2'>
          {game.isFree && (
            <span className='px-2 py-1 text-xs font-semibold text-white bg-blue-600 rounded'>
              FREE
            </span>
          )}
          {game.discount && game.discount > 0 && (
            <span className='px-2 py-1 text-xs font-semibold text-white bg-red-600 rounded'>
              -{game.discount}%
            </span>
          )}
          {game.isNew && (
            <span className='px-2 py-1 text-xs font-semibold text-white bg-purple-600 rounded'>
              NEW
            </span>
          )}
        </div>

        {/* Wishlist button */}
        <button
          onClick={handleWishlist}
          className='absolute p-1.5 transition-colors duration-200 rounded-full top-2 right-2 bg-black/60 hover:bg-black/80'
        >
          <Heart
            className={`w-4 h-4 ${inWishlist ? 'fill-red-500 text-red-500' : 'text-white'}`}
          />
        </button>

        {/* Action buttons - shown on hover */}
        <div className='absolute bottom-0 left-0 right-0 p-2 transition-transform duration-300 translate-y-full group-hover:translate-y-0'>
          <button
            onClick={handleAddToCart}
            disabled={isInCart || game.isFree}
            className={`w-full py-2 px-3 rounded text-sm font-semibold flex items-center justify-center gap-1 transition-colors ${
              isInCart
                ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                : game.isFree
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-white hover:bg-gray-200 text-black'
            }`}
          >
            <ShoppingCart className='w-4 h-4' />
            {isInCart ? 'In Cart' : game.isFree ? 'Get' : 'Add to Cart'}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className='p-3'>
        <h3 className='mb-1 text-sm font-semibold text-white transition-colors line-clamp-1 group-hover:text-blue-400'>
          {game.title}
        </h3>

        {/* Price */}
        <div className='flex items-center gap-1 mb-2'>
          {game.price === 0 ? (
            <span className='text-xs text-gray-400'>Free to Play</span>
          ) : (
            <>
              {game.originalPrice && (
                <span className='text-xs text-gray-500 line-through'>
                  ${game.originalPrice.toFixed(2)}
                </span>
              )}
              <span className='text-sm font-bold text-white'>
                ${game.price.toFixed(2)}
              </span>
            </>
          )}
        </div>

        {/* Genres */}
        <div className='flex flex-wrap gap-1'>
          {game.genres.slice(0, 2).map(genre => (
            <span
              key={genre}
              className='px-1.5 py-0.5 text-xs text-gray-400 bg-gray-800 rounded'
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
