import React from 'react';
import { Shield, Microscope, Globe } from 'lucide-react';

export const Technology: React.FC = () => {
  return (
    <div className="pt-20">
       <section className="bg-slate-100 py-16">
         <div className="max-w-7xl mx-auto px-4 text-center">
           <h1 className="text-4xl font-bold text-slate-900 mb-6">75 Patents</h1>
           <p className="text-slate-600 max-w-2xl mx-auto">
             국내 및 해외(미국, 일본 등)에서 획득한 75개의 특허는<br/> 
             와즈라가 단순한 물이 아님을 증명하는 기술적 토대입니다.
           </p>
         </div>
       </section>

       <section className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="border border-slate-200 p-8 rounded-xl hover:border-blue-900 transition-colors group">
                    <Shield className="w-12 h-12 text-slate-400 group-hover:text-blue-900 mb-6" />
                    <h3 className="text-xl font-bold mb-4">공기 정화 & 필터 기술</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">
                        미세 입자를 제어하고 흡착하는 고효율 필터 시스템에 대한 원천 기술.
                    </p>
                    <span className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-600">Patents: 30+</span>
                </div>

                <div className="border border-slate-200 p-8 rounded-xl hover:border-blue-900 transition-colors group">
                    <Microscope className="w-12 h-12 text-slate-400 group-hover:text-blue-900 mb-6" />
                    <h3 className="text-xl font-bold mb-4">유체 역학 메커니즘</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">
                        유체의 흐름을 최적화하여 에너지 손실을 줄이고 순도를 높이는 구조 설계 기술.
                    </p>
                    <span className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-600">Patents: 25+</span>
                </div>

                <div className="border border-slate-200 p-8 rounded-xl hover:border-blue-900 transition-colors group">
                    <Globe className="w-12 h-12 text-slate-400 group-hover:text-blue-900 mb-6" />
                    <h3 className="text-xl font-bold mb-4">글로벌 환경 기술</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">
                        미국, 일본, 중국 등 해외 주요 국가에서 인정받은 환경 개선 기술 특허.
                    </p>
                    <span className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-600">Global</span>
                </div>
            </div>

            <div className="mt-16 p-8 bg-slate-50 rounded-lg text-center">
                <p className="text-sm text-slate-500 mb-2">Notice</p>
                <p className="text-slate-700 font-medium">
                    보유 특허의 상세 내용은 기업 비밀 보호 및 기술 유출 방지를 위해 일부만 공개하며,<br/> 
                    관계 기관 및 제휴사의 요청 시 별도의 절차를 통해 확인 가능합니다.
                </p>
            </div>
         </div>
       </section>
    </div>
  );
};