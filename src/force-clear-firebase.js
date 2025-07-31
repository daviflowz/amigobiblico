// Script para FORÇAR limpeza completa do Firebase
console.log('🚨 FORÇANDO LIMPEZA COMPLETA DO FIREBASE...');

// 1. Limpar localStorage completamente
localStorage.clear();
console.log('✅ localStorage limpo');

// 2. Limpar sessionStorage
sessionStorage.clear();
console.log('✅ sessionStorage limpo');

// 3. Limpar todos os cookies
document.cookie.split(";").forEach(function(c) { 
  document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); 
});
console.log('✅ cookies limpos');

// 4. Limpar cache do navegador
if ('caches' in window) {
  caches.keys().then(function(names) {
    for (let name of names) {
      caches.delete(name);
      console.log('🗑️ cache deletado:', name);
    }
  });
}

// 5. Forçar recarregamento da página
console.log('🔄 RECARREGANDO PÁGINA...');
setTimeout(() => {
  window.location.reload(true);
}, 1000);

export default 'Firebase cache limpo!'; 