import { CheckCircle2 } from 'lucide-react';
import ServicesImg from '../assets/Services.png';

const services = [
  {
    color: 'bg-teal-500',
    title: 'تطبيق ولي الأمر',
    desc: 'متابعة الحضور، الغياب، والدرجات لحظة بلحظة.',
  },
  {
    color: 'bg-blue-500',
    title: 'لوحة الإدارة المدرسية',
    desc: 'إدارة بيانات الطلاب والمدرسين والموظفين بكفاءة.',
  },
  {
    color: 'bg-indigo-500',
    title: 'المتابعة الأكاديمية',
    desc: 'رصد الدرجات، متابعة الواجبات، والجداول الدراسية.',
  },
  {
    color: 'bg-rose-500',
    title: 'التقارير الذكية',
    desc: 'تحليلات دقيقة للأداء والسلوك تساعد في اتخاذ القرار.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-bold tracking-wider uppercase text-sm mb-3 block">
            ماذا نقدم؟
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            خدمات شاملة 360 درجة
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6">
            {services.map((svc, i) => (
              <div
                key={i}
                className="flex gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-slate-100"
              >
                <div
                  className={`mt-1 w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-white shadow-lg ${svc.color}`}
                >
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">{svc.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Service Feature Image */}
          <div className="bg-white rounded-3xl p-3 sm:p-4 shadow-xl border border-slate-100 flex items-center justify-center relative group min-h-[300px] md:min-h-[400px] overflow-hidden">
            <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-slate-900/0 transition-colors z-10" />
            <img
              src={ServicesImg}
              alt="Dashboard"
              className="w-full h-full object-cover rounded-3xl"
              loading="lazy"
            />
            <div className="absolute bottom-4 inset-x-4 sm:bottom-8 sm:inset-x-8 bg-white/95 backdrop-blur p-4 sm:p-6 rounded-3xl shadow-lg z-20">
              <h4 className="font-bold text-slate-900 mb-2">تحكم كامل</h4>
              <p className="text-slate-500 text-sm">كل أدوات الإدارة التي تحتاجها في مكان واحد.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
