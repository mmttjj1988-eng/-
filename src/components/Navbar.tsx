import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'الرئيسية', href: '#' },
  { name: 'الخريطة 3D', href: '#' },
  { name: 'الخدمات', href: '#' },
  { name: 'حجز الفعاليات', href: '#' },
  { name: 'الأخبار', href: '#' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle navbar style after scrolling down 20px
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-xl border-b border-emerald-100 bg-white/95 py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-105">
                <img src="/logo.png" alt="حديقة الاستقلال" className="w-full h-full object-contain" />
            </div>
            <span className={`text-2xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-emerald-950' : 'text-white'}`}>حديقة الاستقلال</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors pb-1 ${
                  index === 0 
                  ? 'border-b-2 border-emerald-500 text-emerald-500' 
                  : isScrolled ? 'text-slate-600 hover:text-emerald-950' : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* User Actions & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button className={`hidden md:flex items-center gap-2 px-3 py-2 rounded-full transition-colors font-medium ${isScrolled ? 'text-slate-600 hover:text-emerald-900 hover:bg-emerald-50' : 'text-slate-300 hover:text-white hover:bg-white/10'}`}>
              <Globe size={18} />
              <span className={`text-sm border-r pr-2 ${isScrolled ? 'border-emerald-200' : 'border-white/20'}`}>EN</span>
            </button>
            <button
              className={`hidden md:block px-6 py-2.5 font-bold rounded-full transition-all text-sm shadow-xl ${
                isScrolled ? 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-emerald-600/20' : 'bg-emerald-500 text-emerald-950 hover:bg-emerald-400 shadow-emerald-500/10'
              }`}
            >
              تسجيل الدخول
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className={`md:hidden p-2 rounded-md transition-colors ${
                isScrolled ? 'text-emerald-950 hover:bg-emerald-50' : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-emerald-100 shadow-xl overflow-hidden text-emerald-950"
          >
            <div className="px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-lg font-medium rounded-xl transition-colors ${
                    index === 0 ? 'text-emerald-600 bg-emerald-50' : 'hover:bg-emerald-50 text-slate-600'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-emerald-100">
                  <button className="w-full px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold transition-all shadow-xl shadow-emerald-600/20 hover:bg-emerald-500">
                      تسجيل الدخول
                  </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
