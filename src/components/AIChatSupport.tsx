import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface AIChatSupportProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function AIChatSupport({ isOpen, onToggle }: AIChatSupportProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hi! I\'m CycloRooF AI Assistant. How can I help you with your motorcycle needs today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const predefinedResponses = {
    'bike recommendation': 'Based on your preferences, I\'d recommend checking out our featured bikes. Are you looking for a specific type like sport bikes, cruisers, or electric bikes?',
    'price': 'Our bikes range from ₹50,000 for entry-level models to ₹5,00,000 for premium motorcycles. What\'s your budget range?',
    'spare parts': 'We have a comprehensive spare parts section with engine components, silencers, brakes, and more. Which specific part are you looking for?',
    'emi': 'You can calculate EMI options using our built-in calculator. Most banks offer financing from 6 months to 5 years.',
    'warranty': 'All our bikes come with manufacturer warranty. Check our warranty support section for detailed information.',
    'default': 'I understand you\'re interested in that. Our team can provide more detailed information. You can also browse our catalog or check specific sections for more details.'
  };

  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('recommend') || message.includes('suggest') || message.includes('best')) {
      return predefinedResponses['bike recommendation'];
    } else if (message.includes('price') || message.includes('cost') || message.includes('₹')) {
      return predefinedResponses['price'];
    } else if (message.includes('spare') || message.includes('part') || message.includes('component')) {
      return predefinedResponses['spare parts'];
    } else if (message.includes('emi') || message.includes('loan') || message.includes('finance')) {
      return predefinedResponses['emi'];
    } else if (message.includes('warranty') || message.includes('guarantee') || message.includes('service')) {
      return predefinedResponses['warranty'];
    } else {
      return predefinedResponses['default'];
    }
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={onToggle}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ 
          backgroundColor: isOpen ? '#dc2626' : 'var(--primary)',
          rotate: isOpen ? 45 : 0 
        }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-40 w-80 h-96 bg-card border rounded-lg shadow-2xl overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-primary text-primary-foreground p-4 flex items-center gap-3">
              <Bot className="w-5 h-5" />
              <div>
                <h3 className="font-medium">CycloRooF AI Assistant</h3>
                <p className="text-xs opacity-90">Online</p>
              </div>
            </div>

            {/* Messages Area */}
            <ScrollArea className="flex-1 h-64 p-4">
              <div className="space-y-3">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.sender === 'bot' && (
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-3 h-3 text-primary-foreground" />
                      </div>
                    )}
                    <div
                      className={`max-w-[70%] p-2 rounded-lg text-sm ${
                        message.sender === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {message.text}
                    </div>
                    {message.sender === 'user' && (
                      <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-3 h-3 text-accent-foreground" />
                      </div>
                    )}
                  </motion.div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex gap-2 justify-start"
                  >
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <div className="bg-muted text-muted-foreground p-2 rounded-lg text-sm">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="border-t p-4">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  disabled={!inputValue.trim() || isTyping}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}