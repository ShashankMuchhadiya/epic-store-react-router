import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Navbar } from '@/components/Navbar';

// Eager loaded components
import { Store } from '@/pages/Store';
import { Login } from '@/pages/Login';
import { Signup } from '@/pages/Signup';

// Lazy loaded components
const GameDetails = lazy(() =>
  import('@/pages/GameDetails').then(module => ({
    default: module.GameDetails,
  }))
);
const Cart = lazy(() =>
  import('@/pages/Cart').then(module => ({ default: module.Cart }))
);
const Wishlist = lazy(() =>
  import('@/pages/Wishlist').then(module => ({ default: module.Wishlist }))
);
const Library = lazy(() =>
  import('@/pages/Library').then(module => ({ default: module.Library }))
);
const Browse = lazy(() =>
  import('@/pages/Browse').then(module => ({ default: module.Browse }))
);
const Search = lazy(() =>
  import('@/pages/Search').then(module => ({ default: module.Search }))
);
const ProfilePage = lazy(() =>
  import('@/pages/ProfilePage').then(module => ({
    default: module.ProfilePage,
  }))
);

export const Layout = () => {
  return (
    <div className='min-h-screen bg-gray-950'>
      <Navbar />
      <Routes>
        <Route index element={<Navigate to='/store' replace />} />
        <Route path='store' element={<Store />} />
        <Route
          path='store/game/:slug'
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <GameDetails />
            </Suspense>
          }
        />
        <Route
          path='browse'
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Browse />
            </Suspense>
          }
        />
        <Route
          path='search'
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Search />
            </Suspense>
          }
        />
        <Route
          path='cart'
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path='wishlist'
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <ProtectedRoute>
                <Wishlist />
              </ProtectedRoute>
            </Suspense>
          }
        />
        <Route
          path='library'
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <ProtectedRoute>
                <Library />
              </ProtectedRoute>
            </Suspense>
          }
        />
        <Route
          path='profile'
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            </Suspense>
          }
        />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route
          path='*'
          element={
            <div className='flex items-center justify-center min-h-screen'>
              <div className='text-center'>
                <h1 className='mb-4 text-6xl font-bold text-white'>404</h1>
                <p className='mb-8 text-xl text-gray-400'>Page not found</p>
                <a
                  href='/store'
                  className='inline-block px-8 py-3 font-semibold text-white transition-colors bg-blue-600 rounded hover:bg-blue-700'
                >
                  Go to Store
                </a>
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
};
