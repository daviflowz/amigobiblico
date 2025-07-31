export interface User {
  uid: string;
  email: string | null;
  displayName?: string | null;
  photoURL?: string | null;
}

export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
  isLoading?: boolean;
  error?: string;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}

export interface NavigationProps {
  onNavigateToChat: () => void;
  onNavigateToJarvis: () => void;
  onNavigateToWelcome: () => void;
}

export interface ScreenProps extends NavigationProps {
  user: User;
}

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

export interface GoogleAIConfig {
  apiKey: string;
  model: string;
}

export interface SearchResult {
  title: string;
  link: string;
  snippet: string;
}

export interface WebSearchConfig {
  apiKey: string;
  searchEngineId: string;
}

export interface AppState {
  user: User | null;
  currentScreen: 'welcome' | 'chat' | 'jarvis';
  isLoading: boolean;
  error: string | null;
}