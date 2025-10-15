import type { Game } from '@/data/games';
import { GameCard } from './GameCard';

interface GameGridProps {
  games: Game[];
  title?: string;
}

export const GameGrid = ({ games, title }: GameGridProps) => {
  if (games.length === 0) {
    return (
      <div className='py-12 text-center'>
        <p className='text-lg text-gray-400'>No games found</p>
      </div>
    );
  }

  return (
    <div className='space-y-6'>
      {title && <h2 className='text-2xl font-bold text-white'>{title}</h2>}
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
        {games.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};
