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
          webhookUrl: 'https://bizflowwithn8n.app.n8n.cloud/webhook/ffcf29b6-19e9-40fd-81a6-132910560043/chat'
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