// Script para limpar cache do Firebase e forçar nova inicialização
import { initializeApp, deleteApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjunWvcLsfzl5ZFrLVcZh7YGC22DyHm4E",
  authDomain: "bibliadivina.firebaseapp.com",
  projectId: "bibliadivina",
  storageBucket: "bibliadivina.appspot.com",
  messagingSenderId: "850542229344",
  appId: "1:850542229344:web:77fc34d559dd5b8b903e02",
  measurementId: "G-N77QDXV9ZJ"
};

console.log('🧹 Limpando cache do Firebase...');

// Função para limpar e reinicializar Firebase
async function clearAndReinitializeFirebase() {
  try {
    // Se já existe uma instância, deletar
    const existingApps = window.firebase?.apps || [];
    if (existingApps.length > 0) {
      console.log('🗑️ Deletando instâncias existentes do Firebase...');
      for (const app of existingApps) {
        await deleteApp(app);
      }
    }
    
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
      console.log('🗑️ Removido do localStorage:', key);
    });
    
    // Limpar sessionStorage
    sessionStorage.clear();
    console.log('🗑️ SessionStorage limpo');
    
    // Aguardar um pouco
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reinicializar Firebase
    console.log('🔄 Reinicializando Firebase...');
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    
    console.log('✅ Firebase reinicializado com sucesso');
    console.log('📋 Configuração:', {
      projectId: firebaseConfig.projectId,
      authDomain: firebaseConfig.authDomain
    });
    
    return { app, auth };
    
  } catch (error) {
    console.error('❌ Erro ao limpar/reinicializar Firebase:', error);
    throw error;
  }
}

// Executar limpeza
if (typeof window !== 'undefined') {
  clearAndReinitializeFirebase()
    .then(({ app, auth }) => {
      console.log('✅ Cache limpo e Firebase reinicializado');
      console.log('🔧 Pronto para testar autenticação');
    })
    .catch(error => {
      console.error('❌ Falha na limpeza:', error);
    });
} else {
  console.log('🔧 Script executado no servidor');
}

export { clearAndReinitializeFirebase }; 