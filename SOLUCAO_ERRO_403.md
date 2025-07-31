# 🚨 SOLUÇÃO PARA ERRO 403 - Identity Toolkit API

## ❌ **Problema Atual**
- **Erro**: 403 Forbidden - "Identity Toolkit API has not been used in project 999174616236"
- **Causa**: O Firebase está tentando acessar um projeto antigo (999174616236) em vez do projeto atual (bibliadivina)

## ✅ **Solução Passo a Passo**

### **Passo 1: Verificar Projeto Atual**
1. Acesse: https://console.firebase.google.com/
2. **IMPORTANTE**: Certifique-se de que o projeto selecionado é `bibliadivina`
3. Se não for, clique no seletor de projeto e escolha `bibliadivina`

### **Passo 2: Limpar Cache do Navegador**
1. Abra o DevTools (F12)
2. Clique com botão direito no botão de refresh
3. Selecione "Empty Cache and Hard Reload"
4. Ou use Ctrl+Shift+R

### **Passo 3: Verificar Configuração do Firebase**
1. Acesse: https://console.firebase.google.com/project/bibliadivina/projectSettings
2. Role até "Seus aplicativos"
3. Verifique se o app está configurado corretamente

### **Passo 4: Habilitar APIs no Projeto Correto**
1. **Identity Toolkit API**: https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com/overview?project=bibliadivina
2. **Firebase Authentication API**: https://console.developers.google.com/apis/api/firebase.googleapis.com/overview?project=bibliadivina
3. **Cloud Firestore API**: https://console.developers.google.com/apis/api/firestore.googleapis.com/overview?project=bibliadivina

### **Passo 5: Verificar Autenticação**
1. Acesse: https://console.firebase.google.com/project/bibliadivina/authentication/providers
2. **Habilitar Google Sign-In**:
   - Clique em "Google"
   - Ative o toggle
   - Salve
3. **Habilitar Anonymous Auth**:
   - Clique em "Anônimo"
   - Ative o toggle
   - Salve

### **Passo 6: Verificar Domínios Autorizados**
1. Acesse: https://console.firebase.google.com/project/bibliadivina/authentication/settings
2. Em "Domínios autorizados", adicione:
   - `localhost`
   - `bibliadivina.web.app`
   - `bibliadivina.firebaseapp.com`

### **Passo 7: Aguardar Propagação**
- **Aguarde 5-10 minutos** após habilitar as APIs
- As mudanças podem levar tempo para propagar

### **Passo 8: Testar**
1. Acesse: http://localhost:3000
2. Abra o DevTools (F12)
3. Vá na aba Console
4. Tente fazer login
5. Verifique se não há mais erros 403

## 🔍 **Verificação de Status**

### **APIs Habilitadas** ✅
- [ ] Identity Toolkit API
- [ ] Firebase Authentication API  
- [ ] Cloud Firestore API

### **Projeto Correto** ✅
- [ ] Projeto selecionado: `bibliadivina`
- [ ] Não `999174616236` ou outros

### **Autenticação Configurada** ✅
- [ ] Google Sign-In habilitado
- [ ] Anonymous Auth habilitado
- [ ] Domínios autorizados

## 🚨 **Se o Problema Persistir**

### **Opção 1: Verificar Console do Navegador**
1. Abra DevTools (F12)
2. Vá na aba Console
3. Procure por erros relacionados ao Firebase
4. Copie os erros exatos

### **Opção 2: Verificar Network Tab**
1. Abra DevTools (F12)
2. Vá na aba Network
3. Tente fazer login
4. Procure por requisições com erro 403
5. Verifique qual URL está sendo chamada

### **Opção 3: Reconfigurar Firebase**
1. Vá em: https://console.firebase.google.com/project/bibliadivina/projectSettings
2. Role até "Seus aplicativos"
3. Clique em "Adicionar app" se necessário
4. Copie a nova configuração

## 📞 **Links Importantes**

- **Firebase Console**: https://console.firebase.google.com/project/bibliadivina
- **Google Cloud Console**: https://console.cloud.google.com/apis/library?project=bibliadivina
- **App Local**: http://localhost:3000
- **App Produção**: https://bibliadivina.web.app

---

**Status**: 🔧 Resolvendo erro 403
**Próximo**: ✅ Testar após configuração 