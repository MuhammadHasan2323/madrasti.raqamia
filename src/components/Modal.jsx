import { useEffect } from 'react';
import { Lock, Scale, X } from 'lucide-react';

const icons = {
  lock: Lock,
  scale: Scale,
};

export default function Modal({ isOpen, onClose, title, icon, children }) {
  const IconComponent = icons[icon];

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 ${
        isOpen ? 'modal active' : 'modal'
      }`}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="modal-content bg-white rounded-2xl sm:rounded-3xl w-full max-w-2xl max-h-[calc(100vh-2rem)] overflow-y-auto relative z-10 shadow-2xl">
        <div className="p-4 sm:p-6 md:p-8">
          <div className="flex justify-between items-center mb-4 sm:mb-6 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2 sm:gap-3 text-teal-700">
              {IconComponent && <IconComponent size={24} className="sm:w-7 sm:h-7" />}
              <h3 className="text-xl sm:text-2xl font-bold">{title}</h3>
            </div>
            <button
              onClick={onClose}
              className="bg-slate-100 hover:bg-slate-200 p-2.5 sm:p-3 rounded-full transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <X size={20} className="text-slate-500" />
            </button>
          </div>
          {children}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-100 flex justify-end">
            <button
              onClick={onClose}
              className="bg-teal-600 hover:bg-teal-700 text-white px-5 sm:px-6 py-2.5 rounded-xl font-bold transition-colors"
            >
              إغلاق
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
