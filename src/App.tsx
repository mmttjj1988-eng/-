/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Map3D from './components/Map3D';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-emerald-950 font-sans relative overflow-x-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-40 pointer-events-none z-0">
        <div className="absolute top-[50%] left-[-10%] w-[600px] h-[600px] bg-emerald-200 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[800px] h-[800px] bg-emerald-100 rounded-full blur-[150px]"></div>
      </div>
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 bg-emerald-950">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          >
            <source src="https://cdn.pixabay.com/video/2020/05/25/40141-425263628_large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-emerald-950/60 to-emerald-950/40 mix-blend-normal" />
        </div>

        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-4 max-w-6xl mx-auto mt-12 sm:mt-20 w-full flex flex-col items-center sm:items-start text-center sm:text-start"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl mb-12 border-r-4 border-emerald-500 pl-4 pr-6 bg-gradient-to-l from-emerald-500/10 to-transparent py-5 rounded-l-2xl shadow-sm backdrop-blur-sm relative overload-hidden"
          >
            <p className="mb-4 font-medium text-white tracking-wide">مرحباً بك في حديقة الاستقلال الوطنية. حيث تلتقي المغامرة بالهدوء، وتتجسد الطبيعة الخلابة في أبهى صورها.</p>
            <p dir="ltr" className="font-normal opacity-80 text-base md:text-lg text-left border-l-2 border-emerald-500/50 pl-5 ml-4 text-emerald-50">
              Welcome to Al-Istiqlal National Park. Where adventure meets tranquility, and nature manifests in its finest details.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-emerald-950 font-bold rounded-full hover:scale-105 transition-all text-lg shadow-[0_0_30px_-5px_rgba(255,255,255,0.4)] flex items-center justify-center gap-4 relative overflow-hidden group">
              <div className="absolute inset-0 bg-emerald-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">ابدأ الجولة الافتراضية 3D</span>
              <span className="relative z-10 text-sm border-r border-emerald-950/20 pr-4 group-hover:text-white/80 group-hover:border-white/20 transition-colors duration-300 font-sans tracking-wide">Start 3D Tour</span>
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-emerald-500/10 text-white font-bold rounded-full hover:bg-emerald-500/20 backdrop-blur-md transition-all text-lg border border-emerald-500/30 hover:border-emerald-400 hover:scale-105 flex items-center justify-center gap-4 shadow-lg shadow-emerald-500/5">
              <span>احجز تذكرتك</span>
              <span className="text-sm border-r border-white/20 pr-4 text-emerald-200 font-sans tracking-wide">Book Ticket</span>
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Bottom Feature Bar from theme - Overlapping Hero */}
      <div className="w-full max-w-6xl mx-auto -mt-20 px-4 sm:px-0 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 bg-white/95 border border-emerald-100/50 backdrop-blur-xl rounded-3xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(4,47,46,0.1)]">
          <div className="border-b sm:border-b-0 lg:border-l border-slate-100 p-8 flex flex-col justify-center hover:bg-emerald-50/50 transition-colors group">
            <span className="text-emerald-600 text-xs font-bold uppercase tracking-widest mb-2">الطقس الحالي</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-emerald-950 tracking-tight">24°</span>
              <span className="text-slate-500 text-sm font-medium">مشمس جزئياً</span>
            </div>
          </div>
          <div className="border-b sm:border-b-0 lg:border-l border-slate-100 p-8 flex flex-col justify-center hover:bg-emerald-50/50 transition-colors group">
            <span className="text-emerald-600 text-xs font-bold uppercase tracking-widest mb-2">المساحة الكلية</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-emerald-950 tracking-tight">100</span>
              <span className="text-slate-500 text-sm font-medium">دونم</span>
            </div>
          </div>
          <div className="border-b lg:border-b-0 lg:border-l border-slate-100 p-8 flex flex-col justify-center hover:bg-emerald-50/50 transition-colors group">
            <span className="text-emerald-600 text-xs font-bold uppercase tracking-widest mb-2">الخريطة التفاعلية</span>
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-emerald-950 underline decoration-emerald-500/30 underline-offset-4 group-hover:decoration-emerald-500 transition-colors">عرض ثلاثي الأبعاد</span>
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
            </div>
          </div>
          <div className="p-8 flex flex-col justify-center hover:bg-emerald-50/50 transition-colors group">
            <span className="text-emerald-600 text-xs font-bold uppercase tracking-widest mb-2">ساعات العمل</span>
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-2xl font-black text-emerald-950 tracking-wider truncate" dir="ltr">06:00-00:00</span>
              <span className="text-slate-500 text-sm font-medium">كل أيام الأسبوع</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3D Map Section */}
      <section className="bg-transparent flex flex-col py-32 px-4 relative z-10 w-full max-w-6xl mx-auto">
        <div className="w-full mb-12 text-center sm:text-start flex flex-col sm:items-start items-center">
          <div className="flex items-center gap-2 mb-6">
            <span className="px-4 py-1.5 bg-emerald-100 text-emerald-800 rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase shadow-sm">الخريطة التفاعلية | Interactive Map</span>
            <div className="h-[2px] w-12 sm:w-24 bg-emerald-200"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-emerald-950 mb-6 tracking-tight">
            استكشف الحديقة
            <span className="block text-emerald-600 mt-2">بتقنية 3D</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed border-r-4 border-emerald-400 pr-6 max-w-2xl font-medium">
            تجول في خريطة حديقة الاستقلال الوطنية التفاعلية، وتعرف على أماكن الخدمات، الأكشاك، والمناطق الترفيهية والسياحية بكل سهولة.
          </p>
        </div>

        <div className="w-full">
          <Map3D />
        </div>
      </section>

      <Footer />
    </div>
  );
}
