import { useState, useEffect } from 'react';
import { Menu, X, TreePine } from 'lucide-react';
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
          ? 'backdrop-blur-xl border-b border-white/10 bg-emerald-950/80 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-emerald-400 rounded-lg rotate-12 flex items-center justify-center shadow-lg shadow-emerald-500/20 transition-transform group-hover:rotate-6">
                <TreePine className="w-6 h-6 text-emerald-950 -rotate-12 transition-transform group-hover:-rotate-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">حديقة الاستقلال</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors pb-1 ${
                  index === 0 
                  ? 'border-b-2 border-emerald-400 text-emerald-400' 
                  : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* User Actions & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              className="hidden md:block px-6 py-2.5 bg-emerald-500 text-emerald-950 font-bold rounded-full hover:bg-emerald-400 transition-all text-sm shadow-xl shadow-emerald-500/10"
            >
              تسجيل الدخول
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors text-white"
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
            className="md:hidden absolute top-full left-0 right-0 bg-[#042f2e] border-b border-white/10 shadow-xl overflow-hidden text-slate-50"
          >
            <div className="px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-lg font-medium rounded-xl transition-colors ${
                    index === 0 ? 'text-emerald-400 bg-white/5' : 'hover:bg-white/5 hover:text-white text-slate-300'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-white/10">
                  <button className="w-full px-6 py-3 bg-emerald-500 text-emerald-950 rounded-xl font-bold transition-all shadow-xl shadow-emerald-500/10 hover:bg-emerald-400">
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
