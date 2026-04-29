import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-3">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center group">
            <span className="text-2xl font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
              Ms<span className="text-emerald-400 group-hover:text-white transition-colors">qora</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#download" className="text-gray-300 hover:text-white transition-colors">Download</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>

            <a href="#download" className="relative group px-4 lg:px-6 py-2.5 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-emerald-500 rounded-lg"></div>
              <span className="relative text-white font-semibold text-sm lg:text-base">Download Software</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-4 py-4 border-t border-white/10">
            <a
              href="#home"
              onClick={handleLinkClick}
              className="text-gray-300 hover:text-white transition-colors px-2 py-2"
            >
              Home
            </a>
            <a
              href="#features"
              onClick={handleLinkClick}
              className="text-gray-300 hover:text-white transition-colors px-2 py-2"
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={handleLinkClick}
              className="text-gray-300 hover:text-white transition-colors px-2 py-2"
            >
              Pricing
            </a>
            <a
              href="#download"
              onClick={handleLinkClick}
              className="text-gray-300 hover:text-white transition-colors px-2 py-2"
            >
              Download
            </a>
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="text-gray-300 hover:text-white transition-colors px-2 py-2"
            >
              Contact
            </a>

            <a
              href="#download"
              onClick={handleLinkClick}
              className="relative group px-6 py-3 rounded-lg overflow-hidden mt-2"
            >
              <div className="absolute inset-0 bg-emerald-500 rounded-lg"></div>
              <span className="relative text-white font-semibold text-center block">Download Software</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
