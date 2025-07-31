import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AppState } from '../types';

interface AppContextType extends AppState {
  setCurrentScreen: (screen: 'welcome' | 'chat' | 'jarvis') => void;
  setUser: (user: AppState['user']) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, setState] = useState<AppState>({
    user: null,
    currentScreen: 'welcome',
    isLoading: false,
    error: null
  });

  const setCurrentScreen = (screen: 'welcome' | 'chat' | 'jarvis') => {
    setState(prev => ({ ...prev, currentScreen: screen }));
  };

  const setUser = (user: AppState['user']) => {
    setState(prev => ({ ...prev, user }));
  };

  const setLoading = (loading: boolean) => {
    setState(prev => ({ ...prev, isLoading: loading }));
  };

  const setError = (error: string | null) => {
    setState(prev => ({ ...prev, error }));
  };

  const value: AppContextType = {
    ...state,
    setCurrentScreen,
    setUser,
    setLoading,
    setError
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};