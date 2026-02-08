import { MessageCircle, Mail } from 'lucide-react';

export default function CTA() {
  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative">
      <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6">جاهز للبدء؟</h2>
        <p className="text-slate-300 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto">
          لا تتردد في طلب استشارة مجانية أو عرض سعر. فريقنا جاهز للإجابة على كل استفساراتك وبناء
          النظام الأمثل لمدرستك.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="https://wa.me/1550041122"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-500 hover:bg-teal-400 text-slate-900 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-3"
          >
            تواصل واتساب
            <MessageCircle size={20} />
          </a>
          <a
            href="mailto:info@digitalschool.com"
            className="bg-transparent border-2 border-slate-600 hover:bg-slate-800 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-3"
          >
            طلب عرض سعر
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
