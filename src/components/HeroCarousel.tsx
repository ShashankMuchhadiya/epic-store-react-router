import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/assets/styles/slider.scss';
import type { Game } from '@/data/games';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroCarouselProps {
  games: Game[];
}

export const HeroCarousel = ({ games }: HeroCarouselProps) => {
  if (games.length === 0) return null;

  // Custom arrow components
  const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      onClick={onClick}
      className='absolute z-10 flex items-center justify-center w-12 h-12 text-white transition-all duration-300 -translate-y-1/2 rounded-full left-4 top-1/2 bg-black/50 hover:bg-black/70 hover:scale-110 backdrop-blur-sm'
      aria-label='Previous slide'
    >
      <ChevronLeft className='w-6 h-6' />
    </button>
  );

  const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      onClick={onClick}
      className='absolute z-10 flex items-center justify-center w-12 h-12 text-white transition-all duration-300 -translate-y-1/2 rounded-full right-4 top-1/2 bg-black/50 hover:bg-black/70 hover:scale-110 backdrop-blur-sm'
      aria-label='Next slide'
    >
      <ChevronRight className='w-6 h-6' />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    arrows: true,
    fade: true,
    cssEase: 'linear',
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className='relative w-full h-[600px] overflow-hidden bg-black'>
      <Slider {...settings}>
        {games.map(game => (
          <div key={game.id} className='relative h-[600px]'>
            <div className='absolute inset-0'>
              <img
                src={game.images.hero}
                alt={game.title}
                className='object-cover w-full h-full'
                onError={e => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://picsum.photos/1920/1080?random=999';
                }}
              />
              <div className='absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent' />
              <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent' />
            </div>

            {/* Content */}
            <div className='relative flex items-center h-full px-6 mx-auto max-w-[1600px]'>
              <div className='max-w-2xl'>
                {/* Badges */}
                <div className='flex gap-2 mb-4'>
                  {game.isFree && (
                    <span className='px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded'>
                      FREE
                    </span>
                  )}
                  {game.discount && game.discount > 0 && (
                    <span className='px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded'>
                      SAVE {game.discount}%
                    </span>
                  )}
                  {game.isNew && (
                    <span className='px-4 py-2 text-sm font-semibold text-white bg-purple-600 rounded'>
                      NEW RELEASE
                    </span>
                  )}
                </div>

                {/* Title */}
                <h1 className='mb-4 text-4xl font-bold text-white md:text-6xl drop-shadow-lg'>
                  {game.title}
                </h1>

                {/* Description */}
                <p className='mb-6 text-lg text-gray-200 md:text-xl line-clamp-3'>
                  {game.description}
                </p>

                {/* Genres */}
                <div className='flex flex-wrap gap-2 mb-8'>
                  {game.genres.map(genre => (
                    <span
                      key={genre}
                      className='px-3 py-1 text-sm text-white border rounded bg-white/10 backdrop-blur-sm border-white/20'
                    >
                      {genre}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className='flex flex-col gap-4 sm:flex-row'>
                  <Link
                    to={`/store/game/${game.slug}`}
                    className='px-6 py-3 text-base font-semibold text-center text-white transition-colors bg-blue-600 rounded md:px-8 md:py-4 hover:bg-blue-700 md:text-lg'
                  >
                    {game.isFree ? 'Get Now' : 'Buy Now'}
                  </Link>
                  <Link
                    to={`/store/game/${game.slug}`}
                    className='px-6 py-3 text-base font-semibold text-center text-white transition-colors border rounded md:px-8 md:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/20 md:text-lg'
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
