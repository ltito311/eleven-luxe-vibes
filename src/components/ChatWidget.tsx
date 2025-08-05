import { useState, useEffect } from 'react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Close chat when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const widget = document.getElementById('chat-widget');
      if (widget && !widget.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div id="chat-widget" className="fixed bottom-5 right-5 z-[10000] font-sans">
      {/* Chat Bubble */}
      {!isOpen && (
        <div
          id="chat-bubble"
          onClick={toggleChat}
          className="w-15 h-15 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center cursor-pointer shadow-[0_8px_25px_rgba(212,175,55,0.4)] border-2 border-black text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_30px_rgba(212,175,55,0.6)]"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
          </svg>
        </div>
      )}

      {/* Chat Container */}
      {isOpen && (
        <div
          id="chat-container"
          className="absolute bottom-20 right-0 w-[400px] h-[600px] bg-white rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] border border-primary overflow-hidden animate-in slide-in-from-bottom-5 duration-300 max-[480px]:w-[calc(100vw-40px)] max-[480px]:h-[calc(100vh-140px)] max-[480px]:right-5 max-[480px]:left-5"
        >
          <div
            id="chat-header"
            className="bg-gradient-to-r from-black to-gray-800 text-primary p-4 flex justify-between items-center border-b border-primary font-semibold"
          >
            <span>Chat with Eleven Restaurant</span>
            <button
              onClick={toggleChat}
              className="bg-transparent border-none text-primary text-2xl cursor-pointer p-0 w-7 h-7 flex items-center justify-center rounded-full transition-colors hover:bg-primary/10"
            >
              ×
            </button>
          </div>
          <iframe
            src="https://bizflowwithn8n.app.n8n.cloud/webhook/ffcf29b6-19e9-40fd-81a6-132910560043/chat"
            className="w-full h-[calc(100%-60px)] border-none bg-white"
            title="Chat with Eleven Restaurant"
            allow="microphone"
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
};

export default ChatWidget;