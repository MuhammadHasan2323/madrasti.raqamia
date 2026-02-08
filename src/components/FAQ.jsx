import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'هل النظام مناسب لجميع المراحل الدراسية؟',
    a: 'نعم، النظام مرن بالكامل ويمكن تخصيصه ليشمل رياض الأطفال، الابتدائي، المتوسط، والثانوي، مع تقارير خاصة لكل مرحلة.',
  },
  {
    q: 'هل البيانات آمنة؟',
    a: 'بكل تأكيد. نستخدم أحدث تقنيات التشفير، وتكون قاعدة البيانات ملكاً للمدرسة وحدها ولا نشاركها مع أي طرف ثالث.',
  },
  {
    q: 'هل يحتاج النظام لأجهزة خاصة؟',
    a: 'لا، النظام سحابي يعمل على أي جهاز كمبيوتر، تابلت، أو هاتف ذكي متصل بالإنترنت.',
  },
  {
    q: 'ماذا لو احتجنا تعديلات مستقبلاً؟',
    a: 'بما أننا نقدم نظاماً مخصصاً، فنحن شركاؤك في التطوير. يمكننا إضافة مميزات جديدة حسب توسع مدرستك.',
  },
];

function FaqItem({ faq }) {
  const answerRef = useRef(null);

  const toggle = (e) => {
    const btn = e.currentTarget;
    const answer = answerRef.current;
    const icon = btn.querySelector('.faq-icon');

    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      icon.classList.remove('rotate-180');
    } else {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      icon.classList.add('rotate-180');
    }
  };

  return (
    <div className="border border-slate-200 rounded-2xl">
      <button
        onClick={toggle}
        className="w-full flex justify-between items-center p-4 sm:p-5 gap-4 bg-slate-50 hover:bg-slate-100 transition-colors text-right"
      >
        <span className="font-bold text-slate-800 flex-1 text-sm sm:text-base">{faq.q}</span>
        <ChevronDown size={20} className="text-slate-400 faq-icon" />
      </button>
      <div ref={answerRef} className="faq-answer">
        <div className="p-5 bg-white text-slate-600 text-sm leading-relaxed border-t border-slate-100">
          {faq.a}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">أسئلة شائعة</h2>
          <p className="text-slate-500">إجابات على أهم الاستفسارات التي قد تدور في ذهنك</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FaqItem key={i} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
