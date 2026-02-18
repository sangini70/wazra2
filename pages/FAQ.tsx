import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-2 text-center">자주 묻는 질문</h1>
        <p className="text-slate-500 text-center mb-12">궁금하신 점을 확인해보세요.</p>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-lg overflow-hidden transition-all duration-200 hover:border-slate-300">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-slate-50 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center gap-4">
                   <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded uppercase min-w-[80px] text-center">
                     {faq.category}
                   </span>
                   <span className="font-medium text-slate-800">{faq.question}</span>
                </div>
                {openIndex === index ? <Minus size={20} className="text-slate-400 flex-shrink-0" /> : <Plus size={20} className="text-slate-400 flex-shrink-0" />}
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 text-slate-600 text-sm leading-relaxed whitespace-pre-line pl-[calc(1.5rem+80px+1rem)]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-4">찾으시는 질문이 없나요?</p>
          <a href="mailto:contact@wazra.co.kr" className="text-blue-600 font-bold hover:underline">
            contact@wazra.co.kr 로 문의하기
          </a>
        </div>
      </div>
    </div>
  );
};