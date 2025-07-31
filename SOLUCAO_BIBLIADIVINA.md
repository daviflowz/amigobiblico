# 🔧 Solução: Problema de Login - bibliadivina

## ❌ **Problema Identificado**
- **Erro**: "Identity Toolkit API has not been used in project"
- **Projeto**: bibliadivina
- **Causa**: APIs do Firebase não habilitadas no novo projeto

## ✅ **Solução Passo a Passo**

### 1. **Habilitar APIs no Google Cloud Console**

**Link Direto**: https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com/overview?project=bibliadivina

**APIs Necessárias**:
- ✅ **Identity Toolkit API**
- ✅ **Firebase Authentication API**
- ✅ **Cloud Firestore API**

### 2. **Configurar Autenticação no Firebase**

**Acesse**: https://console.firebase.google.com/project/bibliadivina/authentication

**Passos**:
1. Vá em **"Sign-in method"**
2. **Habilitar Google**:
   - Clique em "Google"
   - Ative o toggle
   - Adicione domínio: `bibliadivina.web.app`
   - Salve

3. **Habilitar Anonymous**:
   - Clique em "Anonymous"
   - Ative o toggle
   - Salve

### 3. **Verificar Configurações**

**URLs Importantes**:
- **Console Firebase**: https://console.firebase.google.com/project/bibliadivina
- **Google Cloud Console**: https://console.cloud.google.com/apis/library?project=bibliadivina
- **App**: https://bibliadivina.web.app

### 4. **Testar Login**

Após habilitar as APIs:
1. Aguarde 2-3 minutos para propagação
2. Recarregue a página: https://bibliadivina.web.app
3. Teste login com Google
4. Teste login anônimo

## 🔍 **Verificação de Status**

### APIs Habilitadas ✅
- [ ] Identity Toolkit API
- [ ] Firebase Authentication API
- [ ] Cloud Firestore API

### Autenticação Configurada ✅
- [ ] Google Sign-In habilitado
- [ ] Anonymous Auth habilitado
- [ ] Domínios autorizados

## 🚨 **Se o Problema Persistir**

1. **Limpar Cache do Navegador**
2. **Aguardar 5-10 minutos** para propagação
3. **Verificar Console do Navegador** para novos erros
4. **Testar em Navegação Privada**

## 📞 **Suporte**

- **Firebase Docs**: https://firebase.google.com/docs/auth
- **Google Cloud Console**: https://console.cloud.google.com
- **Status Firebase**: https://status.firebase.google.com

---

**Status**: 🔧 Configuração em andamento
**Próximo**: ✅ Habilitar APIs e testar 