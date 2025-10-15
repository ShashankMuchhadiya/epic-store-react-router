import { gameService } from '@/services/gameService';
import { GameGrid } from '@/components/GameGrid';

export const FreeGames = () => {
  const freeGames = gameService.getFreeGames();

  return (
    <div className='min-h-screen bg-gray-950 py-12'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='mb-8'>
          <h1 className='text-4xl font-bold text-white mb-2'>Free Games</h1>
          <p className='text-gray-400'>
            Play amazing games without spending a dime
          </p>
        </div>

        <GameGrid games={freeGames} />
      </div>
    </div>
  );
};
