# React Router Project

A modern React application built with TypeScript, React Router v6, and industry best practices.

## 🚀 Features

- **React 19** with TypeScript for type safety
- **React Router v6** for modern routing
- **Vite** for fast development and building
- **Tailwind CSS** for utility-first styling
- **ESLint** with TypeScript rules for code quality
- **Prettier** for consistent code formatting
- **Husky** for git hooks
- **Custom Hooks** for reusable logic
- **Path Mapping** for clean imports
- **Responsive Design** with mobile-first approach

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.tsx      # Main layout wrapper
│   ├── Header.tsx      # Application header
│   ├── Navigation.tsx  # Navigation component
│   └── Footer.tsx      # Application footer
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   ├── About.tsx       # About page
│   ├── Contact.tsx     # Contact page
│   ├── Profile.tsx     # User profile page
│   ├── Dashboard.tsx   # Dashboard page
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
│   ├── useLocalStorage.ts
│   ├── useDebounce.ts
│   ├── useAsync.ts
│   └── index.ts
├── utils/              # Utility functions
│   ├── index.ts        # General utilities
│   └── constants.ts    # Application constants
├── types/              # TypeScript type definitions
│   └── index.ts
├── assets/             # Static assets
├── App.tsx             # Main application component
└── main.tsx            # Application entry point
```

## 🛠️ Development Setup

### Prerequisites

- Node.js (v20.13.1 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd react-router-project
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

## 🎯 Key Features Demonstrated

### 1. React Router v6

- Modern routing with `BrowserRouter`
- Nested routes and route parameters
- Programmatic navigation
- Route protection patterns

### 2. TypeScript Best Practices

- Strict type checking
- Path mapping for clean imports
- Interface definitions
- Generic types and utility types

### 3. Custom Hooks

- `useLocalStorage` - Persistent state management
- `useDebounce` - Debounced values
- `useAsync` - Async operation handling

### 4. Code Quality

- ESLint with TypeScript rules
- Prettier for code formatting
- Husky pre-commit hooks
- Lint-staged for staged files

### 5. Modern Development

- Vite for fast builds
- Hot module replacement
- TypeScript path mapping
- Responsive design

## 🎨 Styling

The project uses Tailwind CSS for styling with:

- Utility-first approach
- Responsive design
- Custom component classes
- Consistent color scheme

## 🔧 Configuration Files

- `tsconfig.app.json` - TypeScript configuration
- `vite.config.ts` - Vite configuration with path mapping
- `.eslintrc.json` - ESLint configuration
- `.prettierrc` - Prettier configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `package.json` - Dependencies and scripts

## 📱 Pages

1. **Home** - Landing page with feature overview
2. **About** - Project information and technologies
3. **Contact** - Contact form with debounced input
4. **Profile** - User profile with localStorage persistence
5. **Dashboard** - Data dashboard with async loading
6. **404** - Not found page with navigation

## 🚀 Deployment

The project is configured for easy deployment:

1. Build the project:

```bash
npm run build
```

2. The `dist` folder contains the production build
3. Deploy to your preferred hosting service (Vercel, Netlify, etc.)

## 📚 Learning Resources

- [React Router v6 Documentation](https://reactrouter.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and formatting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ using React, TypeScript, and modern web development practices.
