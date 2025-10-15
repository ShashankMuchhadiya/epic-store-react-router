import { useState } from 'react';
import { useLocalStorage } from '@/hooks';

interface UserProfile {
  name: string;
  email: string;
  bio: string;
  avatar: string;
}

export function Profile() {
  const [userProfile, setUserProfile] = useLocalStorage<UserProfile>(
    'userProfile',
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      bio: 'Full-stack developer passionate about React and TypeScript.',
      avatar: 'https://via.placeholder.com/150',
    }
  );

  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState(userProfile);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setUserProfile(editForm);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditForm(userProfile);
    setIsEditing(false);
  };

  return (
    <div className='max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold text-gray-900 mb-8'>User Profile</h1>

      <div className='bg-white rounded-lg shadow-md p-8'>
        {!isEditing ? (
          <div>
            <div className='flex items-center mb-6'>
              <img
                src={userProfile.avatar}
                alt='Profile'
                className='w-20 h-20 rounded-full mr-4'
              />
              <div>
                <h2 className='text-2xl font-semibold'>{userProfile.name}</h2>
                <p className='text-gray-600'>{userProfile.email}</p>
              </div>
            </div>
            <div className='mb-6'>
              <h3 className='text-lg font-semibold mb-2'>Bio</h3>
              <p className='text-gray-600'>{userProfile.bio}</p>
            </div>
            <button
              onClick={() => setIsEditing(true)}
              className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors'
            >
              Edit Profile
            </button>
          </div>
        ) : (
          <div>
            <h2 className='text-2xl font-semibold mb-6'>Edit Profile</h2>
            <div className='space-y-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Name
                </label>
                <input
                  type='text'
                  name='name'
                  value={editForm.name}
                  onChange={handleInputChange}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  value={editForm.email}
                  onChange={handleInputChange}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Bio
                </label>
                <textarea
                  name='bio'
                  value={editForm.bio}
                  onChange={handleInputChange}
                  rows={3}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Avatar URL
                </label>
                <input
                  type='url'
                  name='avatar'
                  value={editForm.avatar}
                  onChange={handleInputChange}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>
            </div>
            <div className='flex space-x-4 mt-6'>
              <button
                onClick={handleSave}
                className='bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors'
              >
                Save Changes
              </button>
              <button
                onClick={handleCancel}
                className='bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors'
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      <div className='mt-8 bg-blue-50 rounded-lg p-6'>
        <h3 className='text-lg font-semibold mb-4 text-blue-900'>
          Profile Features
        </h3>
        <ul className='text-blue-700 space-y-2'>
          <li>• Data persisted using localStorage</li>
          <li>• Custom hook for localStorage management</li>
          <li>• Form validation and state management</li>
          <li>• Responsive design with Tailwind CSS</li>
        </ul>
      </div>
    </div>
  );
}
