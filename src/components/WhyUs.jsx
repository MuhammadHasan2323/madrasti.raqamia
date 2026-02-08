import {
  Smartphone,
  UserX,
  FileText,
  Database,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';

const cards = [
  {
    bgIcon: <Smartphone size={40} />,
    challenge: { title: 'تطبيق بهوية عامة', desc: 'تطبيقات جاهزة لا تحمل روح مدرستك ولا تعزز علامتك التجارية.' },
    solution: { title: 'تطبيق خاص بمدرستك', desc: 'تطبيق كامل يحمل اسمك، شعارك، وألوانك ليعكس تميزك المؤسسي.' },
  },
  {
    bgIcon: <UserX size={40} />,
    challenge: { title: 'قلق أولياء الأمور', desc: 'اتصالات يومية مستمرة: (ابني حضر؟ مستواه إيه؟ الواجب إيه؟)' },
    solution: { title: 'طمأنينة لحظية', desc: 'إشعارات فورية لولي الأمر بالحضور، الدرجات، والسلوك.' },
  },
  {
    bgIcon: <FileText size={40} />,
    challenge: { title: 'فوضى الأوراق', desc: 'أكوام من الورق، ملفات ضائعة، وصعوبة في استرجاع المعلومات القديمة.' },
    solution: { title: 'أرشيف رقمي ذكي', desc: 'ضغطة زر واحدة توصلك لتاريخ الطالب الكامل من أول يوم التحاق.' },
  },
  {
    bgIcon: <Database size={40} />,
    challenge: { title: 'قرارات عشوائية', desc: 'غياب البيانات الدقيقة يجعل القرارات الإدارية مبنية على التخمين.' },
    solution: { title: 'لوحة تحكم للقرار', desc: 'إحصائيات دقيقة ورسوم بيانية تساعدك تتخذ القرار الصح في الوقت الصح.' },
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block bg-red-50 text-red-500 font-bold px-4 py-1 rounded-full text-sm mb-4">
            التحول الرقمي
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            تخلص من فوضى الإدارة التقليدية
          </h2>
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
            الفرق بين الوضع الحالي والمستقبل الذي نقدمه لك. قارن بنفسك كيف نغير قواعد اللعبة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 transform hover:-translate-y-1 flex flex-col md:flex-row h-full"
            >
              {/* Challenge */}
              <div className="w-full md:w-1/2 p-5 sm:p-8 bg-gradient-to-br from-slate-50 to-white border-b md:border-b-0 md:border-e border-slate-100 relative">
                <div className="absolute top-4 left-4 text-slate-200">{card.bgIcon}</div>
                <div className="flex items-center gap-2 mb-4 text-red-500 font-bold relative z-10">
                  <AlertCircle size={18} />
                  <span className="text-xs uppercase tracking-wider">التحدي الحالي</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-3 relative z-10">
                  {card.challenge.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed opacity-80 relative z-10">
                  {card.challenge.desc}
                </p>
              </div>
              {/* Solution */}
              <div className="w-full md:w-1/2 p-5 sm:p-8 bg-white relative group-hover:bg-teal-50/20 transition-colors">
                <div className="flex items-center gap-2 mb-4 text-teal-600 font-bold relative z-10">
                  <CheckCircle2 size={18} />
                  <span className="text-xs uppercase tracking-wider">الحل لدينا</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors relative z-10">
                  {card.solution.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed relative z-10">
                  {card.solution.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
