import { Link } from 'react-router-dom';
import { useWishlist } from '@/hooks/useWishlist';
import { gameService } from '@/services/gameService';
import { Heart } from 'lucide-react';
import { GameGrid } from '@/components/GameGrid';

export const Wishlist = () => {
  const { items } = useWishlist();

  const wishlistGames = items
    .map(id => gameService.getGameById(id))
    .filter((game): game is NonNullable<typeof game> => game !== undefined);

  if (wishlistGames.length === 0) {
    return (
      <div className='min-h-screen bg-gray-950 flex items-center justify-center px-6'>
        <div className='text-center'>
          <Heart className='w-24 h-24 text-gray-700 mx-auto mb-6' />
          <h1 className='text-3xl font-bold text-white mb-4'>
            Your wishlist is empty
          </h1>
          <p className='text-gray-400 mb-8'>
            Add games you're interested in to your wishlist
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
      <div className='max-w-7xl mx-auto px-6'>
        <div className='mb-8'>
          <h1 className='text-4xl font-bold text-white mb-2'>My Wishlist</h1>
          <p className='text-gray-400'>
            {wishlistGames.length} game{wishlistGames.length !== 1 ? 's' : ''}
          </p>
        </div>

        <GameGrid games={wishlistGames} />
      </div>
    </div>
  );
};
