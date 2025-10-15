import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  LogOut,
  Library,
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';
import { useState } from 'react';

export const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const { itemCount } = useCart();
  const { items: wishlistItems } = useWishlist();
  const navigate = useNavigate();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
    navigate('/');
  };

  return (
    <nav className='sticky top-0 z-50 border-b border-gray-800 bg-gray-900/95 backdrop-blur-sm'>
      <div className='px-6 mx-auto max-w-[1600px]'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <Link to='/' className='flex items-center gap-3'>
            <div className='flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600'>
              <span className='text-xl font-bold text-white'>E</span>
            </div>
            <span className='hidden text-xl font-bold text-white md:block'>
              Epic Store
            </span>
          </Link>

          {/* Nav Links */}
          <div className='items-center hidden gap-8 md:flex'>
            <NavLink
              to='/store'
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors ${
                  isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                }`
              }
            >
              Store
            </NavLink>
            <NavLink
              to='/browse'
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors ${
                  isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                }`
              }
            >
              Browse
            </NavLink>
            {isAuthenticated && (
              <NavLink
                to='/library'
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors ${
                    isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`
                }
              >
                Library
              </NavLink>
            )}
          </div>

          {/* Right Side Actions */}
          <div className='flex items-center gap-4'>
            {/* Search */}
            <Link
              to='/search'
              className='p-2 text-gray-400 transition-colors hover:text-white'
            >
              <Search className='w-5 h-5' />
            </Link>

            {/* Wishlist */}
            {isAuthenticated && (
              <Link
                to='/wishlist'
                className='relative p-2 text-gray-400 transition-colors hover:text-white'
              >
                <Heart className='w-5 h-5' />
                {wishlistItems.length > 0 && (
                  <span className='absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-600 rounded-full -top-1 -right-1'>
                    {wishlistItems.length}
                  </span>
                )}
              </Link>
            )}

            {/* Cart */}
            <Link
              to='/cart'
              className='relative p-2 text-gray-400 transition-colors hover:text-white'
            >
              <ShoppingCart className='w-5 h-5' />
              {itemCount > 0 && (
                <span className='absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-blue-600 rounded-full -top-1 -right-1'>
                  {itemCount}
                </span>
              )}
            </Link>

            {/* User Menu */}
            {isAuthenticated ? (
              <div className='relative'>
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className='flex items-center gap-2 p-2 text-gray-400 transition-colors hover:text-white'
                >
                  <img
                    src={user?.avatar}
                    alt={user?.displayName}
                    className='w-8 h-8 border-2 border-gray-700 rounded-full'
                  />
                </button>

                {showUserMenu && (
                  <>
                    <div
                      className='fixed inset-0'
                      onClick={() => setShowUserMenu(false)}
                    />
                    <div className='absolute right-0 w-64 py-2 mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-xl'>
                      <div className='px-4 py-3 border-b border-gray-700'>
                        <p className='font-semibold text-white'>
                          {user?.displayName}
                        </p>
                        <p className='text-sm text-gray-400'>{user?.email}</p>
                      </div>
                      <Link
                        to='/library'
                        className='flex items-center gap-3 px-4 py-2 text-gray-300 transition-colors hover:bg-gray-700 hover:text-white'
                        onClick={() => setShowUserMenu(false)}
                      >
                        <Library className='w-5 h-5' />
                        Library
                      </Link>
                      <Link
                        to='/profile'
                        className='flex items-center gap-3 px-4 py-2 text-gray-300 transition-colors hover:bg-gray-700 hover:text-white'
                        onClick={() => setShowUserMenu(false)}
                      >
                        <User className='w-5 h-5' />
                        Profile
                      </Link>
                      <button
                        onClick={handleLogout}
                        className='flex items-center w-full gap-3 px-4 py-2 text-gray-300 transition-colors hover:bg-gray-700 hover:text-white'
                      >
                        <LogOut className='w-5 h-5' />
                        Logout
                      </button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <Link
                to='/login'
                className='px-6 py-2 font-semibold text-white transition-colors bg-blue-600 rounded hover:bg-blue-700'
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
