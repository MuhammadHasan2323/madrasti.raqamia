import { Eye, TrendingUp, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="hidden md:block absolute top-0 left-0 md:left-[-12%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-teal-50 rounded-full blur-[100px] opacity-60 md:-translate-y-1/2" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          <div className="w-full lg:w-1/3">
            <div className="inline-block bg-teal-50 text-teal-700 px-4 py-1 rounded-full text-sm font-bold mb-6">
              عن مدرستي
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight text-slate-900">
              شريكك الاستراتيجي
              <br />
              <span className="text-teal-600">للتحول الرقمي</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              نحن في مدرستي الرقمية نؤمن بأن التقنية ليست مجرد أدوات، بل هي الجسر الذي يربط بين
              الإدارة، المعلم، الطالب، وولي الأمر.
            </p>
          </div>

          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 sm:p-8 rounded-3xl border border-slate-100 shadow-lg hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-4 sm:mb-6">
                <Eye size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">رؤيتنا</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                أن نكون الشريك التقني الأول للمدارس في المنطقة، ونقدم أنظمة ذكية ترفع جودة التعليم.
              </p>
            </div>
            <div className="bg-white p-5 sm:p-8 rounded-3xl border border-slate-100 shadow-lg hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4 sm:mb-6">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">رسالتنا</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                تمكين المدارس من إدارة عملياتها بسهولة، تحسين المتابعة، وتقليل الأعباء الإدارية.
              </p>
            </div>
            <div className="bg-slate-900 p-5 sm:p-8 rounded-3xl shadow-lg md:col-span-2 text-white relative">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-amber-400">
                    <Award size={28} />
                  </div>
                  <h3 className="text-xl font-bold">قيمنا الأساسية</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['المصداقية', 'الجودة', 'الأمان', 'الشراكة', 'التطوير'].map((v) => (
                    <span
                      key={v}
                      className="bg-white/10 border border-white/20 px-4 py-2 rounded-lg text-sm"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
