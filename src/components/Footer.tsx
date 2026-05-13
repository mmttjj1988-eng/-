import { Phone, Mail, MapPin, Navigation } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-emerald-950 border-t border-emerald-900 pt-16 pb-8 relative overflow-hidden z-20">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-emerald-400 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">حديقة الاستقلال</h3>
            <p className="text-slate-300 leading-relaxed font-medium mb-6">
              المساحة الخضراء الأكبر في مدينة البيرة، مكانك المفضل للترفيه العائلي، الأنشطة الثقافية، والرياضية في قلب الطبيعة.
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:0599460049" className="flex items-center gap-3 text-slate-300 hover:text-emerald-400 transition-colors">
                <Phone className="w-5 h-5 text-emerald-500" />
                <span dir="ltr">0599460049</span>
              </a>
              <a href="mailto:info@istiqlalpark.ps" className="flex items-center gap-3 text-slate-300 hover:text-emerald-400 transition-colors">
                <Mail className="w-5 h-5 text-emerald-500" />
                <span>info@istiqlalpark.ps</span>
              </a>
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-emerald-500" />
                <span>مدينة البيرة، فلسطين</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
             <h3 className="text-lg font-bold text-white mb-2 border-b border-emerald-500/20 pb-4 inline-block w-full">روابط سريعة</h3>
             <a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-2">
               <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50"></span> معلومات الزوار
             </a>
             <a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-2">
               <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50"></span> الأخبار والفعاليات
             </a>
             <a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-2">
               <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50"></span> سياسة الخصوصية
             </a>
             <a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-2">
               <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50"></span> الشروط والأحكام
             </a>
          </div>

          {/* Location / View on Map */}
          <div className="flex flex-col gap-4 h-full">
             <h3 className="text-lg font-bold text-white mb-2 border-b border-emerald-500/20 pb-4">موقعنا على الخريطة</h3>
             
             <div className="flex-1 min-h-[180px] w-full relative rounded-xl overflow-hidden border border-emerald-500/20 group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11516.480034608316!2d35.2104337096053!3d31.90566367375267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d2ae96b678e0f%3A0xc4aa0ab94b41ac3d!2z2K3Yr9mK2YLYqSDYp9mE2KfYs9iq2YLYhNin2YQgQWwtSXN0aXFsYWwgUGFyaw!5e1!3m2!1sen!2s!4v1714478149864!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 delay-100"
                ></iframe>
                <div className="absolute inset-0 pointer-events-none bg-[#021f1e]/40 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-3 pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                   <div className="w-12 h-12 bg-emerald-500/80 rounded-full flex items-center justify-center backdrop-blur-md border border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                      <MapPin className="w-6 h-6 text-white" />
                   </div>
                   <div className="px-5 py-2 bg-[#021f1e]/80 text-white font-bold rounded-full text-sm shadow-xl backdrop-blur-md whitespace-nowrap">
                      الوصول للحديقة
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="pt-8 border-t border-emerald-500/20 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-slate-400 text-sm font-medium">
            &copy; alistiqlalpark2026
          </p>
        </div>
      </div>
    </footer>
  );
}
