import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

export const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signup(email, password, username);
      navigate('/store');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to sign up');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen bg-gray-950 flex items-center justify-center px-6'>
      <div className='max-w-md w-full'>
        {/* Logo */}
        <div className='text-center mb-8'>
          <div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4'>
            <span className='text-white font-bold text-3xl'>E</span>
          </div>
          <h1 className='text-3xl font-bold text-white mb-2'>
            Create your account
          </h1>
          <p className='text-gray-400'>Join millions of gamers on Epic Store</p>
        </div>

        {/* Form */}
        <div className='bg-gray-900 rounded-lg p-8 border border-gray-800'>
          {error && (
            <div className='mb-6 p-4 bg-red-500/10 border border-red-500 rounded text-red-500 text-sm'>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label
                htmlFor='username'
                className='block text-sm font-medium text-gray-300 mb-2'
              >
                Username
              </label>
              <input
                id='username'
                type='text'
                value={username}
                onChange={e => setUsername(e.target.value)}
                className='w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors'
                placeholder='Choose a username'
                required
              />
            </div>

            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-300 mb-2'
              >
                Email
              </label>
              <input
                id='email'
                type='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                className='w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors'
                placeholder='Enter your email'
                required
              />
            </div>

            <div>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-300 mb-2'
              >
                Password
              </label>
              <input
                id='password'
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                className='w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors'
                placeholder='Create a password'
                required
                minLength={6}
              />
            </div>

            <button
              type='submit'
              disabled={loading}
              className='w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:text-gray-400 text-white font-semibold rounded transition-colors'
            >
              {loading ? 'Creating account...' : 'Sign Up'}
            </button>
          </form>

          <div className='mt-6 text-center'>
            <p className='text-gray-400 text-sm'>
              Already have an account?{' '}
              <Link
                to='/login'
                className='text-blue-500 hover:text-blue-400 font-semibold'
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
