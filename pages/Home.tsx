import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { HEADLINES, IMAGES, LINKS } from '../constants';
import { PageRoutes } from '../types';
import { ChevronRight, Droplets, ShieldCheck, FlaskConical } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* S1: Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
            {/* Background Image / Overlay */}
           <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-slate-900/40 to-slate-900 z-10"></div>
           <img 
             src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=2500&auto=format&fit=crop" 
             alt="Water background" 
             className="w-full h-full object-cover opacity-60"
           />
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            {HEADLINES.HERO}
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 whitespace-pre-line leading-relaxed font-light">
            {HEADLINES.SUB_HERO}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={LINKS.COUPANG} external variant="primary" size="lg" className="shadow-slate-500/20">
              쿠팡에서 구매하기
            </Button>
            <Link to={PageRoutes.CONTACT}>
               <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                체험팩 / 제휴 문의
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* S2: Price Defense (Why Expensive) */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">"물인데 왜 비싼가요?"</h2>
          <div className="space-y-8">
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-300">
              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                "와즈라는 수초 만에 끝나는 일반적인 여과 방식으로 만들어지지 않습니다."
              </p>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-slate-50 rounded-xl">
                   <h3 className="font-bold text-slate-800 mb-2">연구 비용</h3>
                   <p className="text-slate-600 text-sm">40년 유체 역학 연구와 75개 특허 유지를 위한 비용이 반영되어 있습니다.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-xl">
                   <h3 className="font-bold text-slate-800 mb-2">공정 시간</h3>
                   <p className="text-slate-600 text-sm">대량 생산의 효율성보다는, 가장 순수한 상태를 유지하기 위한 느린 공정을 택했습니다.</p>
                </div>
             </div>
             <p className="text-slate-500 text-sm mt-8">
               우리는 물을 파는 것이 아니라, <br className="md:hidden"/>오랜 연구의 결과를 공유합니다.
             </p>
          </div>
        </div>
      </section>

      {/* S3: Founder Teaser */}
      <section className="py-20 bg-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20">
            {/* Reduced width from md:w-1/2 to md:w-5/12 and added max-w-sm to control image size */}
            <div className="w-full md:w-5/12 lg:w-1/3 relative max-w-sm">
               <div className="aspect-[4/5] bg-slate-200 rounded-lg overflow-hidden relative shadow-md">
                  {/* Founder Image with Gradient */}
                  <img src={IMAGES.FOUNDER} alt="Dr. Kim Bu-yeol" className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                     <p className="text-sm uppercase tracking-widest opacity-80 mb-1">Founder</p>
                     <p className="text-2xl font-bold">김부열 박사</p>
                  </div>
               </div>
               {/* Badge - adjusted position for smaller container */}
               <div className="absolute -top-4 -right-4 md:top-6 md:-right-6 bg-white p-4 md:p-6 rounded-full shadow-xl w-24 h-24 md:w-32 md:h-32 flex flex-col items-center justify-center z-10 border-4 border-slate-50">
                  <span className="text-2xl md:text-3xl font-bold text-blue-900 block">75</span>
                  <span className="text-[10px] md:text-xs text-slate-500 font-medium">PATENTS</span>
               </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                공기에서 물로,<br/>유체의 본질을 탐구하다
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                "깨끗한 공기를 만드는 기술이 있다면, 완벽한 물을 만드는 기술도 존재해야 합니다."
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                김부열 박사는 평생을 유체의 흐름과 정화 기술에 바쳤습니다. 
                75개의 국내외 특허는 효능을 과시하기 위함이 아닌, 
                연구의 깊이를 증명하는 기록입니다.
              </p>
              <Link to={PageRoutes.STORY}>
                <Button variant="outline" className="group">
                  연구 스토리 더보기 <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform"/>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* S5: Product Snapshot / Routine */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-16">Premium Water Routine</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6">
              <div className="w-16 h-16 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center mb-6">
                <FlaskConical size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Pure Technology</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                특허 받은 공조 기술의 원리를<br/>수처리 공정에 적용하여<br/>불순물을 최소화합니다.
              </p>
            </div>

            <div className="flex flex-col items-center p-6">
              <div className="w-16 h-16 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Control</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                연구실 수준의 엄격한 기준으로<br/>한정된 수량만 생산하여<br/>품질을 유지합니다.
              </p>
            </div>

            <div className="flex flex-col items-center p-6">
              <div className="w-16 h-16 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center mb-6">
                <Droplets size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Daily Ritual</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                기상 직후와 취침 전,<br/>내 몸을 위한 프리미엄 워터로<br/>하루를 채우세요.
              </p>
            </div>
          </div>
        </div>
      </section>

       {/* S6: CTA Bar */}
       <section className="py-16 bg-slate-900 text-white">
         <div className="max-w-4xl mx-auto px-4 text-center">
           <h2 className="text-2xl md:text-3xl font-bold mb-8">당신의 일상에 연구의 가치를 더하세요.</h2>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href={LINKS.COUPANG} external variant="secondary" size="lg" className="w-full sm:w-auto min-w-[200px]">
                쿠팡 공식몰 바로가기
              </Button>
              <Link to={PageRoutes.CONTACT} className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full min-w-[200px] border-slate-600 text-slate-300 hover:text-white hover:bg-slate-800">
                  제휴 및 대량구매 문의
                </Button>
              </Link>
           </div>
           <p className="mt-6 text-sm text-slate-500">
             * 체험팩 이벤트는 매월 조기 마감될 수 있습니다.
           </p>
         </div>
       </section>
    </div>
  );
};