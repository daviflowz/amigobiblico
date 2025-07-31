// Script para verificar e corrigir configuração do Firebase
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjunWvcLsfzl5ZFrLVcZh7YGC22DyHm4E",
  authDomain: "bibliadivina.firebaseapp.com",
  projectId: "bibliadivina",
  storageBucket: "bibliadivina.appspot.com",
  messagingSenderId: "850542229344",
  appId: "1:850542229344:web:77fc34d559dd5b8b903e02",
  measurementId: "G-N77QDXV9ZJ"
};

console.log('🔧 Verificando configuração do Firebase...');
console.log('📋 Configuração atual:', {
  projectId: firebaseConfig.projectId,
  authDomain: firebaseConfig.authDomain,
  messagingSenderId: firebaseConfig.messagingSenderId,
  appId: firebaseConfig.appId
});

// Verificar se a configuração está correta
if (firebaseConfig.projectId !== 'bibliadivina') {
  console.error('❌ ERRO: Project ID incorreto!');
  console.error('Esperado: bibliadivina');
  console.error('Atual:', firebaseConfig.projectId);
  process.exit(1);
}

if (firebaseConfig.authDomain !== 'bibliadivina.firebaseapp.com') {
  console.error('❌ ERRO: Auth Domain incorreto!');
  console.error('Esperado: bibliadivina.firebaseapp.com');
  console.error('Atual:', firebaseConfig.authDomain);
  process.exit(1);
}

console.log('✅ Configuração do projeto está correta');

try {
  const app = initializeApp(firebaseConfig);
  console.log('✅ Firebase inicializado com sucesso');
  
  const auth = getAuth(app);
  console.log('✅ Auth configurado');
  
  // Verificar estado de autenticação
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('✅ Usuário já autenticado:', user.uid);
    } else {
      console.log('👤 Nenhum usuário autenticado');
    }
  });
  
  // Testar login anônimo
  console.log('🧪 Testando login anônimo...');
  signInAnonymously(auth)
    .then((result) => {
      console.log('✅ Login anônimo bem-sucedido:', result.user.uid);
      console.log('✅ Projeto configurado corretamente!');
    })
    .catch((error) => {
      console.error('❌ Erro no login anônimo:', error);
      console.error('Código do erro:', error.code);
      console.error('Mensagem do erro:', error.message);
      
      if (error.code === 'auth/operation-not-allowed') {
        console.error('💡 Solução: Habilitar autenticação anônima no Firebase Console');
        console.error('Link: https://console.firebase.google.com/project/bibliadivina/authentication/providers');
      }
      
      if (error.code === 'auth/network-request-failed') {
        console.error('💡 Solução: Verificar conexão com internet');
      }
      
      if (error.code === 'auth/internal-error') {
        console.error('💡 Solução: Verificar configuração do projeto no Firebase Console');
      }
    });
    
} catch (error) {
  console.error('❌ Erro ao inicializar Firebase:', error);
} 