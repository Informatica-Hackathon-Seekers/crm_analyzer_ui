"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Minimize2, Maximize2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";

type Message = {
  id: number;
  text: string;
  isUser: boolean;
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! How can I help you today?",
      isUser: false,
    },
  ]);

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    // Add user message
    const newUserMessage: Message = {
      id: messages.length + 1,
      text: input,
      isUser: true,
    };
    
    setMessages((prev) => [...prev, newUserMessage]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "I'm analyzing that information for you now.",
        "That's an interesting question about market trends.",
        "Let me check the latest stock data for you.",
        "I can help you understand that market pattern.",
        "Based on recent data, I'd recommend looking into that further.",
      ];
      
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      
      const newAiMessage: Message = {
        id: messages.length + 2,
        text: randomResponse,
        isUser: false,
      };
      
      setMessages((prev) => [...prev, newAiMessage]);
    }, 1000);
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={
              isMinimized
                ? { opacity: 1, y: 0, scale: 0.9, height: "auto" }
                : { opacity: 1, y: 0, scale: 1, height: "auto" }
            }
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="mb-4 w-80 rounded-lg border bg-card shadow-lg md:w-96"
          >
            <div className="flex items-center justify-between border-b p-3">
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5" />
                <h3 className="font-medium">Trendlytics Assistant</h3>
              </div>
              <div className="flex items-center space-x-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7"
                  onClick={toggleMinimize}
                >
                  {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7"
                  onClick={toggleChatbot}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <AnimatePresence>
              {!isMinimized && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ScrollArea className="h-80 p-4">
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <motion.div
                          key={message.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className={`flex ${
                            message.isUser ? "justify-end" : "justify-start"
                          }`}
                        >
                          <div
                            className={`max-w-[80%] rounded-lg px-3 py-2 ${
                              message.isUser
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted"
                            }`}
                          >
                            <p className="text-sm">{message.text}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>

                  <div className="border-t p-3">
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleSendMessage();
                      }}
                      className="flex space-x-2"
                    >
                      <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask me anything..."
                        className="flex-1"
                      />
                      <Button type="submit" size="icon" className="shrink-0">
                        <Send className="h-4 w-4" />
                      </Button>
                    </form>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleChatbot}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageSquare className="h-6 w-6" />
      </motion.button>
    </div>
  );
};

export default Chatbot;