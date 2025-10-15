import { games } from '@/data/games';
import type { SearchParams } from '@/types';
import type { Game } from '@/data/games';

export const gameService = {
  getAllGames(): Game[] {
    return games;
  },

  getGameById(id: string): Game | undefined {
    return games.find(game => game.id === id);
  },

  getGameBySlug(slug: string): Game | undefined {
    return games.find(game => game.slug === slug);
  },

  getFeaturedGames(): Game[] {
    return games.filter(game => game.isFeatured);
  },

  getNewReleases(): Game[] {
    return games.filter(game => game.isNew);
  },

  getFreeGames(): Game[] {
    return games.filter(game => game.isFree);
  },

  getDiscountedGames(): Game[] {
    return games.filter(game => game.discount && game.discount > 0);
  },

  searchGames(params: SearchParams): Game[] {
    let filtered = [...games];

    // Filter by query
    if (params.query) {
      const query = params.query.toLowerCase();
      filtered = filtered.filter(
        game =>
          game.title.toLowerCase().includes(query) ||
          game.description.toLowerCase().includes(query) ||
          game.developer.toLowerCase().includes(query) ||
          game.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Filter by genre
    if (params.genre && params.genre !== 'all') {
      filtered = filtered.filter(game =>
        game.genres
          .map(g => g.toLowerCase())
          .includes(params.genre!.toLowerCase())
      );
    }

    // Filter by price range
    if (params.priceRange) {
      switch (params.priceRange) {
        case 'free':
          filtered = filtered.filter(game => game.price === 0);
          break;
        case 'under20':
          filtered = filtered.filter(
            game => game.price > 0 && game.price <= 20
          );
          break;
        case 'under40':
          filtered = filtered.filter(
            game => game.price > 0 && game.price <= 40
          );
          break;
      }
    }

    // Filter by platform
    if (params.platform && params.platform !== 'all') {
      filtered = filtered.filter(game =>
        game.platforms.includes(params.platform as 'windows' | 'mac' | 'linux')
      );
    }

    // Sort
    if (params.sortBy) {
      switch (params.sortBy) {
        case 'popular':
          filtered.sort((a, b) => b.rating - a.rating);
          break;
        case 'recent':
          filtered.sort(
            (a, b) =>
              new Date(b.releaseDate).getTime() -
              new Date(a.releaseDate).getTime()
          );
          break;
        case 'price-low':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          filtered.sort((a, b) => b.price - a.price);
          break;
        case 'rating':
          filtered.sort((a, b) => b.rating - a.rating);
          break;
      }
    }

    return filtered;
  },

  getGamesByGenre(genre: string): Game[] {
    return games.filter(game =>
      game.genres.map(g => g.toLowerCase()).includes(genre.toLowerCase())
    );
  },

  getRelatedGames(gameId: string, limit: number = 4): Game[] {
    const game = games.find(g => g.id === gameId);
    if (!game) return [];

    // Find games with similar genres or tags
    const related = games
      .filter(g => g.id !== gameId)
      .map(g => {
        let score = 0;
        // Match genres
        g.genres.forEach(genre => {
          if (game.genres.includes(genre)) score += 3;
        });
        // Match tags
        g.tags.forEach(tag => {
          if (game.tags.includes(tag)) score += 1;
        });
        return { game: g, score };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(item => item.game);

    return related;
  },
};
