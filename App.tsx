
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PhoneMockup } from './components/PhoneMockup';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans overflow-x-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://iili.io/Ky9MYcG.png"
          alt="A lush, beautiful garden path with vibrant flowers"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent"></div>
      </div>
      
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <Hero />
              <div className="flex items-center justify-center h-full">
                <PhoneMockup />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
