import { useState, useCallback } from 'react';
import { Message, ChatState } from '../types';
import { googleAIService } from '../services/googleAI';

export const useChat = (userId: string) => {
  const [state, setState] = useState<ChatState>({
    messages: [],
    isLoading: false,
    error: null
  });

  const addMessage = useCallback((message: Message) => {
    setState(prev => ({
      ...prev,
      messages: [...prev.messages, message]
    }));
  }, []);

  const updateMessage = useCallback((messageId: string, updates: Partial<Message>) => {
    setState(prev => ({
      ...prev,
      messages: prev.messages.map(msg => 
        msg.id === messageId ? { ...msg, ...updates } : msg
      )
    }));
  }, []);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: content.trim(),
      role: 'user',
      timestamp: new Date()
    };

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: '',
      role: 'assistant',
      timestamp: new Date(),
      isLoading: true
    };

    addMessage(userMessage);
    addMessage(assistantMessage);

    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const response = await googleAIService.sendMessage(content);
      
      updateMessage(assistantMessage.id, {
        content: response,
        isLoading: false
      });
    } catch (error) {
      console.error('❌ Erro ao enviar mensagem:', error);
      updateMessage(assistantMessage.id, {
        content: 'Desculpe, ocorreu um erro ao processar sua mensagem. Tente novamente.',
        isLoading: false,
        error: error instanceof Error ? error.message : 'Erro desconhecido'
      });
      setState(prev => ({ ...prev, error: 'Erro ao processar mensagem' }));
    } finally {
      setState(prev => ({ ...prev, isLoading: false }));
    }
  }, [addMessage, updateMessage]);

  const clearMessages = useCallback(() => {
    setState({
      messages: [],
      isLoading: false,
      error: null
    });
  }, []);

  return {
    messages: state.messages,
    isLoading: state.isLoading,
    error: state.error,
    sendMessage,
    clearMessages,
    addMessage,
    updateMessage
  };
};