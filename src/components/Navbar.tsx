
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-midnight" />
              ) : (
                <Menu className="h-6 w-6 text-midnight" />
              )}
            </button>
          </div>
          
          <div className="lg:w-1/3 text-left hidden lg:block">
            <nav className="flex space-x-8">
              <Link to="/collections/all" className="text-midnight hover:text-midnight/80 font-medium nav-item">
                Shop
              </Link>
              <Link to="/collections/new-arrivals" className="text-midnight hover:text-midnight/80 font-medium nav-item">
                New Arrivals
              </Link>
              <Link to="/about" className="text-midnight hover:text-midnight/80 font-medium nav-item">
                About
              </Link>
            </nav>
          </div>
          
          <div className="flex justify-center lg:w-1/3">
            <Link to="/" className="text-2xl md:text-3xl font-display font-medium text-midnight">
              petit elite
            </Link>
          </div>
          
          <div className="lg:w-1/3 flex justify-end space-x-4">
            <button aria-label="Search" className="text-midnight hover:text-midnight/80 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <Link to="/account" aria-label="Account" className="text-midnight hover:text-midnight/80 transition-colors">
              <User className="h-5 w-5" />
            </Link>
            <Link to="/cart" aria-label="Cart" className="text-midnight hover:text-midnight/80 transition-colors relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-rust text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/collections/all" 
              className="text-midnight hover:text-midnight/80 py-2 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/collections/new-arrivals" 
              className="text-midnight hover:text-midnight/80 py-2 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              New Arrivals
            </Link>
            <Link 
              to="/about" 
              className="text-midnight hover:text-midnight/80 py-2 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/account" 
              className="text-midnight hover:text-midnight/80 py-2 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Account
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
