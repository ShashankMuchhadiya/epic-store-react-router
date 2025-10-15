import { useState } from 'react';
import { useAsync } from '@/hooks';

// Mock API function
const fetchDashboardData = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return {
    stats: {
      totalUsers: 1234,
      totalOrders: 567,
      revenue: 89123,
      growth: 12.5,
    },
    recentActivity: [
      { id: 1, action: 'User registered', time: '2 minutes ago' },
      { id: 2, action: 'Order completed', time: '5 minutes ago' },
      { id: 3, action: 'Payment received', time: '10 minutes ago' },
    ],
  };
};

export function Dashboard() {
  const [refreshCount, setRefreshCount] = useState(0);
  const { data, loading, error } = useAsync(fetchDashboardData, [refreshCount]);

  const handleRefresh = () => {
    setRefreshCount(prev => prev + 1);
  };

  if (loading) {
    return (
      <div className='max-w-6xl mx-auto'>
        <h1 className='text-3xl font-bold text-gray-900 mb-8'>Dashboard</h1>
        <div className='flex items-center justify-center py-12'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
          <span className='ml-4 text-gray-600'>Loading dashboard data...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='max-w-6xl mx-auto'>
        <h1 className='text-3xl font-bold text-gray-900 mb-8'>Dashboard</h1>
        <div className='bg-red-50 border border-red-200 rounded-lg p-6'>
          <h3 className='text-lg font-semibold text-red-800 mb-2'>
            Error Loading Data
          </h3>
          <p className='text-red-600 mb-4'>{error.message}</p>
          <button
            onClick={handleRefresh}
            className='bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors'
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='max-w-6xl mx-auto'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-3xl font-bold text-gray-900'>Dashboard</h1>
        <button
          onClick={handleRefresh}
          className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors'
        >
          Refresh Data
        </button>
      </div>

      {/* Stats Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h3 className='text-sm font-medium text-gray-500 mb-2'>
            Total Users
          </h3>
          <p className='text-3xl font-bold text-blue-600'>
            {data?.stats.totalUsers.toLocaleString()}
          </p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h3 className='text-sm font-medium text-gray-500 mb-2'>
            Total Orders
          </h3>
          <p className='text-3xl font-bold text-green-600'>
            {data?.stats.totalOrders.toLocaleString()}
          </p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h3 className='text-sm font-medium text-gray-500 mb-2'>Revenue</h3>
          <p className='text-3xl font-bold text-purple-600'>
            ${data?.stats.revenue.toLocaleString()}
          </p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h3 className='text-sm font-medium text-gray-500 mb-2'>Growth</h3>
          <p className='text-3xl font-bold text-orange-600'>
            +{data?.stats.growth}%
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {/* Recent Activity */}
        <div className='bg-white rounded-lg shadow-md p-6'>
          <h3 className='text-lg font-semibold mb-4'>Recent Activity</h3>
          <div className='space-y-4'>
            {data?.recentActivity.map(activity => (
              <div
                key={activity.id}
                className='flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0'
              >
                <span className='text-gray-700'>{activity.action}</span>
                <span className='text-sm text-gray-500'>{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard Features */}
        <div className='bg-white rounded-lg shadow-md p-6'>
          <h3 className='text-lg font-semibold mb-4'>Dashboard Features</h3>
          <ul className='space-y-3 text-gray-600'>
            <li className='flex items-center'>
              <span className='w-2 h-2 bg-green-500 rounded-full mr-3'></span>
              Async data loading with custom hook
            </li>
            <li className='flex items-center'>
              <span className='w-2 h-2 bg-green-500 rounded-full mr-3'></span>
              Error handling and loading states
            </li>
            <li className='flex items-center'>
              <span className='w-2 h-2 bg-green-500 rounded-full mr-3'></span>
              Responsive grid layout
            </li>
            <li className='flex items-center'>
              <span className='w-2 h-2 bg-green-500 rounded-full mr-3'></span>
              Data refresh functionality
            </li>
            <li className='flex items-center'>
              <span className='w-2 h-2 bg-green-500 rounded-full mr-3'></span>
              TypeScript type safety
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
