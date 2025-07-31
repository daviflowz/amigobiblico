import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { Button } from '../ui/Button';
import { User, LogOut, Settings, Home } from 'lucide-react';

interface HeaderProps {
  user: {
    email: string | null;
    displayName?: string | null;
    photoURL?: string | null;
  };
  onNavigateToWelcome: () => void;
  onNavigateToChat: () => void;
  onNavigateToJarvis: () => void;
  currentScreen: 'welcome' | 'chat' | 'jarvis';
}

export const Header: React.FC<HeaderProps> = ({
  user,
  onNavigateToWelcome,
  onNavigateToChat,
  onNavigateToJarvis,
  currentScreen
}) => {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('✅ Logout realizado com sucesso');
    } catch (error) {
      console.error('❌ Erro ao fazer logout:', error);
    }
  };

  const getUserDisplayName = () => {
    if (user.displayName) return user.displayName;
    if (user.email) return user.email.split('@')[0];
    return 'Usuário';
  };

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <h1 className="text-lg font-semibold text-gray-900">
              Amigo Bíblico
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-1">
            <Button
              onClick={onNavigateToWelcome}
              variant={currentScreen === 'welcome' ? 'primary' : 'ghost'}
              size="sm"
              icon={Home}
            >
              Início
            </Button>
            <Button
              onClick={onNavigateToChat}
              variant={currentScreen === 'chat' ? 'primary' : 'ghost'}
              size="sm"
            >
              Chat
            </Button>
            <Button
              onClick={onNavigateToJarvis}
              variant={currentScreen === 'jarvis' ? 'primary' : 'ghost'}
              size="sm"
            >
              Jarvis
            </Button>
          </nav>
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt="Avatar"
                className="w-8 h-8 rounded-full"
              />
            ) : (
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-gray-600" />
              </div>
            )}
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-gray-900">
                {getUserDisplayName()}
              </p>
              <p className="text-xs text-gray-500">
                {user.email}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="sm"
              icon={Settings}
              className="hidden sm:flex"
            >
              Configurações
            </Button>
            <Button
              onClick={handleSignOut}
              variant="ghost"
              size="sm"
              icon={LogOut}
            >
              <span className="hidden sm:inline">Sair</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};