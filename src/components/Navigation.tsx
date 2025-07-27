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
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleReservation = () => {
    window.open('https://form.typeform.com/to/B36XKi0i', '_self');
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
              viewBox="0 0 350 100" 
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Eleven Restaurant Logo"
            >
              <path id="bar-path-1" className="bar-path" d="M 5 20 L 65 20" />
              <path id="bar-path-2" className="bar-path" d="M 5 40 L 85 40" />
              <path id="bar-path-3" className="bar-path" d="M 5 60 L 105 60" />
              <text className="main-text" x="135" y="60">ELEVEN</text>
              <text className="subtitle" x="138" y="78">RESTAURANT AND LOUNGE</text>
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
              Reserve
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
                className="w-full"
              >
                Reserve
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;