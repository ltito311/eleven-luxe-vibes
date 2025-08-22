import { useEffect } from 'react';

const ChatWidget = () => {
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
    };

    loadChat();

    // Cleanup function to remove the CSS link
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return null;
};

export default ChatWidget;