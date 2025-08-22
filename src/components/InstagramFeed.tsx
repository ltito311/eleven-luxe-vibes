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
    const initializeWidget = () => {
      try {
        // Check if Elfsight platform is available
        if (window.eapps) {
          setIsLoading(false);
          setHasError(false);
        } else {
          // Wait for platform to load
          setTimeout(initializeWidget, 100);
        }
      } catch (error) {
        console.error('Error initializing Instagram widget:', error);
        setHasError(true);
        setIsLoading(false);
      }
    };

    // Start initialization after a short delay
    setTimeout(initializeWidget, 500);

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
        className={`elfsight-app-e34192b5-821d-49c6-a926-ff653ffd2dca ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};

export default InstagramFeed;