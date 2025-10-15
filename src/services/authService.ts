import type { User } from '@/types';

const STORAGE_KEY = 'epic_games_user';

// Mock user data
const mockUsers = [
  {
    id: '1',
    email: 'demo@epic.com',
    password: 'demo123',
    username: 'EpicGamer',
    displayName: 'Epic Gamer',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EpicGamer',
    library: ['1', '2', '3'],
    wishlist: ['4', '5'],
    cart: [],
    friends: [],
    joinedDate: '2024-01-15',
  },
];

export const authService = {
  async login(email: string, password: string): Promise<User> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));

    const user = mockUsers.find(
      u => u.email === email && u.password === password
    );

    if (!user) {
      throw new Error('Invalid email or password');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...userWithoutPassword } = user;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userWithoutPassword));
    return userWithoutPassword;
  },

  async signup(
    email: string,
    password: string,
    username: string
  ): Promise<User> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));

    // Check if user already exists
    if (mockUsers.some(u => u.email === email)) {
      throw new Error('Email already registered');
    }

    const newUser = {
      id: String(mockUsers.length + 1),
      email,
      password,
      username,
      displayName: username,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`,
      library: [],
      wishlist: [],
      cart: [],
      friends: [],
      joinedDate: new Date().toISOString(),
    };

    mockUsers.push(newUser);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...userWithoutPassword } = newUser;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userWithoutPassword));
    return userWithoutPassword;
  },

  logout(): void {
    localStorage.removeItem(STORAGE_KEY);
  },

  getCurrentUser(): User | null {
    const userJson = localStorage.getItem(STORAGE_KEY);
    if (!userJson) return null;

    try {
      return JSON.parse(userJson);
    } catch {
      return null;
    }
  },

  updateUser(user: User): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  },
};
