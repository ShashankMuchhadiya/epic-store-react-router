export function About() {
  return (
    <div className='max-w-4xl mx-auto'>
      <h1 className='text-3xl font-bold text-gray-900 mb-8'>
        About This Project
      </h1>

      <div className='bg-white rounded-lg shadow-md p-8 mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Project Overview</h2>
        <p className='text-gray-600 mb-4'>
          This React Router project demonstrates modern React development
          practices with TypeScript, React Router v6, and a comprehensive
          development toolchain.
        </p>
        <p className='text-gray-600'>
          The project includes proper folder structure, custom hooks, utility
          functions, and follows industry best practices for maintainable and
          scalable React applications.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='bg-white rounded-lg shadow-md p-6'>
          <h3 className='text-xl font-semibold mb-4'>Technologies Used</h3>
          <ul className='space-y-2 text-gray-600'>
            <li>• React 19 with TypeScript</li>
            <li>• React Router v6 for routing</li>
            <li>• Vite for build tooling</li>
            <li>• ESLint for code linting</li>
            <li>• Prettier for code formatting</li>
            <li>• Husky for git hooks</li>
            <li>• Tailwind CSS for styling</li>
          </ul>
        </div>

        <div className='bg-white rounded-lg shadow-md p-6'>
          <h3 className='text-xl font-semibold mb-4'>Best Practices</h3>
          <ul className='space-y-2 text-gray-600'>
            <li>• TypeScript strict mode</li>
            <li>• Path mapping for clean imports</li>
            <li>• Custom hooks for reusability</li>
            <li>• Proper folder structure</li>
            <li>• Pre-commit hooks</li>
            <li>• Responsive design</li>
            <li>• Error boundaries</li>
          </ul>
        </div>
      </div>

      <div className='bg-blue-50 rounded-lg p-6 mt-8'>
        <h3 className='text-xl font-semibold mb-4 text-blue-900'>
          Development Features
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold text-blue-800 mb-2'>Code Quality</h4>
            <ul className='text-blue-700 text-sm space-y-1'>
              <li>• ESLint with TypeScript rules</li>
              <li>• Prettier for consistent formatting</li>
              <li>• Husky pre-commit hooks</li>
              <li>• Lint-staged for staged files</li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold text-blue-800 mb-2'>
              Developer Experience
            </h4>
            <ul className='text-blue-700 text-sm space-y-1'>
              <li>• Hot module replacement</li>
              <li>• TypeScript path mapping</li>
              <li>• Custom utility functions</li>
              <li>• Reusable custom hooks</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
