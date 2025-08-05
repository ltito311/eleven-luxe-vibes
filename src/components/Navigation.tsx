import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', path: '/menu' },
    { name: 'Contact', path: '/contact' },
    { name: 'About', path: '/about' },
  ];

  const handleReservation = () => {
    window.open('https://form.typeform.com/to/B36XKi0i', '_self');
  };

  const handleCall = () => {
    window.open('tel:+18762239926', '_self');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-sm shadow-luxury' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="logo-container">
            <svg 
              className="logo-svg h-8 md:h-10 w-auto" 
              viewBox="0 0 800 200" 
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Eleven Restaurant Logo"
            >
              {/* Left side horizontal lines */}
              <rect x="50" y="60" width="80" height="12" rx="6" fill="white"/>
              <rect x="50" y="85" width="60" height="12" rx="6" fill="white"/>
              <rect x="50" y="110" width="100" height="12" rx="6" fill="white"/>
              
              {/* ELEVEN text */}
              <g fill="white" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="72">
                <text x="180" y="115">ELEVEN</text>
              </g>
              
              {/* RESTAURANT AND LOUNGE subtitle */}
              <g fill="white" fontFamily="Arial, sans-serif" fontWeight="normal" fontSize="16" letterSpacing="2">
                <text x="180" y="140">RESTAURANT AND LOUNGE</text>
              </g>
            </svg>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-foreground hover:text-primary transition-colors duration-300 font-medium ${
                  location.pathname === link.path ? 'text-primary' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              variant="reserve" 
              size="lg"
              onClick={handleReservation}
              className="ml-4"
            >
              Book Now
            </Button>
            <Button 
              variant="luxury" 
              size="lg"
              onClick={handleCall}
              className="ml-2"
            >
              Call Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-foreground hover:text-primary transition-colors duration-300 font-medium ${
                    location.pathname === link.path ? 'text-primary' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button 
                variant="reserve" 
                size="lg"
                onClick={handleReservation}
                className="w-full mb-2"
              >
                Book Now
              </Button>
              <Button 
                variant="luxury" 
                size="lg"
                onClick={handleCall}
                className="w-full"
              >
                Call Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;