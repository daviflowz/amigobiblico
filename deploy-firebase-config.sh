#!/bin/bash

echo "🚀 Deployando configurações do Firebase para bibliadivina..."

# Fazer login no Firebase (se necessário)
firebase login

# Selecionar o projeto
firebase use bibliadivina

# Deploy das regras do Firestore
echo "📝 Deployando regras do Firestore..."
firebase deploy --only firestore:rules

# Deploy dos índices do Firestore
echo "🔍 Deployando índices do Firestore..."
firebase deploy --only firestore:indexes

# Deploy do hosting (se necessário)
echo "🌐 Deployando hosting..."
firebase deploy --only hosting

echo "✅ Deploy concluído com sucesso!"
echo "🔗 Projeto: https://console.firebase.google.com/project/bibliadivina" 