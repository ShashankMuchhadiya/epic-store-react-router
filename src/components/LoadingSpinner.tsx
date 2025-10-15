export const LoadingSpinner = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-950'>
      <div className='text-center'>
        <div className='animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto mb-4'></div>
        <p className='text-gray-400'>Loading...</p>
      </div>
    </div>
  );
};
