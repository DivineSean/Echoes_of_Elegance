
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cream pt-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <Link to="/" className="text-2xl font-display font-medium text-midnight mb-6 inline-block">
              petit elite
            </Link>
            <p className="text-midnight/70 mb-6">
              Timeless children's clothing that combines comfort, quality, and sophisticated style.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-midnight hover:text-midnight/80 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-midnight hover:text-midnight/80 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-midnight hover:text-midnight/80 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-midnight font-medium mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/collections/all" className="text-midnight/70 hover:text-midnight transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/collections/new-arrivals" className="text-midnight/70 hover:text-midnight transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/collections/best-sellers" className="text-midnight/70 hover:text-midnight transition-colors">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link to="/collections/girls" className="text-midnight/70 hover:text-midnight transition-colors">
                  Girls
                </Link>
              </li>
              <li>
                <Link to="/collections/boys" className="text-midnight/70 hover:text-midnight transition-colors">
                  Boys
                </Link>
              </li>
              <li>
                <Link to="/collections/babies" className="text-midnight/70 hover:text-midnight transition-colors">
                  Babies
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-midnight font-medium mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-midnight/70 hover:text-midnight transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-midnight/70 hover:text-midnight transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="text-midnight/70 hover:text-midnight transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-midnight/70 hover:text-midnight transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-midnight/70 hover:text-midnight transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-midnight/70 hover:text-midnight transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-midnight font-medium mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="text-midnight/70">
                1234 Fashion Avenue<br />
                New York, NY 10001
              </li>
              <li>
                <a href="mailto:hello@petitelite.com" className="text-midnight/70 hover:text-midnight transition-colors">
                  hello@petitelite.com
                </a>
              </li>
              <li>
                <a href="tel:+12345678901" className="text-midnight/70 hover:text-midnight transition-colors">
                  +1 (234) 567-8901
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-midnight/70 mb-4 md:mb-0">
            © {currentYear} petit elite. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/privacy" className="text-sm text-midnight/70 hover:text-midnight transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-midnight/70 hover:text-midnight transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-sm text-midnight/70 hover:text-midnight transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
