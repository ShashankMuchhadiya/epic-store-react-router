import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

export const Login = () => {
  const [email, setEmail] = useState('demo@epic.com');
  const [password, setPassword] = useState('demo123');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from =
    (location.state as { from?: { pathname: string } })?.from?.pathname ||
    '/store';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen px-6 bg-gray-950'>
      <div className='w-full max-w-md'>
        {/* Logo */}
        <div className='mb-8 text-center'>
          <h1 className='mb-2 text-3xl font-bold text-white'>
            Sign in to Epic Store
          </h1>
          <p className='text-gray-400'>
            Welcome back! Please enter your details.
          </p>
        </div>

        {/* Form */}
        <div className='p-8 bg-gray-900 border border-gray-800 rounded-lg'>
          {error && (
            <div className='p-4 mb-6 text-sm text-red-500 border border-red-500 rounded bg-red-500/10'>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-gray-300'
              >
                Email
              </label>
              <input
                id='email'
                type='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                className='w-full px-4 py-3 text-white placeholder-gray-500 transition-colors bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-blue-500'
                placeholder='Enter your email'
                required
              />
            </div>

            <div>
              <label
                htmlFor='password'
                className='block mb-2 text-sm font-medium text-gray-300'
              >
                Password
              </label>
              <input
                id='password'
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                className='w-full px-4 py-3 text-white placeholder-gray-500 transition-colors bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-blue-500'
                placeholder='Enter your password'
                required
              />
            </div>

            <button
              type='submit'
              disabled={loading}
              className='w-full px-4 py-3 font-semibold text-white transition-colors bg-blue-600 rounded hover:bg-blue-700 disabled:bg-gray-700 disabled:text-gray-400'
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className='mt-6 text-center'>
            <p className='text-sm text-gray-400'>
              Don't have an account?{' '}
              <Link
                to='/signup'
                className='font-semibold text-blue-500 hover:text-blue-400'
              >
                Sign up
              </Link>
            </p>
          </div>

          {/* Demo Credentials */}
          <div className='pt-6 mt-6 border-t border-gray-800'>
            <p className='text-xs text-center text-gray-500'>
              Demo credentials are pre-filled. Just click Sign In!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
