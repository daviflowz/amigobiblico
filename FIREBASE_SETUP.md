# 🔥 Configuração Firebase - Amigo Bíblico

## 📋 Resumo da Migração

O projeto foi migrado do `jarvix-b7e7c` para `amigobiblico1` com todas as configurações atualizadas.

## 🔧 Configurações Atualizadas

### Firebase Config
```typescript
const firebaseConfig = {
  apiKey: "AIzaSyDjunWvcLsfzl5ZFrLVcZh7YGC22DyHm4E",
  authDomain: "amigobiblico1.firebaseapp.com",
  projectId: "amigobiblico1",
  storageBucket: "amigobiblico1.appspot.com",
  messagingSenderId: "850542229344",
  appId: "1:850542229344:web:77fc34d559dd5b8b903e02",
  measurementId: "G-N77QDXV9ZJ"
};
```

## 🚀 Passos para Deploy

### 1. Instalar Firebase CLI
```bash
npm install -g firebase-tools
```

### 2. Fazer Login
```bash
firebase login
```

### 3. Selecionar Projeto
```bash
firebase use amigobiblico1
```

### 4. Deploy das Configurações
```bash
# Deploy das regras do Firestore
firebase deploy --only firestore:rules

# Deploy dos índices
firebase deploy --only firestore:indexes

# Deploy do hosting
firebase deploy --only hosting
```

## 📊 Estrutura do Projeto

### Firestore Collections
- `messages` - Histórico de mensagens
- `contextEntities` - Entidades de contexto
- `userStats` - Estatísticas de usuário
- `cache` - Cache de respostas
- `usage` - Uso de tokens

### Regras de Segurança
```javascript
// Usuários autenticados podem ler/escrever
allow read, write: if request.auth != null;

// Usuários só podem acessar seus próprios dados
allow read, write: if request.auth.uid == userId;
```

## 🔐 Autenticação

### Métodos Habilitados
- ✅ **Google Sign-In**
- ✅ **Anonymous Auth**
- ✅ **Email/Password** (se necessário)

### Configuração no Console
1. Acesse: https://console.firebase.google.com/project/amigobiblico1
2. Vá em **Authentication** > **Sign-in method**
3. Habilite **Google** e **Anonymous**

## 📱 Hosting

### URL de Produção
- **Web App**: https://amigobiblico1.web.app
- **Custom Domain**: Configurar se necessário

### Configuração
```json
{
  "hosting": {
    "public": "build",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [{"source": "**", "destination": "/index.html"}]
  }
}
```

## 🧪 Testando

### 1. Autenticação
```javascript
// Teste de login
firebase.auth().signInWithPopup(provider);
```

### 2. Firestore
```javascript
// Teste de escrita
db.collection('test').add({timestamp: new Date()});
```

### 3. Hosting
```bash
# Teste local
firebase serve
```

## 📈 Monitoramento

### Firebase Console
- **Analytics**: https://console.firebase.google.com/project/amigobiblico1/analytics
- **Performance**: https://console.firebase.google.com/project/amigobiblico1/performance
- **Crashlytics**: https://console.firebase.google.com/project/amigobiblico1/crashlytics

### Logs
```bash
# Ver logs em tempo real
firebase functions:log
```

## 🔄 Scripts Automatizados

### Deploy Completo
```bash
./deploy-firebase-config.sh
```

### Build e Deploy
```bash
npm run build && firebase deploy
```

## 🎯 Próximos Passos

1. ✅ **Configuração**: Firebase atualizado
2. 🔄 **Deploy**: Fazer deploy das configurações
3. 🧪 **Teste**: Verificar autenticação e chat
4. 📊 **Monitoramento**: Configurar analytics
5. 🚀 **Produção**: Lançar oficialmente

## 📞 Suporte

- **Firebase Docs**: https://firebase.google.com/docs
- **Console**: https://console.firebase.google.com/project/amigobiblico1
- **Status**: https://status.firebase.google.com

---

**Status**: ✅ Configuração concluída
**Próximo**: 🔄 Deploy das configurações 