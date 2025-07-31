import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Send, Paperclip, Smile } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  onSendMessage,
  disabled = false,
  placeholder = "Digite sua mensagem..."
}) => {
  const [message, setMessage] = useState('');
  const [isComposing, setIsComposing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSend = () => {
    if (!message.trim() || disabled) return;
    
    onSendMessage(message);
    setMessage('');
    
    // Foca no input após enviar
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey && !isComposing) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleCompositionStart = () => {
    setIsComposing(true);
  };

  const handleCompositionEnd = () => {
    setIsComposing(false);
  };

  // Auto-focus no input quando o componente monta
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="border-t border-gray-200 bg-white p-4">
      <div className="flex items-end space-x-3">
        <div className="flex-1">
          <Input
            ref={inputRef}
            value={message}
            onChange={setMessage}
            placeholder={placeholder}
            disabled={disabled}
            onKeyPress={handleKeyPress}
            onCompositionStart={handleCompositionStart}
            onCompositionEnd={handleCompositionEnd}
            className="min-h-[44px]"
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            disabled={disabled}
            icon={Paperclip}
            className="text-gray-500 hover:text-gray-700"
          >
            Anexar
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            disabled={disabled}
            icon={Smile}
            className="text-gray-500 hover:text-gray-700"
          >
            Emoji
          </Button>
          
          <Button
            onClick={handleSend}
            disabled={disabled || !message.trim()}
            icon={Send}
            size="sm"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Enviar
          </Button>
        </div>
      </div>
      
      <div className="mt-2 text-xs text-gray-500">
        <p>Pressione Enter para enviar, Shift+Enter para nova linha</p>
      </div>
    </div>
  );
};