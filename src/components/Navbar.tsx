import { useState } from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import SearchModal from './SearchModal';

interface NavbarProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export default function Navbar({ cartItemsCount, onCartClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/collections', label: 'Collections' },
    { path: '/new-arrivals', label: 'New Arrivals' },
    { path: '/bestsellers', label: 'Bestsellers' },
    { path: '/about', label: 'About' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 -m-2 lg:hidden"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
              <Link to="/" className="ml-4 lg:ml-0">
                <h1 className="text-2xl font-serif">Essence</h1>
              </Link>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`${
                    isActive(path)
                      ? 'text-black font-medium'
                      : 'text-gray-700 hover:text-gray-900'
                  } transition-colors`}
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Search className="h-6 w-6 text-gray-700" />
              </button>
              <button 
                onClick={onCartClick}
                className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ShoppingBag className="h-6 w-6 text-gray-700" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden absolute left-0 right-0 bg-white ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="px-4 py-2 space-y-1 shadow-lg">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`${
                  isActive(path)
                    ? 'bg-gray-50 text-black'
                    : 'text-gray-700 hover:bg-gray-50'
                } block px-3 py-2 rounded-md text-base font-medium transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}