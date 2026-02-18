import React, { useState } from 'react';
import { Button } from '../components/Button';
import { COMPLIANCE } from '../constants';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'general', // general, business, trial
    message: '',
    agreement: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
        setSubmitted(true);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, agreement: e.target.checked }));
  };

  if (submitted) {
     return (
        <div className="pt-24 min-h-screen flex items-center justify-center bg-slate-50 px-4">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">문의가 접수되었습니다.</h2>
                <p className="text-slate-600 mb-6">담당자가 확인 후 입력하신 이메일로 답변 드리겠습니다.<br/>(평일 기준 24시간 이내)</p>
                <Button onClick={() => setSubmitted(false)} variant="outline">돌아가기</Button>
            </div>
        </div>
     )
  }

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-xl mx-auto px-4">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">문의하기</h1>
          <p className="text-slate-500 mb-8 text-sm">제휴, 대량 구매, 체험팩 등 무엇이든 물어보세요.</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-slate-700 mb-1">문의 유형</label>
              <select 
                id="type" 
                name="type" 
                value={formData.type}
                onChange={handleChange}
                className="w-full border-slate-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
              >
                <option value="general">일반 문의</option>
                <option value="business">제휴 및 대량 구매</option>
                <option value="trial">1+1 체험팩 신청</option>
              </select>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">성함 / 업체명</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border-slate-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                placeholder="홍길동"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">이메일</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border-slate-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                placeholder="contact@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">내용</label>
              <textarea 
                id="message" 
                name="message" 
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full border-slate-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                placeholder="문의하실 내용을 상세히 적어주세요."
              ></textarea>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="agreement"
                  name="agreement"
                  type="checkbox"
                  required
                  checked={formData.agreement}
                  onChange={handleCheckbox}
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-slate-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="agreement" className="font-medium text-slate-700">개인정보 수집 및 이용 동의 (필수)</label>
                <p className="text-slate-500 text-xs mt-1">
                  문의 처리를 위해 성함, 이메일 정보를 수집하며, 답변 완료 후 3개월간 보관 후 파기합니다.
                </p>
              </div>
            </div>

            <Button type="submit" fullWidth disabled={!formData.agreement} size="lg">
              문의 접수하기
            </Button>
          </form>

          {/* Compliance Reminder for Internal Use (simulated as footer note) */}
          <div className="mt-8 pt-6 border-t border-slate-100">
             <p className="text-xs text-slate-400 text-center">
                ※ 체험팩 신청 시 본 제품이 질병 치료를 위한 의약품이 아님을 인지하고 신청합니다.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};