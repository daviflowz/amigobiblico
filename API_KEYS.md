# 🔑 Configuração de APIs para Amigo Bíblico

## Firebase Configuration

### Projeto: bibliadivina
- **Project ID**: bibliadivina
- **Auth Domain**: bibliadivina.firebaseapp.com
- **Storage Bucket**: bibliadivina.appspot.com
- **Messaging Sender ID**: 850542229344
- **App ID**: 1:850542229344:web:77fc34d559dd5b8b903e02

## APIs Necessárias

### 1. **Google AI (Generative AI)**
- **URL**: https://ai.google.dev/
- **Chave**: `AIzaSyD13DkeUGToNyyGUHALPJ1BQRFMpca_bm8` (configurada)
- **Uso**: Chat inteligente e respostas bíblicas
- **Limite**: Configurado no serviço

### 2. **Google Custom Search** (Pesquisa web)
- **URL**: https://developers.google.com/custom-search
- **Chave**: `AIzaSyD13DkeUGToNyyGUHALPJ1BQRFMpca_bm8` (configurada)
- **Uso**: Pesquisa web em tempo real
- **Limite**: 100 requests/dia (gratuito)

### 3. **Firebase Authentication**
- **Projeto**: bibliadivina
- **Métodos**: Google, Anônimo
- **Configuração**: Automática

### 4. **Firestore Database**
- **Projeto**: bibliadivina
- **Regras**: Configuradas para usuários autenticados
- **Índices**: Otimizados para consultas

## Como Configurar

1. **Firebase CLI**: Instalar e fazer login
2. **Selecionar projeto**: `firebase use bibliadivina`
3. **Deploy**: `firebase deploy`
4. **Testar**: Verificar autenticação e chat

## Funcionalidades Principais

### 🔐 Autenticação
- Login com Google
- Login anônimo
- Persistência de sessão

### 💬 Chat Inteligente
- Integração com Google AI
- Histórico de conversas
- Cache de respostas

### 📚 Estudos Bíblicos
- Perguntas sobre a Bíblia
- Contexto histórico
- Interpretações

### 🔍 Pesquisa Web
- Busca de informações
- Fontes confiáveis
- Resultados relevantes

## Status Atual

- ✅ **Firebase Auth**: Configurado
- ✅ **Firestore**: Configurado
- ✅ **Google AI**: Configurado
- ✅ **Google Search**: Configurado
- ✅ **Hosting**: Configurado

## Deploy

```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Selecionar projeto
firebase use bibliadivina

# Deploy
firebase deploy
```

## URLs do Projeto

- **Console Firebase**: https://console.firebase.google.com/project/bibliadivina
- **Hosting**: https://bibliadivina.web.app
- **Auth**: https://bibliadivina.firebaseapp.com

## Próximos Passos

1. ✅ **Configurar Firebase**
2. ✅ **Atualizar configurações**
3. 🔄 **Fazer deploy**
4. 🧪 **Testar funcionalidades**
5. 🚀 **Lançar produção** 