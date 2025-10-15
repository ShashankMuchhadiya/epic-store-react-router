import { Link } from 'react-router-dom';
import { ROUTES } from '@/utils/constants';

export function Home() {
  return (
    <div className='max-w-4xl mx-auto'>
      <div className='text-center mb-12'>
        <h1 className='text-4xl font-bold text-gray-900 mb-4'>
          Welcome to React Router Project
        </h1>
        <p className='text-xl text-gray-600 mb-8'>
          A modern React application built with TypeScript, React Router v6, and
          industry best practices.
        </p>
        <div className='flex justify-center space-x-4'>
          <Link
            to={ROUTES.ABOUT}
            className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors'
          >
            Learn More
          </Link>
          <Link
            to={ROUTES.DASHBOARD}
            className='bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors'
          >
            View Dashboard
          </Link>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h3 className='text-xl font-semibold mb-3'>TypeScript</h3>
          <p className='text-gray-600'>
            Full TypeScript support with strict type checking and best practices
            configuration.
          </p>
        </div>

        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h3 className='text-xl font-semibold mb-3'>React Router v6</h3>
          <p className='text-gray-600'>
            Modern routing with nested routes, lazy loading, and programmatic
            navigation.
          </p>
        </div>

        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h3 className='text-xl font-semibold mb-3'>Code Quality</h3>
          <p className='text-gray-600'>
            ESLint, Prettier, and Husky for consistent code formatting and
            quality.
          </p>
        </div>

        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h3 className='text-xl font-semibold mb-3'>Custom Hooks</h3>
          <p className='text-gray-600'>
            Reusable custom hooks for localStorage, debouncing, and async
            operations.
          </p>
        </div>

        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h3 className='text-xl font-semibold mb-3'>Path Mapping</h3>
          <p className='text-gray-600'>
            Clean imports with TypeScript path mapping for better code
            organization.
          </p>
        </div>

        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h3 className='text-xl font-semibold mb-3'>Responsive Design</h3>
          <p className='text-gray-600'>
            Mobile-first responsive design with Tailwind CSS for modern UI.
          </p>
        </div>
      </div>
    </div>
  );
}
