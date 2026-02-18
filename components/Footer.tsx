import React from 'react';
import { COMPLIANCE } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-lg font-bold mb-4">WAZRA LABS</h3>
            <p className="text-sm mb-4 leading-relaxed">
              김부열 박사의 유체 역학 연구를 기반으로<br />
              본질에 가까운 물을 연구하고 개발합니다.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Customer Center</h4>
            <p className="text-sm mb-1">운영시간: 평일 10:00 - 17:00</p>
            <p className="text-sm mb-1">점심시간: 12:00 - 13:00</p>
            <p className="text-sm">문의: contact@wazra.co.kr</p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">이용약관</a></li>
              <li><a href="#" className="hover:text-white">개인정보처리방침</a></li>
              <li><a href="#" className="hover:text-white">사업자정보확인</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8">
           {/* COMPLIANCE WARNING BLOCK */}
          <div className="bg-slate-800/50 p-4 rounded-lg mb-6 border border-slate-700">
            <p className="text-xs md:text-sm text-slate-300 text-center font-medium leading-relaxed">
              {COMPLIANCE.DISCLAIMER}
            </p>
          </div>

          <p className="text-xs text-slate-500 text-center">
            &copy; {new Date().getFullYear()} WAZRA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};