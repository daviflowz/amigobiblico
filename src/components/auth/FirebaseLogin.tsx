import React, { useState } from 'react';
import { signInWithPopup, GoogleAuthProvider, signInAnonymously } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { MessageCircle, Shield, Sparkles, Users, RefreshCw } from 'lucide-react';

export const FirebaseLogin: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Função para limpar cache do Firebase
  const clearFirebaseCache = () => {
    console.log('🧹 Limpando cache do Firebase...');
    
    // Limpar localStorage relacionado ao Firebase
    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && (key.includes('firebase') || key.includes('auth') || key.includes('bibliadivina'))) {
        keysToRemove.push(key);
      }
    }
    
    keysToRemove.forEach(key => {
      localStorage.removeItem(key);
      console.log('🗑️ Removido:', key);
    });
    
    // Limpar sessionStorage
    sessionStorage.clear();
    console.log('✅ Cache limpo');
    
    // Recarregar a página
    window.location.reload();
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      console.log('✅ Login com Google realizado com sucesso');
    } catch (error: any) {
      console.error('❌ Erro no login com Google:', error);
      
      // Se for erro 403, sugerir limpeza de cache
      if (error.code === 'auth/internal-error' || error.message.includes('403')) {
        setError('Erro de configuração. Tente limpar o cache e tentar novamente.');
      } else {
        setError('Erro ao fazer login com Google. Tente novamente.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleAnonymousSignIn = async () => {
    setLoading(true);
    setError(null);
    
    try {
      await signInAnonymously(auth);
      console.log('✅ Login anônimo realizado com sucesso');
    } catch (error: any) {
      console.error('❌ Erro no login anônimo:', error);
      
      // Se for erro 403, sugerir limpeza de cache
      if (error.code === 'auth/internal-error' || error.message.includes('403')) {
        setError('Erro de configuração. Tente limpar o cache e tentar novamente.');
      } else {
        setError('Erro ao fazer login anônimo. Tente novamente.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="text-center">
          <div className="mb-8">
            <div className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Amigo Bíblico
            </h1>
            <p className="text-gray-600">
              Seu assistente inteligente para estudos bíblicos
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span>IA Inteligente</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
              <Shield className="w-4 h-4 text-green-500" />
              <span>Seguro e Privado</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
              <Users className="w-4 h-4 text-purple-500" />
              <span>Comunidade Ativa</span>
            </div>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">{error}</p>
              {error.includes('configuração') && (
                <button
                  onClick={clearFirebaseCache}
                  className="mt-2 text-xs text-blue-600 hover:underline flex items-center justify-center space-x-1"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Limpar Cache</span>
                </button>
              )}
            </div>
          )}

          <div className="space-y-3">
            <Button
              onClick={handleGoogleSignIn}
              disabled={loading}
              loading={loading}
              className="w-full"
              icon={undefined}
            >
              Continuar com Google
            </Button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">ou</span>
              </div>
            </div>

            <Button
              onClick={handleAnonymousSignIn}
              disabled={loading}
              loading={loading}
              variant="outline"
              className="w-full"
            >
              Continuar como Visitante
            </Button>
          </div>

          <div className="mt-6 text-xs text-gray-500">
            <p>
              Ao continuar, você concorda com nossos{' '}
              <button 
                type="button"
                className="text-blue-600 hover:underline"
                onClick={() => alert('Termos de Serviço - Em desenvolvimento')}
              >
                Termos de Serviço
              </button>{' '}
              e{' '}
              <button 
                type="button"
                className="text-blue-600 hover:underline"
                onClick={() => alert('Política de Privacidade - Em desenvolvimento')}
              >
                Política de Privacidade
              </button>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};