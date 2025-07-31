import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";

// CONFIGURAÇÃO NOVA - PROJETO RECÉM-CRIADO
const firebaseConfig = {
  apiKey: "AIzaSyCfDwR3uEEGtcJ9z3q7luUKT5FB3EHOTVM",
  authDomain: "amigo-biblico-novo.firebaseapp.com",
  projectId: "amigo-biblico-novo",
  storageBucket: "amigo-biblico-novo.firebasestorage.app",
  messagingSenderId: "61089841951",
  appId: "1:61089841951:web:15a809b946e467fc3fe62a"
};

console.log('🎉 CONFIGURAÇÃO NOVA CARREGADA!');
console.log('📋 Project ID:', firebaseConfig.projectId);
console.log('📋 Auth Domain:', firebaseConfig.authDomain);

let app: FirebaseApp;
let auth: Auth;
let db: Firestore;

try {
  // Inicializar com configuração NOVA
  app = initializeApp(firebaseConfig);
  console.log('✅ Firebase inicializado com sucesso');
  
  auth = getAuth(app);
  db = getFirestore(app);
  
  console.log('✅ Auth e Firestore configurados');
  console.log('🎯 PROJETO NOVO CONFIRMADO:', firebaseConfig.projectId);
  
} catch (error) {
  console.error('❌ ERRO:', error);
  throw error;
}

export { auth, db };

console.log('🎯 FIREBASE CONFIGURADO PARA PROJETO NOVO:', firebaseConfig.projectId); 