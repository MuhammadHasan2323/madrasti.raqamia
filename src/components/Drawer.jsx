import { useEffect } from 'react';
import { X } from 'lucide-react';

export default function Drawer({ isOpen, onClose, title, children }) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => (document.body.style.overflow = '');
  }, [isOpen]);

  return (
    <div className={`fixed inset-0 z-[90] pointer-events-none ${isOpen ? 'pointer-events-auto' : ''}`}>
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform z-[91] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 flex items-center justify-between border-b border-slate-100">
          <div className="font-bold text-lg">{title}</div>
          <button onClick={onClose} className="p-2 rounded-md bg-slate-100">
            <X size={18} />
          </button>
        </div>
        <div className="p-4 overflow-y-auto h-full">{children}</div>
      </aside>
    </div>
  );
}
