# 🌐 Mudança de Domínio Firebase

## 🎯 **Objetivo**
Mudar de `amigobiblico1` para `amigobiblico` (sem o número)

## 📋 **Opções Disponíveis**

### **Opção 1: Renomear Projeto Atual**
**⚠️ RISCO**: Pode causar problemas de configuração

**Passos**:
1. Acesse: https://console.firebase.google.com/project/amigobiblico1/settings/general
2. Clique em "Editar" ao lado do nome
3. Mude para `amigobiblico`
4. Salve

### **Opção 2: Criar Novo Projeto (RECOMENDADO)**
**✅ SEGURO**: Configuração limpa e sem riscos

**Passos**:

#### 1. **Criar Novo Projeto**
1. Acesse: https://console.firebase.google.com/
2. Clique em "Adicionar projeto"
3. Nome: `amigobiblico`
4. Aceite os termos
5. Clique em "Criar projeto"

#### 2. **Configurar Firebase**
1. **Authentication**:
   - Vá em "Authentication" > "Sign-in method"
   - Habilite "Google" e "Anonymous"

2. **Firestore**:
   - Vá em "Firestore Database"
   - Clique em "Criar banco de dados"
   - Escolha "Modo de teste"

3. **Hosting**:
   - Vá em "Hosting"
   - Clique em "Começar"

#### 3. **Atualizar Configurações no Código**

**Novo firebaseConfig.ts**:
```typescript
const firebaseConfig = {
  apiKey: "NOVA_API_KEY",
  authDomain: "amigobiblico.firebaseapp.com",
  projectId: "amigobiblico",
  storageBucket: "amigobiblico.appspot.com",
  messagingSenderId: "NOVO_SENDER_ID",
  appId: "NOVO_APP_ID"
};
```

#### 4. **Deploy no Novo Projeto**
```bash
# Selecionar novo projeto
npx firebase use amigobiblico

# Deploy
npm run build
npx firebase deploy
```

## 🔄 **Processo Completo (Opção 2)**

### **Passo 1: Criar Projeto**
1. Acesse: https://console.firebase.google.com/
2. "Adicionar projeto" > "amigobiblico"
3. Configurar Authentication e Firestore

### **Passo 2: Obter Configurações**
1. Vá em "Configurações do projeto"
2. "Seus aplicativos" > "Adicionar app" > "Web"
3. Copie as configurações

### **Passo 3: Atualizar Código**
1. Substituir `firebaseConfig.ts`
2. Atualizar `.firebaserc`
3. Fazer build e deploy

### **Passo 4: Deploy**
```bash
npx firebase use amigobiblico
npm run build
npx firebase deploy
```

## 📊 **URLs Finais**

- **Web App**: https://amigobiblico.web.app
- **Console**: https://console.firebase.google.com/project/amigobiblico
- **Auth**: https://amigobiblico.firebaseapp.com

## ⚠️ **Considerações**

### **Opção 1 (Renomear)**
- ✅ Mantém dados existentes
- ❌ Pode causar problemas
- ❌ URLs antigas podem quebrar

### **Opção 2 (Novo Projeto)**
- ✅ Configuração limpa
- ✅ URLs limpas
- ✅ Sem riscos
- ❌ Perde dados existentes

## 🎯 **Recomendação**

**Use a Opção 2** (Novo Projeto) para ter uma configuração limpa e profissional.

---

**Status**: 🔄 Planejamento
**Próximo**: ✅ Criar novo projeto 