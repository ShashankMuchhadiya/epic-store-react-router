import { Link } from 'react-router-dom';
import { ROUTES } from '@/utils/constants';

export function Header() {
  return (
    <header className='bg-white shadow-sm border-b'>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          <Link
            to={ROUTES.HOME}
            className='text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors'
          >
            React Router Project
          </Link>
          <div className='flex items-center space-x-4'>
            <span className='text-sm text-gray-600'>
              Built with React Router v6 + TypeScript
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
