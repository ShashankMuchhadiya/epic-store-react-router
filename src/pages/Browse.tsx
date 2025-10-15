import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { gameService } from '@/services/gameService';
import { genres } from '@/data/games';
import { GameGrid } from '@/components/GameGrid';
import { Filter, ChevronDown } from 'lucide-react';

export const Browse = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(true);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedGenre = searchParams.get('genre') || 'all';
  const selectedPrice = searchParams.get('price') || 'all';
  const selectedPlatform = searchParams.get('platform') || 'all';
  const sortBy = searchParams.get('sort') || 'popular';

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowSortDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filteredGames = gameService.searchGames({
    ...(selectedGenre !== 'all' && { genre: selectedGenre }),
    ...(selectedPrice !== 'all' && {
      priceRange: selectedPrice as 'free' | 'under20' | 'under40' | 'all',
    }),
    ...(selectedPlatform !== 'all' && {
      platform: selectedPlatform as 'windows' | 'mac' | 'linux',
    }),
    sortBy: sortBy as
      | 'popular'
      | 'recent'
      | 'price-low'
      | 'price-high'
      | 'rating',
  });

  const updateFilter = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  return (
    <div className='min-h-screen py-12 bg-gray-950'>
      <div className='px-6 mx-auto max-w-7xl'>
        {/* Header */}
        <div className='flex items-center justify-between mb-8'>
          <div>
            <h1 className='mb-2 text-4xl font-bold text-white'>Browse Games</h1>
            <p className='text-gray-400'>{filteredGames.length} games found</p>
          </div>
          <div className='flex items-center gap-4'>
            {/* Sort Dropdown */}
            <div className='relative' ref={dropdownRef}>
              <button
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                className='flex items-center gap-2 px-4 py-2 text-sm text-white transition-colors bg-gray-900 border border-gray-800 rounded hover:bg-gray-800'
              >
                <span>
                  Sort by:{' '}
                  {sortBy === 'popular'
                    ? 'Most Popular'
                    : sortBy === 'recent'
                      ? 'Recently Added'
                      : sortBy === 'price-low'
                        ? 'Price: Low to High'
                        : sortBy === 'price-high'
                          ? 'Price: High to Low'
                          : sortBy === 'rating'
                            ? 'Highest Rated'
                            : sortBy}
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${showSortDropdown ? 'rotate-180' : ''}`}
                />
              </button>

              {showSortDropdown && (
                <div className='absolute right-0 z-50 w-64 mt-2 bg-gray-900 border border-gray-800 rounded-lg shadow-lg top-full'>
                  <div className='py-2'>
                    {[
                      { value: 'popular', label: 'Most Popular' },
                      { value: 'recent', label: 'Recently Added' },
                      { value: 'price-low', label: 'Price: Low to High' },
                      { value: 'price-high', label: 'Price: High to Low' },
                      { value: 'rating', label: 'Highest Rated' },
                    ].map(option => (
                      <button
                        key={option.value}
                        onClick={() => {
                          updateFilter('sort', option.value);
                          setShowSortDropdown(false);
                        }}
                        className={`w-full text-left px-4 py-3 hover:bg-gray-800 transition-colors ${
                          sortBy === option.value
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-300'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className='flex items-center gap-2 px-4 py-2 text-white bg-gray-900 border border-gray-800 rounded lg:hidden'
            >
              <Filter className='w-5 h-5' />
              Filters
            </button>
          </div>
        </div>

        <div className='grid grid-cols-1 gap-8 lg:grid-cols-4'>
          {/* Filters Sidebar */}
          <div
            className={`lg:block ${showFilters ? 'block' : 'hidden'} space-y-6`}
          >
            {/* Genre Filter */}
            <div className='p-6 bg-gray-900 border border-gray-800 rounded-lg'>
              <h3 className='mb-4 text-lg font-semibold text-white'>Genre</h3>
              <div className='space-y-2'>
                <button
                  onClick={() => updateFilter('genre', 'all')}
                  className={`w-full text-left px-3 py-2 rounded transition-colors ${
                    selectedGenre === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  All Genres
                </button>
                {genres.map(genre => (
                  <button
                    key={genre}
                    onClick={() => updateFilter('genre', genre)}
                    className={`w-full text-left px-3 py-2 rounded transition-colors ${
                      selectedGenre === genre
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className='p-6 bg-gray-900 border border-gray-800 rounded-lg'>
              <h3 className='mb-4 text-lg font-semibold text-white'>Price</h3>
              <div className='space-y-2'>
                {[
                  { value: 'all', label: 'All Prices' },
                  { value: 'free', label: 'Free' },
                  { value: 'under20', label: 'Under $20' },
                  { value: 'under40', label: 'Under $40' },
                ].map(option => (
                  <button
                    key={option.value}
                    onClick={() => updateFilter('price', option.value)}
                    className={`w-full text-left px-3 py-2 rounded transition-colors ${
                      selectedPrice === option.value
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Games Grid */}
          <div className='lg:col-span-3'>
            <GameGrid games={filteredGames} />
          </div>
        </div>
      </div>
    </div>
  );
};
