export function Footer() {
  return (
    <footer className='bg-gray-800 text-white py-8'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div>
            <h3 className='text-lg font-semibold mb-4'>React Router Project</h3>
            <p className='text-gray-300'>
              A modern React application built with TypeScript, React Router v6,
              and best practices.
            </p>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Technologies</h3>
            <ul className='text-gray-300 space-y-2'>
              <li>React 19</li>
              <li>TypeScript</li>
              <li>React Router v6</li>
              <li>Vite</li>
              <li>ESLint + Prettier</li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Features</h3>
            <ul className='text-gray-300 space-y-2'>
              <li>TypeScript Support</li>
              <li>Code Quality Tools</li>
              <li>Path Mapping</li>
              <li>Custom Hooks</li>
              <li>Responsive Design</li>
            </ul>
          </div>
        </div>
        <div className='border-t border-gray-700 mt-8 pt-4 text-center text-gray-400'>
          <p>
            &copy; 2024 React Router Project. Built with ❤️ and best practices.
          </p>
        </div>
      </div>
    </footer>
  );
}
