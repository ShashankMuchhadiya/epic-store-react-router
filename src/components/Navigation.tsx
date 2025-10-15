import { NavLink } from 'react-router-dom';
import { ROUTES } from '@/utils/constants';

const navigationItems = [
  { path: ROUTES.HOME, label: 'Home' },
  { path: ROUTES.ABOUT, label: 'About' },
  { path: ROUTES.CONTACT, label: 'Contact' },
  { path: ROUTES.PROFILE, label: 'Profile' },
  { path: ROUTES.DASHBOARD, label: 'Dashboard' },
];

export function Navigation() {
  return (
    <nav className='bg-blue-600 shadow-lg'>
      <div className='container mx-auto px-4'>
        <div className='flex space-x-8'>
          {navigationItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `py-4 px-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-white border-b-2 border-white'
                    : 'text-blue-100 hover:text-white hover:bg-blue-700'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
