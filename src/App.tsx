import React from 'react';
import { AppProvider } from './contexts/AppContext';
import { useAuth } from './hooks/useAuth';
import { FirebaseLogin } from './components/auth/FirebaseLogin';
import { ChatContainer } from './components/chat/ChatContainer';
import { JarvisScreen } from './components/JarvisScreen';
import { WelcomeScreen } from './components/WelcomeScreen';
import { useApp } from './contexts/AppContext';

const AppContent: React.FC = () => {
  const { user, loading, error } = useAuth();
  const { currentScreen, setCurrentScreen } = useApp();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Carregando...
          </h2>
          <p className="text-gray-600">
            Inicializando o Amigo Bíblico
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Erro de Conexão
          </h2>
          <p className="text-gray-600 mb-4">
            {error}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Tentar Novamente
          </button>
        </div>
      </div>
    );
  }

  if (!user) {
    return <FirebaseLogin />;
  }

  const navigationProps = {
    onNavigateToWelcome: () => setCurrentScreen('welcome'),
    onNavigateToChat: () => setCurrentScreen('chat'),
    onNavigateToJarvis: () => setCurrentScreen('jarvis')
  };

  switch (currentScreen) {
    case 'jarvis':
      return (
        <JarvisScreen
          {...navigationProps}
        />
      );
    
    case 'chat':
      return (
        <ChatContainer
          user={user}
          currentScreen={currentScreen}
          {...navigationProps}
        />
      );
    
    case 'welcome':
    default:
      return (
        <WelcomeScreen
          user={user}
          currentScreen={currentScreen}
          {...navigationProps}
        />
      );
  }
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;
