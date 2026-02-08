import { useEffect, useState } from 'react';
import { School, MessageCircle, Menu, X, ChevronLeft } from 'lucide-react';

const navLinks = [
  { href: '#why-us', label: 'التحول الرقمي' },
  { href: '#how-it-works', label: 'كيف نعمل' },
  { href: '#about', label: 'عن مدرستي' },
  { href: '#services', label: 'الخدمات' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-teal-900/5 py-2 sm:py-3'
          : 'bg-transparent py-3 sm:py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group min-w-0">
          <div className="bg-gradient-to-br from-teal-500 to-teal-700 text-white p-2 rounded-xl shadow-lg shadow-teal-500/30 group-hover:scale-105 transition-transform duration-300">
            <School strokeWidth={2.5} size={26} />
          </div>
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 group-hover:text-teal-700 transition-colors truncate max-w-[140px] sm:max-w-[220px] md:max-w-none">
            مدرستي الرقمية
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-600 hover:text-teal-600 font-bold transition-all relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-teal-600 hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <a
          href="https://wa.me/1550041122"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex bg-slate-900 hover:bg-teal-600 text-white px-6 py-2.5 rounded-xl font-bold transition-all shadow-lg hover:shadow-teal-500/30 items-center gap-2 transform hover:-translate-y-0.5 text-sm"
        >
          تواصل معنا
          <MessageCircle size={18} />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-slate-700 p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="lg:hidden fixed inset-0 top-[80px] bg-black/30 backdrop-blur-sm z-40"
        />
      )}

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 shadow-2xl absolute w-full inset-x-0 top-full p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 max-h-[calc(100vh-80px)] overflow-y-auto z-50">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-slate-700 font-bold p-3 hover:bg-teal-50 rounded-xl flex justify-between items-center"
            >
              {link.label}
              <ChevronLeft className="text-teal-400" size={16} />
            </a>
          ))}
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-600 text-white py-4 rounded-xl font-bold w-full shadow-lg mt-2 flex items-center justify-center gap-2"
          >
            تواصل معنا
            <MessageCircle size={20} />
          </a>
        </div>
      )}
    </nav>
  );
}
