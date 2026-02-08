const steps = [
  { num: 1, title: 'جلسة استشارية', desc: 'نفهم احتياجات مدرستك والتحديات الحالية.' },
  { num: 2, title: 'تصميم مخصص', desc: 'نبني النظام والتطبيق بهوية وشعار مدرستك.' },
  { num: 3, title: 'التشغيل والتدريب', desc: 'نرفع بياناتك وندرب فريق العمل بالكامل.' },
  { num: 4, title: 'دعم مستمر', desc: 'فريق تقني معك خطوة بخطوة لضمان الاستقرار.' },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">كيف نبدأ؟</h2>
          <p className="text-lg text-slate-500">
            رحلة التحول الرقمي لمدرستك تبدأ بأربع خطوات بسيطة
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all relative"
            >
              <div className="w-10 h-10 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-bold text-lg mb-4">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-3/4 -translate-x-1/2 h-0.5 bg-slate-100 -z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
