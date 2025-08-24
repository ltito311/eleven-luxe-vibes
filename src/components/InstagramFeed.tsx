import { useEffect, useState } from 'react';
import { Instagram } from 'lucide-react';

// Extend Window interface for Elfsight
declare global {
  interface Window {
    eapps?: any;
  }
}

const InstagramFeed = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const loadScript = () => {
      // Load the Elfsight platform script
      const script = document.createElement('script');
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.head.appendChild(script);
      
      script.onload = () => {
        setIsLoading(false);
        setHasError(false);
      };
      
      script.onerror = () => {
        setHasError(true);
        setIsLoading(false);
      };
    };

    loadScript();

    // Fallback timeout
    const timeout = setTimeout(() => {
      if (isLoading) {
        setHasError(true);
        setIsLoading(false);
      }
    }, 10000);

    return () => clearTimeout(timeout);
  }, [isLoading]);

  if (hasError) {
    return (
      <div className="text-center py-12">
        <Instagram size={48} className="mx-auto mb-4 text-muted-foreground" />
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Follow us on Instagram
        </h3>
        <p className="text-muted-foreground mb-4">
          Visit our Instagram page to see our latest updates
        </p>
        <a 
          href="https://www.instagram.com/elevenwess?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 font-medium"
        >
          @elevenwess
        </a>
      </div>
    );
  }

  return (
    <div className="relative">
      {isLoading && (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-primary border-t-transparent mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading Instagram feed...</p>
        </div>
      )}
      <div 
        className={`elfsight-app-49f1a40a-e1f0-480e-98bb-6ddd6a5dec14 ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};

export default InstagramFeed;