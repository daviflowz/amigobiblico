import React, { useEffect } from 'react';
import { useChat } from '../../hooks/useChat';
import { Header } from '../layout/Header';
import { ChatHistory } from './ChatHistory';
import { ChatInput } from './ChatInput';
import { googleAIService } from '../../services/googleAI';
import { Message } from '../../types';

interface ChatContainerProps {
  user: {
    uid: string;
    email: string | null;
    displayName?: string | null;
    photoURL?: string | null;
  };
  onNavigateToWelcome: () => void;
  onNavigateToChat: () => void;
  onNavigateToJarvis: () => void;
  currentScreen: 'welcome' | 'chat' | 'jarvis';
}

export const ChatContainer: React.FC<ChatContainerProps> = ({
  user,
  onNavigateToWelcome,
  onNavigateToChat,
  onNavigateToJarvis,
  currentScreen
}) => {
  const {
    messages,
    isLoading,
    error,
    sendMessage,
    clearMessages
  } = useChat(user.uid);

  // Inicializar o serviço do Google AI quando o componente monta
  useEffect(() => {
    const initializeService = async () => {
      try {
        console.log('🚀 Inicializando serviço para usuário:', user.uid);
        await googleAIService.initialize(user.uid);
        console.log('✅ Serviço inicializado com sucesso');
      } catch (error) {
        console.error('❌ Erro ao inicializar serviço:', error);
      }
    };

    initializeService();
  }, [user.uid]);

  const handleSendMessage = async (content: string) => {
    await sendMessage(content);
  };

  const handleClearMessages = () => {
    if (window.confirm('Tem certeza que deseja limpar toda a conversa?')) {
      clearMessages();
    }
  };

  const handleExportMessages = () => {
    const conversation = messages.map((msg: Message) => 
      `${msg.role === 'user' ? 'Você' : 'Amigo Bíblico'}: ${msg.content}`
    ).join('\n\n');
    
    const blob = new Blob([conversation], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `conversa-biblica-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleShareMessages = async () => {
    if (navigator.share) {
      const conversation = messages.map((msg: Message) => 
        `${msg.role === 'user' ? 'Você' : 'Amigo Bíblico'}: ${msg.content}`
      ).join('\n\n');
      
      try {
        await navigator.share({
          title: 'Conversa Bíblica',
          text: conversation,
          url: window.location.href
        });
      } catch (error) {
        console.error('Erro ao compartilhar:', error);
      }
    } else {
      // Fallback para copiar para clipboard
      const conversation = messages.map((msg: Message) => 
        `${msg.role === 'user' ? 'Você' : 'Amigo Bíblico'}: ${msg.content}`
      ).join('\n\n');
      
      try {
        await navigator.clipboard.writeText(conversation);
        alert('Conversa copiada para a área de transferência!');
      } catch (error) {
        console.error('Erro ao copiar:', error);
      }
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <Header
        user={user}
        onNavigateToWelcome={onNavigateToWelcome}
        onNavigateToChat={onNavigateToChat}
        onNavigateToJarvis={onNavigateToJarvis}
        currentScreen={currentScreen}
      />
      
      <div className="flex-1 flex flex-col bg-white">
        <ChatHistory
          messages={messages}
          onClearMessages={handleClearMessages}
          onExportMessages={handleExportMessages}
          onShareMessages={handleShareMessages}
        />
        
        <ChatInput
          onSendMessage={handleSendMessage}
          disabled={isLoading}
          placeholder="Digite sua pergunta sobre a Bíblia..."
        />
      </div>
      
      {error && (
        <div className="fixed bottom-20 left-4 right-4 bg-red-50 border border-red-200 rounded-lg p-3">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}
    </div>
  );
};