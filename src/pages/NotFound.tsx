import { Link } from 'react-router-dom';
import { ROUTES } from '@/utils/constants';

export function NotFound() {
  return (
    <div className='max-w-2xl mx-auto text-center'>
      <div className='mb-8'>
        <h1 className='text-9xl font-bold text-gray-300'>404</h1>
        <h2 className='text-3xl font-bold text-gray-900 mb-4'>
          Page Not Found
        </h2>
        <p className='text-xl text-gray-600 mb-8'>
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
      </div>

      <div className='space-y-4'>
        <Link
          to={ROUTES.HOME}
          className='inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors'
        >
          Go Home
        </Link>
        <div className='text-gray-500'>
          <p>Or try one of these pages:</p>
          <div className='flex justify-center space-x-4 mt-4'>
            <Link
              to={ROUTES.ABOUT}
              className='text-blue-600 hover:text-blue-700 underline'
            >
              About
            </Link>
            <Link
              to={ROUTES.CONTACT}
              className='text-blue-600 hover:text-blue-700 underline'
            >
              Contact
            </Link>
            <Link
              to={ROUTES.DASHBOARD}
              className='text-blue-600 hover:text-blue-700 underline'
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>

      <div className='mt-12 bg-gray-50 rounded-lg p-6'>
        <h3 className='text-lg font-semibold mb-4'>404 Page Features</h3>
        <ul className='text-gray-600 space-y-2'>
          <li>• Clean and user-friendly design</li>
          <li>• Navigation back to home page</li>
          <li>• Quick links to other pages</li>
          <li>• Responsive layout</li>
        </ul>
      </div>
    </div>
  );
}
