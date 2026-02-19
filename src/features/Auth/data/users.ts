export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  role: 'admin' | 'customer';
}

// Usuarios de prueba en memoria
export const MOCK_USERS: User[] = [
  {
    id: '1',
    username: 'admin',
    email: 'admin@relatosdepapel.com',
    password: 'admin123',
    role: 'admin'
  },
  {
    id: '2',
    username: 'cliente',
    email: 'cliente@relatosdepapel.com',
    password: 'cliente123',
    role: 'customer'
  }
];

export const findUserByEmail = (email: string): User | undefined => {
  return MOCK_USERS.find(user => user.email === email);
};

export const findUserByUsername = (username: string): User | undefined => {
  return MOCK_USERS.find(user => user.username === username);
};

export const validateUserCredentials = (email: string, password: string): User | null => {
  const user = findUserByEmail(email);
  if (user && user.password === password) {
    return user;
  }
  return null;
};

// Funciones para manejar usuarios en localStorage
export const STORAGE_KEY = 'users_db';

export const getUsersFromStorage = (): User[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

export const saveUsersToStorage = (users: User[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  } catch (error) {
    console.error('Error saving users to localStorage:', error);
  }
};

export const addUserToStorage = (user: User): boolean => {
  const users = getUsersFromStorage();
  
  // Validar que el email no exista
  if (users.find(u => u.email === user.email)) {
    return false;
  }
  
  users.push(user);
  saveUsersToStorage(users);
  return true;
};

export const validateUserCredentialsWithStorage = (email: string, password: string): User | null => {
  // Primero buscar en usuarios mock
  const mockUser = validateUserCredentials(email, password);
  if (mockUser) {
    return mockUser;
  }
  
  // Luego buscar en localStorage
  const users = getUsersFromStorage();
  const user = users.find(u => u.email === email && u.password === password);
  return user || null;
};
