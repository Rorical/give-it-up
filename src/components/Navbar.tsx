import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold tracking-wider hover:text-white/80 transition-colors">
              GIVE IT UP
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className="text-white hover:text-white/70 transition-colors px-3 py-2 text-sm font-medium tracking-wide"
              >
                GIVE IT UP
              </Link>
              <Link
                to="/form"
                className="text-white hover:text-white/70 transition-colors px-3 py-2 text-sm font-medium tracking-wide"
              >
                GIVE IT UP
              </Link>
              <Link
                to="/book"
                className="text-white hover:text-white/70 transition-colors px-3 py-2 text-sm font-medium tracking-wide"
              >
                GIVE IT UP
              </Link>
              <a
                href="https://rorical.blue/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/70 transition-colors px-3 py-2 text-sm font-medium tracking-wide"
              >
                GIVE IT UP
              </a>
              <button className="bg-white text-black hover:bg-white/90 transition-all px-6 py-2 text-sm font-bold tracking-wide">
                GIVE IT UP
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-white/70 transition-colors p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-white/70 transition-colors block px-3 py-2 text-base font-medium tracking-wide"
            >
              GIVE IT UP
            </Link>
            <Link
              to="/form"
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-white/70 transition-colors block px-3 py-2 text-base font-medium tracking-wide"
            >
              GIVE IT UP
            </Link>
            <Link
              to="/book"
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-white/70 transition-colors block px-3 py-2 text-base font-medium tracking-wide"
            >
              GIVE IT UP
            </Link>
            <a
              href="https://rorical.blue/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/70 transition-colors block px-3 py-2 text-base font-medium tracking-wide"
            >
              GIVE IT UP
            </a>
            <button className="bg-white text-black hover:bg-white/90 transition-all px-6 py-2 text-base font-bold tracking-wide w-full mt-2">
              GIVE IT UP
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
