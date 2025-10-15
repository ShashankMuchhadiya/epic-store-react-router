import { HeroCarousel } from '@/components/HeroCarousel';
import { GameGrid } from '@/components/GameGrid';
import { gameService } from '@/services/gameService';

export const Store = () => {
  const featuredGames = gameService
    .getFeaturedGames()
    .filter(game => !game.isNew);
  const latestGames = gameService.getNewReleases();

  return (
    <div className='min-h-screen bg-gray-950'>
      {/* Hero Carousel */}
      <HeroCarousel games={featuredGames} />

      {/* Content */}
      <div className='px-6 py-12 mx-auto space-y-16 max-w-[1600px]'>
        {/* Latest Games (excluding those that are also featured) */}
        {latestGames.length > 0 && (
          <GameGrid games={latestGames} title='New Releases' />
        )}

        {/* Featured Games (includes new releases that are also featured) */}
        <GameGrid games={featuredGames} title='Featured' />
      </div>
    </div>
  );
};
