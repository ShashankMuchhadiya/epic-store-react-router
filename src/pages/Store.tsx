import { HeroCarousel } from '@/components/HeroCarousel';
import { GameGrid } from '@/components/GameGrid';
import { gameService } from '@/services/gameService';

export const Store = () => {
  const featuredGames = gameService.getFeaturedGames();

  return (
    <div className='min-h-screen bg-gray-950'>
      {/* Hero Carousel */}
      <HeroCarousel games={featuredGames} />

      {/* Content */}
      <div className='px-6 py-12 mx-auto space-y-16 max-w-7xl'>
        {/* Featured Games */}
        <GameGrid games={featuredGames} title='Featured' />
      </div>
    </div>
  );
};
