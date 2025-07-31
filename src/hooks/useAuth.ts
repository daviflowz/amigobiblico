import { useState, useEffect } from 'react';
import { User } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('🔐 Inicializando autenticação Firebase...');
    
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log('👤 Estado de autenticação mudou:', user ? `Usuário logado: ${user.uid}` : 'Usuário não logado');
      
      setUser(user);
      setLoading(false);
      
      if (user) {
        try {
          console.log('🚀 Usuário autenticado:', user.uid);
          console.log('📧 Email do usuário:', user.email);
          console.log('🔑 Token de autenticação válido:', !!user.uid);
        } catch (error) {
          console.error('❌ Erro ao processar usuário:', error);
          setError('Erro ao processar autenticação');
        }
      } else {
        console.log('👤 Usuário não autenticado');
      }
    });
    
    return () => unsubscribe();
  }, []);

  return { user, loading, error };
};