
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="https://iili.io/KRbVxYg.png" alt="Naptah Logo" className="h-8 w-8" />
          <span className="text-2xl font-bold text-white">Naptah</span>
        </div>
      </nav>
    </header>
  );
};