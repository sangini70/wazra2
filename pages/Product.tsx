import React from 'react';
import { Button } from '../components/Button';
import { LINKS } from '../constants';
import { PageRoutes } from '../types';
import { Link } from 'react-router-dom';

export const Product: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="bg-slate-100 rounded-2xl aspect-square flex items-center justify-center">
                {/* Product Image Placeholder - In real app, actual product shot */}
                <div className="text-slate-400 text-center">
                   <p className="text-6xl mb-4">💧</p>
                   <p>WAZRA 500ml / 2L</p>
                </div>
             </div>
             <div>
                <span className="text-blue-600 font-bold text-sm tracking-wide">PREMIUM LINE</span>
                <h1 className="text-4xl font-bold text-slate-900 mt-2 mb-6">WAZRA ORIGINAL</h1>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                   김부열 박사의 연구가 집약된 프리미엄 워터.<br/>
                   가장 순수한 물의 형태를 가정까지 안전하게 전달합니다.
                </p>
                
                <div className="space-y-4 mb-10 border-t border-b border-slate-200 py-6">
                   <div className="flex justify-between">
                      <span className="text-slate-600">용량</span>
                      <span className="font-medium text-slate-900">500ml / 2L</span>
                   </div>
                   <div className="flex justify-between">
                      <span className="text-slate-600">수원지</span>
                      <span className="font-medium text-slate-900">국내 청정 지역 (상세 표기 참조)</span>
                   </div>
                   <div className="flex justify-between">
                      <span className="text-slate-600">유통기한</span>
                      <span className="font-medium text-slate-900">제조일로부터 12개월</span>
                   </div>
                </div>

                <div className="flex flex-col gap-4">
                   <Button href={LINKS.COUPANG} external size="lg" fullWidth>
                      쿠팡에서 구매하기
                   </Button>
                   <Link to={PageRoutes.CONTACT} className="w-full">
                    <Button variant="outline" size="lg" fullWidth>
                        대량 구매 / 체험팩 문의
                    </Button>
                   </Link>
                </div>
                <p className="mt-4 text-xs text-slate-400">
                   * 본 제품은 의약품이 아니며, 질병의 예방 및 치료 효과와 무관합니다.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Usage Guide */}
      <section className="bg-slate-50 py-20">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-10">권장 섭취 가이드</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="bg-white p-6 rounded-lg shadow-sm">
                  <span className="block text-2xl mb-2">🌅</span>
                  <h3 className="font-bold mb-2">기상 직후 1잔</h3>
                  <p className="text-sm text-slate-600">밤새 손실된 수분을 보충하고 몸을 깨우는 시간</p>
               </div>
               <div className="bg-white p-6 rounded-lg shadow-sm">
                  <span className="block text-2xl mb-2">🏃</span>
                  <h3 className="font-bold mb-2">활동 중 수시로</h3>
                  <p className="text-sm text-slate-600">갈증이 나기 전에 조금씩 자주 마시는 습관</p>
               </div>
               <div className="bg-white p-6 rounded-lg shadow-sm">
                  <span className="block text-2xl mb-2">🌙</span>
                  <h3 className="font-bold mb-2">잠들기 1시간 전</h3>
                  <p className="text-sm text-slate-600">편안한 휴식을 돕는 마지막 수분 섭취</p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};