
import React from 'react';
import { CameraIcon } from './icons/CameraIcon';
import { UploadIcon } from './icons/UploadIcon';

export const PhoneMockup: React.FC = () => {
  return (
    <div className="relative mx-auto border-gray-800 bg-gray-800 border-[12px] rounded-[2.5rem] h-[550px] w-[270px] shadow-2xl">
      <div className="w-[120px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-10"></div>
      <div className="h-[40px] w-[3px] bg-gray-800 absolute -start-[15px] top-[72px] rounded-s-lg"></div>
      <div className="h-[40px] w-[3px] bg-gray-800 absolute -start-[15px] top-[124px] rounded-s-lg"></div>
      <div className="h-[60px] w-[3px] bg-gray-800 absolute -end-[15px] top-[140px] rounded-e-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-[#F9FEFB]">
        <div className="flex flex-col h-full p-4 pt-6 text-gray-800">
          
          {/* Header */}
          <header className="flex items-center gap-2">
            <img src="https://iili.io/KRbVxYg.png" alt="Naptah Logo" className="h-7 w-7" />
            <div>
                <p className="font-bold text-sm text-[#0A3825]">Naptah</p>
                <p className="text-xs text-gray-500">Plant Disease Detection</p>
            </div>
          </header>
          
          {/* Main Content */}
          <main className="flex-grow flex flex-col justify-center items-center text-center mt-4">
            <h2 className="font-bold text-gray-800 text-lg">Scan Your Plant</h2>
            <p className="text-xs text-gray-500 mt-1">AI-powered disease detection</p>
            
            <div className="my-4 w-full aspect-square rounded-2xl overflow-hidden">
              <img src="https://iili.io/KRbOIKQ.png" alt="Monstera plant illustration" className="w-full h-full object-cover"/>
            </div>

            <div className="grid grid-cols-2 gap-3 w-full text-xs font-semibold">
              <button className="flex items-center justify-center gap-2 py-3 bg-[#0A3825] text-white rounded-lg">
                <CameraIcon className="w-4 h-4" />
                Take Photo
              </button>
              <button className="flex items-center justify-center gap-2 py-3 bg-white text-[#0A3825] border border-gray-200 rounded-lg">
                <UploadIcon className="w-4 h-4" />
                Upload Image
              </button>
            </div>
          </main>
          
           {/* Footer Stats */}
           <footer className="grid grid-cols-3 gap-2 text-center mt-4">
                <div>
                    <p className="font-bold text-[#0A3825] text-base">95%</p>
                    <p className="text-gray-500 text-[10px] leading-tight">Accuracy</p>
                </div>
                 <div>
                    <p className="font-bold text-[#0A3825] text-base">50+</p>
                    <p className="text-gray-500 text-[10px] leading-tight">Diseases</p>
                </div>
                 <div>
                    <p className="font-bold text-[#0A3825] text-base">1 Sec</p>
                    <p className="text-gray-500 text-[10px] leading-tight">Avg. Time</p>
                </div>
           </footer>
        </div>
      </div>
    </div>
  );
};