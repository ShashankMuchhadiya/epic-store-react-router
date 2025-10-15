import { useParams, useNavigate, Link } from 'react-router-dom';
import { gameService } from '@/services/gameService';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';
import type { Game } from '@/data/games';
import {
  ShoppingCart,
  Heart,
  Calendar,
  Monitor,
  Star,
  ChevronLeft,
  Award,
} from 'lucide-react';
import { useState } from 'react';

export const GameDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addToCart, items } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [selectedImage, setSelectedImage] = useState(0);

  const game = slug ? gameService.getGameBySlug(slug) : undefined;

  if (!game) {
    return (
      <div className='flex items-center justify-center min-h-screen bg-gray-950'>
        <div className='text-center'>
          <h1 className='mb-4 text-4xl font-bold text-white'>Game Not Found</h1>
          <Link to='/store' className='text-blue-500 hover:text-blue-400'>
            Back to Store
          </Link>
        </div>
      </div>
    );
  }

  const isInCart = items.some(item => item.gameId === game.id);
  const inWishlist = isInWishlist(game.id);
  const relatedGames = gameService.getRelatedGames(game.id);

  const handleAddToCart = () => {
    if (!isInCart) {
      addToCart(game.id);
    }
  };

  const handleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(game.id);
    } else {
      addToWishlist(game.id);
    }
  };

  return (
    <div className='min-h-screen bg-gray-950'>
      {/* Back Button */}
      <div className='px-6 py-6 mx-auto max-w-[1600px] '>
        <button
          onClick={() => navigate(-1)}
          className='flex items-center gap-2 text-gray-200 transition-colors hover:text-white'
        >
          <ChevronLeft className='w-5 h-5' />
          Back
        </button>
      </div>

      {/* Hero Section */}
      <div className='relative h-[500px] mb-12'>
        <img
          src={game.images.screenshots[selectedImage] || game.images.hero}
          alt={game.title}
          className='object-cover w-full h-full'
          onError={e => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://picsum.photos/1920/1080?random=999';
          }}
        />
        <div className='absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent' />
      </div>

      {/* Content */}
      <div className='relative z-10 px-6 mx-auto -mt-32 max-w-[1600px]'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          {/* Main Content */}
          <div className='space-y-8 lg:col-span-2'>
            {/* Title & Info */}
            <div>
              <div className='flex gap-2 mb-4'>
                {game.isFree && (
                  <span className='px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded'>
                    FREE
                  </span>
                )}
                {game.discount && game.discount > 0 && (
                  <span className='px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded'>
                    -{game.discount}%
                  </span>
                )}
                {game.isNew && (
                  <span className='px-4 py-2 text-sm font-semibold text-white bg-purple-600 rounded'>
                    NEW
                  </span>
                )}
              </div>

              <h1 className='mb-4 text-5xl font-bold text-white'>
                {game.title}
              </h1>

              <div className='flex items-center gap-6 text-gray-400'>
                <div className='flex items-center gap-2'>
                  <Star className='w-5 h-5 text-yellow-500 fill-yellow-500' />
                  <span className='font-semibold text-white'>
                    {game.rating}
                  </span>
                  <span>/5</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Calendar className='w-5 h-5' />
                  <span>{new Date(game.releaseDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className='mb-4 text-2xl font-bold text-white'>About</h2>
              <p className='leading-relaxed text-gray-300'>
                {game.longDescription}
              </p>
            </div>

            {/* Screenshots */}
            <div>
              <h2 className='mb-4 text-2xl font-bold text-white'>
                Screenshots
              </h2>
              <div className='grid grid-cols-3 gap-4'>
                {game.images.screenshots.map(
                  (screenshot: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative aspect-video rounded-lg overflow-hidden ${
                        selectedImage === index ? 'ring-4 ring-blue-500' : ''
                      }`}
                    >
                      <img
                        src={screenshot}
                        alt={`Screenshot ${index + 1}`}
                        className='object-cover w-full h-full transition-transform duration-300 hover:scale-110'
                        onError={e => {
                          const target = e.target as HTMLImageElement;
                          target.src =
                            'https://picsum.photos/1920/1080?random=999';
                        }}
                      />
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className='mb-4 text-2xl font-bold text-white'>Features</h2>
              <div className='grid grid-cols-2 gap-4'>
                {game.features.map((feature: string) => (
                  <div
                    key={feature}
                    className='flex items-center gap-2 text-gray-300'
                  >
                    <Award className='w-5 h-5 text-blue-500' />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* System Requirements */}
            <div>
              <h2 className='mb-4 text-2xl font-bold text-white'>
                System Requirements
              </h2>
              <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                <div className='p-6 bg-gray-900 rounded-lg'>
                  <h3 className='mb-4 text-lg font-semibold text-white'>
                    Minimum
                  </h3>
                  <div className='space-y-2 text-sm'>
                    <div>
                      <span className='text-gray-400'>OS:</span>
                      <span className='ml-2 text-gray-300'>
                        {game.systemRequirements.minimum.os}
                      </span>
                    </div>
                    <div>
                      <span className='text-gray-400'>Processor:</span>
                      <span className='ml-2 text-gray-300'>
                        {game.systemRequirements.minimum.processor}
                      </span>
                    </div>
                    <div>
                      <span className='text-gray-400'>Memory:</span>
                      <span className='ml-2 text-gray-300'>
                        {game.systemRequirements.minimum.memory}
                      </span>
                    </div>
                    <div>
                      <span className='text-gray-400'>Graphics:</span>
                      <span className='ml-2 text-gray-300'>
                        {game.systemRequirements.minimum.graphics}
                      </span>
                    </div>
                    <div>
                      <span className='text-gray-400'>Storage:</span>
                      <span className='ml-2 text-gray-300'>
                        {game.systemRequirements.minimum.storage}
                      </span>
                    </div>
                  </div>
                </div>
                <div className='p-6 bg-gray-900 rounded-lg'>
                  <h3 className='mb-4 text-lg font-semibold text-white'>
                    Recommended
                  </h3>
                  <div className='space-y-2 text-sm'>
                    <div>
                      <span className='text-gray-400'>OS:</span>
                      <span className='ml-2 text-gray-300'>
                        {game.systemRequirements.recommended.os}
                      </span>
                    </div>
                    <div>
                      <span className='text-gray-400'>Processor:</span>
                      <span className='ml-2 text-gray-300'>
                        {game.systemRequirements.recommended.processor}
                      </span>
                    </div>
                    <div>
                      <span className='text-gray-400'>Memory:</span>
                      <span className='ml-2 text-gray-300'>
                        {game.systemRequirements.recommended.memory}
                      </span>
                    </div>
                    <div>
                      <span className='text-gray-400'>Graphics:</span>
                      <span className='ml-2 text-gray-300'>
                        {game.systemRequirements.recommended.graphics}
                      </span>
                    </div>
                    <div>
                      <span className='text-gray-400'>Storage:</span>
                      <span className='ml-2 text-gray-300'>
                        {game.systemRequirements.recommended.storage}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className='space-y-6'>
            {/* Purchase Card */}
            <div className='sticky p-6 bg-gray-900 rounded-lg top-24'>
              {/* Price */}
              <div className='mb-6'>
                {game.price === 0 ? (
                  <div className='text-3xl font-bold text-white'>
                    Free to Play
                  </div>
                ) : (
                  <div className='space-y-2'>
                    {game.originalPrice && (
                      <div className='text-lg text-gray-500 line-through'>
                        ${game.originalPrice.toFixed(2)}
                      </div>
                    )}
                    <div className='text-3xl font-bold text-white'>
                      ${game.price.toFixed(2)}
                    </div>
                  </div>
                )}
              </div>

              {/* Buttons */}
              <div className='space-y-3'>
                <button
                  onClick={handleAddToCart}
                  disabled={isInCart}
                  className={`w-full py-3 px-4 rounded font-semibold flex items-center justify-center gap-2 transition-colors ${
                    isInCart
                      ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  <ShoppingCart className='w-5 h-5' />
                  {isInCart ? 'In Cart' : game.isFree ? 'Get' : 'Add to Cart'}
                </button>
                <button
                  onClick={handleWishlist}
                  className='flex items-center justify-center w-full gap-2 px-4 py-3 font-semibold text-white transition-colors bg-gray-800 rounded hover:bg-gray-700'
                >
                  <Heart
                    className={`w-5 h-5 ${inWishlist ? 'fill-red-500 text-red-500' : ''}`}
                  />
                  {inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
                </button>
              </div>

              {/* Info */}
              <div className='pt-6 mt-6 space-y-3 text-sm border-t border-gray-800'>
                <div>
                  <span className='text-gray-400'>Developer:</span>
                  <span className='ml-2 text-white'>{game.developer}</span>
                </div>
                <div>
                  <span className='text-gray-400'>Publisher:</span>
                  <span className='ml-2 text-white'>{game.publisher}</span>
                </div>
                <div>
                  <span className='text-gray-400'>Release Date:</span>
                  <span className='ml-2 text-white'>
                    {new Date(game.releaseDate).toLocaleDateString()}
                  </span>
                </div>
                <div>
                  <span className='text-gray-400'>Platforms:</span>
                  <div className='flex gap-2 mt-2'>
                    {game.platforms.map((platform: string) => (
                      <div
                        key={platform}
                        className='flex items-center gap-1 px-2 py-1 bg-gray-800 rounded'
                      >
                        <Monitor className='w-4 h-4' />
                        <span className='text-white capitalize'>
                          {platform}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <span className='text-gray-400'>Genres:</span>
                  <div className='flex flex-wrap gap-2 mt-2'>
                    {game.genres.map((genre: string) => (
                      <span
                        key={genre}
                        className='px-2 py-1 text-white bg-gray-800 rounded'
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className='text-gray-400'>Tags:</span>
                  <div className='flex flex-wrap gap-2 mt-2'>
                    {game.tags.slice(0, 5).map((tag: string) => (
                      <span
                        key={tag}
                        className='px-2 py-1 text-xs text-gray-300 bg-gray-800 rounded'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Games */}
        {relatedGames.length > 0 && (
          <div className='mt-16 mb-12'>
            <h2 className='mb-6 text-2xl font-bold text-white'>
              You May Also Like
            </h2>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
              {relatedGames.map((relatedGame: Game) => (
                <Link
                  key={relatedGame.id}
                  to={`/store/game/${relatedGame.slug}`}
                  className='group'
                >
                  <div className='aspect-[3/4] rounded-lg overflow-hidden mb-3'>
                    <img
                      src={relatedGame.images.cover}
                      alt={relatedGame.title}
                      className='object-cover w-full h-full transition-transform duration-300 group-hover:scale-110'
                    />
                  </div>
                  <h3 className='font-semibold text-white transition-colors group-hover:text-blue-400'>
                    {relatedGame.title}
                  </h3>
                  <p className='text-gray-400'>
                    {relatedGame.price === 0
                      ? 'Free'
                      : `$${relatedGame.price.toFixed(2)}`}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
