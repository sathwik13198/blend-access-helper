import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageCircle, Send, X } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

type Language = 'en' | 'es';

const translations = {
  en: {
    aiAssistant: 'AI Assistant',
    askQuestion: 'Ask a question...',
    send: 'Send',
    openChat: 'Open AI chat',
    closeChat: 'Close AI chat',
  },
  es: {
    aiAssistant: 'Asistente IA',
    askQuestion: 'Haz una pregunta...',
    send: 'Enviar',
    openChat: 'Abrir chat IA',
    closeChat: 'Cerrar chat IA',
  }
};

interface AiChatbotProps {
  language: Language;
}

const AiChatbot: React.FC<AiChatbotProps> = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleQuestion = async () => {
    if (!question.trim()) return;
    
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('ai-chat', {
        body: { message: question }
      });

      if (error) {
        throw new Error(error.message);
      }

      setResponse(data.response);
    } catch (error) {
      console.error('AI Chat Error:', error);
      setResponse('Sorry, I encountered an error. Please try again later.');
    } finally {
      setIsLoading(false);
      setQuestion('');
    }
  };

  const t = translations[language];

  return (
    <div className="fixed bottom-6 right-24 z-40">
      {/* Chat Panel */}
      {isOpen && (
        <Card className="absolute bottom-16 right-0 w-80 bg-background border-border shadow-lg animate-slide-up">
          <div className="p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold text-foreground">
                  {t.aiAssistant}
                </h2>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0"
                aria-label={t.closeChat}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Chat Interface */}
            <div className="space-y-3">
              <div className="flex gap-2">
                <Input
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder={t.askQuestion}
                  className="flex-1"
                  onKeyDown={(e) => e.key === 'Enter' && handleQuestion()}
                />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleQuestion}
                  disabled={isLoading || !question.trim()}
                  className="px-3"
                  aria-label={t.send}
                >
                  {isLoading ? (
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </div>
              
              {response && (
                <div className="p-3 bg-muted rounded-md text-sm text-muted-foreground max-h-40 overflow-y-auto">
                  {response}
                </div>
              )}
            </div>
          </div>
        </Card>
      )}

      {/* Toggle Button */}
      <Button
        className="h-12 w-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? t.closeChat : t.openChat}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default AiChatbot;