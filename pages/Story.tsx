import React from 'react';
import { TIMELINE_DATA, IMAGES } from '../constants';

export const Story: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Intro */}
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-blue-900 font-bold tracking-widest uppercase text-sm mb-4 block">Our Philosophy</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">연구자의 시선으로 물을 봅니다</h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            화려한 마케팅이나 과장된 효능 대신, <br/>
            데이터와 특허, 그리고 오랜 시간 축적된 연구 기록으로 이야기합니다.
          </p>
        </div>
      </section>

      {/* Founder Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-start justify-center">
                 <div className="w-full lg:w-1/3 max-w-sm">
                    <img src={IMAGES.FOUNDER} alt="Dr. Kim" className="w-full rounded-lg shadow-xl grayscale hover:grayscale-0 transition-all duration-500" />
                    <div className="mt-6 text-center lg:text-left">
                        <h3 className="text-xl font-bold text-slate-900">김부열 박사</h3>
                        <p className="text-slate-500 text-sm">유체 역학 연구원 / 공학 박사</p>
                    </div>
                 </div>
                 <div className="w-full lg:w-2/3">
                    <h2 className="text-2xl font-bold mb-6 text-slate-900">"왜 공기를 연구하던 사람이 물을 연구합니까?"</h2>
                    <div className="space-y-6 text-slate-600 leading-relaxed">
                        <p>
                            많은 분들이 묻습니다. 저는 40년 가까이 보이지 않는 공기의 흐름을 제어하고, 
                            오염 물질을 걸러내는 필터 기술을 연구해왔습니다.
                        </p>
                        <p>
                            공기와 물은 '유체(Fluid)'라는 관점에서 본질이 같습니다. 
                            공기 정화의 핵심 기술인 미세 입자 제어와 유체 역학 메커니즘은 
                            물을 정수하고 다루는 과정에도 그대로 적용될 수 있다는 확신이 있었습니다.
                        </p>
                        <p>
                            기존의 정수 방식이 단순히 '걸러내는' 것에 집중했다면, 
                            저의 연구는 물 분자가 어떻게 흐르고, 어떻게 보존되어야 
                            가장 자연 상태에 가까운지 고민하는 과정이었습니다.
                        </p>
                        <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-900 mt-8">
                            <p className="text-slate-800 font-medium italic">
                                "와즈라(WAZRA)는 그 40년 연구의 정답이 아니라, 
                                제가 도달한 현재의 결론입니다."
                            </p>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Research Timeline</h2>
            <div className="space-y-12">
                {TIMELINE_DATA.map((item, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-12 group">
                        <div className="md:w-32 flex-shrink-0 flex md:flex-col items-center md:items-end">
                            <span className="text-2xl font-bold text-blue-400">{item.year}</span>
                            <div className="hidden md:block w-px h-full bg-slate-700 mt-4 mx-auto md:mr-0 md:ml-auto"></div>
                        </div>
                        <div className="pb-8 border-b border-slate-800 md:border-none flex-1">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors">{item.title}</h3>
                            <p className="text-slate-400">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};