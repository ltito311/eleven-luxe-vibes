import { useEffect, useState } from 'react';

const ChatWidget = () => {
  const [showPing, setShowPing] = useState(true);

  useEffect(() => {
    // Load the n8n chat CSS
    const link = document.createElement('link');
    link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Load and initialize the n8n chat
    const loadChat = () => {
      const script = document.createElement('script');
      script.type = 'module';
      script.innerHTML = `
        import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
        createChat({
          webhookUrl: 'https://original311.app.n8n.cloud/webhook/2ced8158-125b-44d2-891b-17bd79dbe71d/chat'
        });
      `;
      document.head.appendChild(script);

      // Hide ping after chat loads
      setTimeout(() => {
        const chatButton = document.querySelector('[data-chat-button]') || document.querySelector('.n8n-chat-button');
        if (chatButton) {
          chatButton.addEventListener('click', () => setShowPing(false));
        }
      }, 2000);
    };

    loadChat();

    // Auto-hide ping after 30 seconds
    const pingTimeout = setTimeout(() => setShowPing(false), 30000);

    // Cleanup function
    return () => {
      if (link.parentNode) document.head.removeChild(link);
      clearTimeout(pingTimeout);
    };
  }, []);

  return (
    <>
      {showPing && (
        <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
          <div className="relative">
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;