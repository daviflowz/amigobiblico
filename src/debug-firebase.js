// Script de debug para verificar configuração do Firebase
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjunWvcLsfzl5ZFrLVcZh7YGC22DyHm4E",
  authDomain: "bibliadivina.firebaseapp.com",
  projectId: "bibliadivina",
  storageBucket: "bibliadivina.appspot.com",
  messagingSenderId: "850542229344",
  appId: "1:850542229344:web:77fc34d559dd5b8b903e02",
  measurementId: "G-N77QDXV9ZJ"
};

console.log('🔧 Testando configuração do Firebase...');
console.log('📋 Configuração:', {
  projectId: firebaseConfig.projectId,
  authDomain: firebaseConfig.authDomain,
  apiKey: firebaseConfig.apiKey ? 'Configurado' : 'Não configurado'
});

try {
  const app = initializeApp(firebaseConfig);
  console.log('✅ Firebase inicializado com sucesso');
  
  const auth = getAuth(app);
  console.log('✅ Auth configurado');
  
  // Testar login anônimo
  signInAnonymously(auth)
    .then((result) => {
      console.log('✅ Login anônimo bem-sucedido:', result.user.uid);
    })
    .catch((error) => {
      console.error('❌ Erro no login anônimo:', error);
      console.error('Código do erro:', error.code);
      console.error('Mensagem do erro:', error.message);
    });
    
} catch (error) {
  console.error('❌ Erro ao inicializar Firebase:', error);
} 