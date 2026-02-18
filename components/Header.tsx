import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PageRoutes } from '../types';
import { IMAGES } from '../constants';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Check if we are on the home page
  const isHome = location.pathname === PageRoutes.HOME;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { label: 'Brand Story', path: PageRoutes.STORY },
    { label: 'Technology', path: PageRoutes.TECHNOLOGY },
    { label: 'Product', path: PageRoutes.PRODUCT },
    { label: 'FAQ', path: PageRoutes.FAQ },
    { label: 'Contact', path: PageRoutes.CONTACT },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        // If scrolled OR not on home page, use dark background
        scrolled || !isHome 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to={PageRoutes.HOME} className="flex-shrink-0 flex items-center">
             {/* Using CSS filter to ensure logo is visible if transparent png is dark text, 
                 but prompt logo is white text on transparent. 
                 Assuming dark header background for contrast. */}
            <img 
              src={IMAGES.LOGO} 
              alt="WAZRA Logo" 
              className="h-12 w-auto object-contain" // Adjusted height
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path 
                    ? 'text-white border-b-2 border-white' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-slate-200 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 absolute w-full top-full left-0 border-t border-slate-800">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};