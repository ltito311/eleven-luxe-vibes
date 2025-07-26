import { Link } from 'react-router-dom';
import { Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div>
            <div className="text-3xl font-bold text-primary mb-4">
              ELEVEN
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Where sophistication meets authentic Jamaican flavors. Experience luxury dining 
              and craft cocktails in the heart of Savanna-la-Mar.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/elevenwess" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Quick Links</h3>
            <nav className="space-y-3">
              <Link 
                to="/" 
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                About
              </Link>
              <Link 
                to="/menu" 
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Menu
              </Link>
              <Link 
                to="/contact" 
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Contact
              </Link>
              <a 
                href="#" 
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Terms
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  1 Beckford Street, Savanna-la-Mar, Jamaica
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  +1 (876) XXX-XXXX
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  elevenreservations@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Instagram size={20} className="text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  @elevenwess
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            &copy; 2024 Eleven Restaurant & Lounge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;