const stats = [
  { value: '100%', label: 'ملكية تامة للبيانات' },
  { value: '24/7', label: 'دعم فني متواصل' },
  { value: '0', label: 'تكاليف خفية' },
  { value: '∞', label: 'تخصيص بلا حدود' },
];

export default function SocialProof() {
  return (
    <section className="py-16 bg-slate-900 text-white border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-teal-400 to-teal-600 mb-2">
                {stat.value}
              </p>
              <p className="text-sm sm:text-base text-slate-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
