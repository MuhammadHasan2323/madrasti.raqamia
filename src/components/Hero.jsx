import { LayoutTemplate, Star, MessageCircle, Zap } from 'lucide-react';
import Landingpage from '../assets/Landingpage.png';
import Landingpagesmall from '../assets/Landingpagesmall.png';
import { useEffect, useState } from 'react';

function ResponsiveImage({ className, altPath }) {
  const [src, setSrc] = useState(() => {
    if (typeof window === 'undefined') return Landingpage;
    return window.innerWidth < 920 ? Landingpagesmall : Landingpage;
  });

  useEffect(() => {
    function onResize() {
      setSrc(window.innerWidth < 920 ? Landingpagesmall : Landingpage);
    }

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return <img src={src} alt={altPath} className={className} loading="lazy" />;
}

export default function Hero() {
  return (
    <header className="relative pt-36 pb-20 md:pt-48 md:pb-32">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-teal-50 via-slate-50 to-white -z-20" />
      <div className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-teal-200 rounded-full blur-[100px] opacity-30 animate-pulse -z-10" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-12 lg:gap-16">
          {/* Visual */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative z-10 bg-white rounded-[2.5rem] p-2 shadow-2xl shadow-slate-200 border border-slate-100 transform transition-transform duration-700 hover:rotate-1">
              <div className="rounded-[2rem] border-4 border-slate-50 relative">
                <ResponsiveImage
                  className="w-full h-[250px] sm:h-[300px] md:h-[380px] lg:h-[480px] xl:h-[560px] object-cover rounded-[2rem]"
                  altPath={"D:\\madrasti-digital\\madrasti-digital-app\\src\\assets\\Landingpage.png"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>
              {/* Floating Badges */}
              <div className="absolute top-4 left-4 sm:top-8 sm:left-8 bg-white/90 backdrop-blur-md p-2 sm:p-3 sm:pl-5 rounded-xl sm:rounded-2xl shadow-lg hidden sm:flex items-center gap-2 sm:gap-3 animate-float">
                <div className="bg-teal-100 p-2 rounded-full text-teal-600">
                  <LayoutTemplate size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold">واجهة</p>
                  <p className="text-sm font-extrabold text-slate-800">سهلة الاستخدام</p>
                </div>
              </div>
              <div
                className="absolute bottom-8 right-4 sm:bottom-12 sm:right-8 bg-white/90 backdrop-blur-md p-2 sm:p-3 sm:pl-5 rounded-xl sm:rounded-2xl shadow-lg hidden sm:flex items-center gap-2 sm:gap-3 animate-float"
                style={{ animationDelay: '1s' }}
              >
                <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                  <Star size={24} fill="currentColor" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold">تجربة</p>
                  <p className="text-sm font-extrabold text-slate-800">مصممة لك</p>
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-blue-500 rounded-[3rem] opacity-10 blur-2xl -z-10 group-hover:opacity-20 transition-opacity duration-500" />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-right">
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 shadow-sm px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold text-slate-600 mb-4 sm:mb-6 cursor-default">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500" />
              </span>
              شريكك التقني لتطوير التعليم
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 leading-[1.2] mb-4 sm:mb-6 tracking-tight">
              نظام تعليمي ذكي..
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                بهوية مدرستك
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-500 mb-8 sm:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
              لا نكتفي بتقديم نظام إدارة، بل نصمم لك بيئة تعليمية رقمية متكاملة تربط الطالب والمعلم
              وولي الأمر في منصة واحدة تحمل{' '}
              <span className="text-teal-700 font-bold">علامتك التجارية</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <a
                href="https://wa.me/1550041122"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold transition-all shadow-xl flex items-center justify-center gap-3 text-base sm:text-lg group"
              >
                تواصل معنا
                <span className="group-hover:-translate-x-1 transition-transform inline-block">
                  <MessageCircle size={20} />
                </span>
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold transition-all hover:shadow-lg text-base sm:text-lg flex items-center justify-center gap-2"
              >
                <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                  <Zap size={16} className="text-slate-600" />
                </span>
                اكتشف خدماتنا
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
