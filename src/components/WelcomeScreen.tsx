import React from 'react';
import { Header } from './layout/Header';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { MessageCircle, Brain, BookOpen, Users, Sparkles, Shield } from 'lucide-react';

interface WelcomeScreenProps {
  user: {
    email: string | null;
    displayName?: string | null;
    photoURL?: string | null;
  };
  onNavigateToChat: () => void;
  onNavigateToJarvis: () => void;
  onNavigateToWelcome: () => void;
  currentScreen: 'welcome' | 'chat' | 'jarvis';
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  user,
  onNavigateToChat,
  onNavigateToJarvis,
  onNavigateToWelcome,
  currentScreen
}) => {
  const features = [
    {
      icon: Brain,
      title: 'IA Inteligente',
      description: 'Respostas precisas baseadas em conhecimento bíblico sólido'
    },
    {
      icon: BookOpen,
      title: 'Estudos Bíblicos',
      description: 'Explore passagens, contextos históricos e interpretações'
    },
    {
      icon: Users,
      title: 'Comunidade',
      description: 'Conecte-se com outros estudantes da Bíblia'
    },
    {
      icon: Shield,
      title: 'Seguro e Privado',
      description: 'Suas conversas são protegidas e confidenciais'
    }
  ];

  const quickActions = [
    {
      title: 'Quem foi Jesus Cristo?',
      description: 'Descubra a vida e ensinamentos de Jesus'
    },
    {
      title: 'Os 10 Mandamentos',
      description: 'Entenda os princípios fundamentais da lei mosaica'
    },
    {
      title: 'Parábolas de Jesus',
      description: 'Explore as histórias e lições de Jesus'
    },
    {
      title: 'Apocalipse',
      description: 'Estude o livro do Apocalipse e suas profecias'
    }
  ];

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header
        user={user}
        onNavigateToWelcome={onNavigateToWelcome}
        onNavigateToChat={onNavigateToChat}
        onNavigateToJarvis={onNavigateToJarvis}
        currentScreen={currentScreen}
      />
      
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Bem-vindo ao Amigo Bíblico
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Seu assistente inteligente para estudos bíblicos profundos e significativos
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={onNavigateToChat}
                size="lg"
                icon={MessageCircle}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Começar Conversa
              </Button>
              <Button
                onClick={onNavigateToJarvis}
                variant="outline"
                size="lg"
                icon={Sparkles}
              >
                Modo Jarvis
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Tópicos Populares
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {quickActions.map((action, index) => (
                <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {action.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {action.description}
                  </p>
                  <Button
                    onClick={onNavigateToChat}
                    variant="ghost"
                    size="sm"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    Perguntar →
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                <div className="text-gray-600">Usuários Ativos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
                <div className="text-gray-600">Perguntas Respondidas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600">Disponível</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 