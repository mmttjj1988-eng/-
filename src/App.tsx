/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Map3D from './components/Map3D';

export default function App() {
  return (
    <div className="min-h-screen bg-[#042f2e] text-slate-50 font-sans relative overflow-x-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-emerald-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-teal-600 rounded-full blur-[150px]"></div>
      </div>
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 bg-[#042f2e]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          >
            <source src="https://cdn.pixabay.com/video/2020/05/25/40141-425263628_large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#042f2e] via-[#042f2e]/80 to-transparent mix-blend-multiply" />
        </div>

        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-4 max-w-6xl mx-auto mt-12 sm:mt-20 w-full flex flex-col items-center sm:items-start text-center sm:text-start"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mb-8"
          >
            <span className="px-5 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-sm font-semibold tracking-wider text-emerald-400 shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)]">
              مدينة البيرة، فلسطين
            </span>
            <span className="px-5 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-semibold tracking-wider text-white backdrop-blur-sm">
              Al-Bireh, Palestine
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-2 text-white drop-shadow-2xl"
          >
            حديقة الاستقلال
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-100 mt-2 md:mt-4 drop-shadow-none">
              مساحتك الخضراء
            </span>
          </motion.h1>

          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4, duration: 0.6 }}
             className="text-xl md:text-2xl font-bold tracking-widest uppercase mb-10 text-slate-300"
             dir="ltr"
          >
            Al-Istiqlal National Park <span className="text-emerald-400/80 font-medium ml-2">| Your Green Space</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
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

      {/* 3D Map Section */}
      <section className="min-h-screen bg-transparent flex flex-col pt-20 px-4 relative z-10 border-t border-white/5 pb-20">
        <div className="max-w-6xl mx-auto w-full mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold tracking-wider text-emerald-300 uppercase">الخريطة التفاعلية | Interactive Map</span>
            <div className="h-[1px] flex-1 max-w-[100px] bg-emerald-500/50"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            استكشف الحديقة بتقنية 3D
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed border-r-4 border-emerald-500/30 pr-6 max-w-2xl">
            تجول في خريطة حديقة الاستقلال الوطنية التفاعلية، وتعرف على أماكن الخدمات، المطاعم، والمناطق الترفيهية.
          </p>
        </div>

        <div className="max-w-6xl mx-auto w-full px-4 sm:px-0">
          <Map3D />
        </div>
        
        {/* Decorative elements using theme styles */}
        <div className="absolute left-10 top-40 w-96 h-96 bg-emerald-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute right-10 bottom-1/3 w-80 h-80 bg-teal-500/20 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Bottom Feature Bar from theme */}
        <div className="w-full max-w-6xl mx-auto mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 bg-[#021f1e]/80 border border-emerald-500/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl shadow-emerald-900/20 relative mb-20">
          <div className="border-b sm:border-b-0 lg:border-l border-emerald-500/10 p-8 flex flex-col justify-center hover:bg-white/5 transition-colors group">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2 group-hover:text-emerald-300 transition-colors">الطقس الحالي</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-white drop-shadow-md">24°</span>
              <span className="text-slate-400 text-sm font-medium">مشمس جزئياً</span>
            </div>
          </div>
          <div className="border-b sm:border-b-0 lg:border-l border-emerald-500/10 p-8 flex flex-col justify-center hover:bg-white/5 transition-colors group">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2 group-hover:text-emerald-300 transition-colors">المساحة الكلية</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-white drop-shadow-md">100</span>
              <span className="text-slate-400 text-sm font-medium">دونم</span>
            </div>
          </div>
          <div className="border-b lg:border-b-0 lg:border-l border-emerald-500/10 p-8 flex flex-col justify-center hover:bg-white/5 transition-colors group">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2 group-hover:text-emerald-300 transition-colors">الخريطة التفاعلية</span>
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-white underline decoration-emerald-500/50 underline-offset-4 group-hover:decoration-emerald-400 transition-colors">عرض ثلاثي الأبعاد</span>
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
            </div>
          </div>
          <div className="p-8 flex flex-col justify-center hover:bg-white/5 transition-colors group">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2 group-hover:text-emerald-300 transition-colors">ساعات العمل</span>
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-2xl font-bold text-white tracking-wider drop-shadow-md truncate" dir="ltr">06:00-00:00</span>
              <span className="text-slate-400 text-sm font-medium">كل أيام الأسبوع</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
