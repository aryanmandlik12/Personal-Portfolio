import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-ivory/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
            Aryan Mandlik
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-700 hover:text-orange-600 transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/aryanmandlik12"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-orange-600 transition-colors duration-200"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/aryan-mandlik"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-orange-600 transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:mandlikaryan1@gmail.com"
              className="p-2 text-slate-600 hover:text-orange-600 transition-colors duration-200"
            >
              <Mail size={20} />
            </a>
          </div>

          <button
            className="md:hidden p-2 text-slate-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-ivory rounded-lg shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-slate-700 hover:text-orange-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex justify-center space-x-4 mt-4 pt-4 border-t border-slate-200">
              <a href="https://github.com/aryanmandlik12" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-orange-600">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/aryan-mandlik" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-orange-600">
                <Linkedin size={20} />
              </a>
              <a href="mailto:mandlikaryan1@gmail.com" className="text-slate-600 hover:text-orange-600">
                <Mail size={20} />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;