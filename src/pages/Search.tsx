import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { gameService } from '@/services/gameService';
import { GameGrid } from '@/components/GameGrid';
import { Search as SearchIcon } from 'lucide-react';
import { useDebounce } from '@/hooks/useDebounce';

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery) {
      setSearchParams({ q: debouncedQuery });
    } else {
      setSearchParams({});
    }
  }, [debouncedQuery, setSearchParams]);

  const searchResults = debouncedQuery
    ? gameService.searchGames({ query: debouncedQuery })
    : [];

  return (
    <div className='min-h-screen bg-gray-950 py-12'>
      <div className='max-w-[1600px] mx-auto px-6'>
        {/* Search Header */}
        <div className='mb-8'>
          <h1 className='text-4xl font-bold text-white mb-6'>Search Games</h1>

          {/* Search Input */}
          <div className='relative max-w-2xl'>
            <SearchIcon className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
            <input
              type='text'
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder='Search for games...'
              className='w-full pl-12 pr-4 py-4 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors'
              autoFocus
            />
          </div>
        </div>

        {/* Results */}
        {query && (
          <div className='mb-4'>
            <p className='text-gray-400'>
              {searchResults.length} result
              {searchResults.length !== 1 ? 's' : ''} for "{query}"
            </p>
          </div>
        )}

        {query ? (
          searchResults.length > 0 ? (
            <GameGrid games={searchResults} />
          ) : (
            <div className='text-center py-12'>
              <p className='text-gray-400 text-lg'>
                No games found matching "{query}"
              </p>
            </div>
          )
        ) : (
          <div className='text-center py-12'>
            <SearchIcon className='w-24 h-24 text-gray-700 mx-auto mb-6' />
            <p className='text-gray-400 text-lg'>
              Start typing to search for games
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
