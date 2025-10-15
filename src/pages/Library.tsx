import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { gameService } from '@/services/gameService';
import { Library as LibraryIcon } from 'lucide-react';
import { GameGrid } from '@/components/GameGrid';

export const Library = () => {
  const { user } = useAuth();

  const libraryGames = (user?.library || [])
    .map((id: string) => gameService.getGameById(id))
    .filter((game): game is NonNullable<typeof game> => game !== undefined);

  if (libraryGames.length === 0) {
    return (
      <div className='min-h-screen bg-gray-950 flex items-center justify-center px-6'>
        <div className='text-center'>
          <LibraryIcon className='w-24 h-24 text-gray-700 mx-auto mb-6' />
          <h1 className='text-3xl font-bold text-white mb-4'>
            Your library is empty
          </h1>
          <p className='text-gray-400 mb-8'>
            Purchase games to add them to your library
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
          <h1 className='text-4xl font-bold text-white mb-2'>My Library</h1>
          <p className='text-gray-400'>
            {libraryGames.length} game{libraryGames.length !== 1 ? 's' : ''}
          </p>
        </div>

        <GameGrid games={libraryGames} />
      </div>
    </div>
  );
};
