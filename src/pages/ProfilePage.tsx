import { useAuth } from '@/hooks/useAuth';
import { User, Mail, Calendar } from 'lucide-react';

export const ProfilePage = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className='min-h-screen bg-gray-950 py-12'>
      <div className='max-w-4xl mx-auto px-6'>
        <h1 className='text-4xl font-bold text-white mb-8'>Profile</h1>

        <div className='bg-gray-900 rounded-lg p-8 border border-gray-800'>
          {/* Avatar and Name */}
          <div className='flex items-center gap-6 mb-8 pb-8 border-b border-gray-800'>
            <img
              src={user.avatar}
              alt={user.displayName}
              className='w-24 h-24 rounded-full border-4 border-gray-700'
            />
            <div>
              <h2 className='text-3xl font-bold text-white mb-2'>
                {user.displayName}
              </h2>
              <p className='text-gray-400'>@{user.username}</p>
            </div>
          </div>

          {/* User Info */}
          <div className='space-y-6'>
            <div className='flex items-center gap-3 text-gray-300'>
              <User className='w-5 h-5 text-blue-500' />
              <div>
                <div className='text-sm text-gray-500'>Username</div>
                <div className='text-white'>{user.username}</div>
              </div>
            </div>

            <div className='flex items-center gap-3 text-gray-300'>
              <Mail className='w-5 h-5 text-blue-500' />
              <div>
                <div className='text-sm text-gray-500'>Email</div>
                <div className='text-white'>{user.email}</div>
              </div>
            </div>

            <div className='flex items-center gap-3 text-gray-300'>
              <Calendar className='w-5 h-5 text-blue-500' />
              <div>
                <div className='text-sm text-gray-500'>Member Since</div>
                <div className='text-white'>
                  {new Date(user.joinedDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className='mt-8 pt-8 border-t border-gray-800 grid grid-cols-3 gap-6'>
            <div className='text-center'>
              <div className='text-3xl font-bold text-white mb-1'>
                {user.library.length}
              </div>
              <div className='text-gray-400 text-sm'>Games Owned</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-white mb-1'>
                {user.wishlist.length}
              </div>
              <div className='text-gray-400 text-sm'>Wishlist</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-white mb-1'>
                {user.friends.length}
              </div>
              <div className='text-gray-400 text-sm'>Friends</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
