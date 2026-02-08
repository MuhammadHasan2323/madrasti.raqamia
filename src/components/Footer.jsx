import { useState } from 'react';
import { School, Instagram, MessageCircle, Mail } from 'lucide-react';
import Modal from './Modal';

export default function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <>
      <footer className="bg-white border-t border-slate-200 pt-16 pb-8" id="contact">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 w-full md:w-auto">
              <div className="bg-gradient-to-br from-teal-500 to-teal-700 text-white p-2.5 rounded-xl shadow-lg shadow-teal-500/20">
                <School strokeWidth={2.5} size={28} />
              </div>
              <div className="flex flex-col md:items-start items-center gap-0">
                <span className="text-2xl font-bold text-slate-800">مدرستي الرقمية</span>
                <span className="text-xs text-slate-500">شريكك التقني الأول</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/madrasti.raqamia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 cursor-pointer transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://wa.me/1550041122"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#25D366] cursor-pointer transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
              >
                <MessageCircle size={24} />
              </a>
              <a
                href="mailto:info@digitalschool.com"
                className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 cursor-pointer transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p> مدرستي الرقمية. جميع الحقوق محفوظة. © {new Date().getFullYear()}</p>
            <div className="flex gap-6">
              <button onClick={() => setPrivacyOpen(true)} className="hover:text-teal-600 transition-colors py-2">
                سياسة الخصوصية
              </button>
              <button onClick={() => setTermsOpen(true)} className="hover:text-teal-600 transition-colors py-2">
                الشروط والأحكام
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Modal */}
      <Modal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} title="سياسة الخصوصية" icon="lock">
        <PrivacyContent />
      </Modal>

      {/* Terms Modal */}
      <Modal isOpen={termsOpen} onClose={() => setTermsOpen(false)} title="الشروط والأحكام" icon="scale">
        <TermsContent />
      </Modal>
    </>
  );
}

function PrivacyContent() {
  return (
    <div className="prose prose-slate max-w-none space-y-5 leading-relaxed">
      <h3 className="font-bold text-slate-800">الخصوصية</h3>
      <p className="text-slate-600">نحن نحترم خصوصيتك ونتعامل مع بياناتك بكل أمان وشفافية.</p>
      <p className="text-slate-600">نستخدم معلوماتك فقط لتقديم خدمة أفضل لك.</p>
      <p className="text-slate-600">لا نشارك بياناتك مع أي جهة دون إذنك.</p>
      <p className="text-slate-600">نحرص دائمًا على حماية حسابك ومعلوماتك.</p>
      <p className="text-slate-600">هدفنا هو راحتك وثقتك بنا.</p>
    </div>
  );
}

function TermsContent() {
  return (
    <div className="prose prose-slate max-w-none space-y-5 leading-relaxed">
      <h3 className="font-bold text-slate-800">الشروط</h3>
      <p className="text-slate-600">باستخدامك لمنصتنا، فأنت توافق على ما يلي:</p>
      <ul className="list-disc list-inside text-slate-600">
        <li>استخدام الخدمة بشكل مسؤول.</li>
        <li>الحفاظ على بيانات حسابك.</li>
        <li>عدم إساءة استخدام النظام.</li>
      </ul>
      <p className="text-slate-600">نحن هنا لدعمك ومساعدتك دائمًا.</p>
    </div>
  );
}
