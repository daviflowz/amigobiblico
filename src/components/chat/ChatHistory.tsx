import React, { useEffect, useRef } from 'react';
import { Message } from '../../types';
import { ChatMessage } from './ChatMessage';
import { Button } from '../ui/Button';
import { Trash2, Download, Share2 } from 'lucide-react';

interface ChatHistoryProps {
  messages: Message[];
  onClearMessages: () => void;
  onExportMessages?: () => void;
  onShareMessages?: () => void;
}

export const ChatHistory: React.FC<ChatHistoryProps> = ({
  messages,
  onClearMessages,
  onExportMessages,
  onShareMessages
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (messages.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Bem-vindo ao Amigo Bíblico!
          </h3>
          <p className="text-gray-500 mb-4">
            Comece uma conversa fazendo uma pergunta sobre a Bíblia.
          </p>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">
              💡 <strong>Exemplos de perguntas:</strong>
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• "Quem foi Jesus Cristo?"</li>
              <li>• "Explique o Sermão da Montanha"</li>
              <li>• "Qual é o significado da parábola do semeador?"</li>
              <li>• "Fale sobre os 10 mandamentos"</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      {/* Header com ações */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-semibold text-gray-900">
            Conversa
          </h2>
          <span className="text-sm text-gray-500">
            ({messages.length} mensagens)
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          {onExportMessages && (
            <Button
              onClick={onExportMessages}
              variant="ghost"
              size="sm"
              icon={Download}
            >
              Exportar
            </Button>
          )}
          
          {onShareMessages && (
            <Button
              onClick={onShareMessages}
              variant="ghost"
              size="sm"
              icon={Share2}
            >
              Compartilhar
            </Button>
          )}
          
          <Button
            onClick={onClearMessages}
            variant="ghost"
            size="sm"
            icon={Trash2}
            className="text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            Limpar
          </Button>
        </div>
      </div>

      {/* Lista de mensagens */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};