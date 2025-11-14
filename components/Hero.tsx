import React, { useState, useEffect } from 'react';
import { DownloadIcon } from './icons/DownloadIcon';

const phrases = ["Personal Doctor", "Community Center", "Marketplace Center", "Professional Expert"];
const typingSpeed = 150;
const deletingSpeed = 75;
const pauseDuration = 2000;

export const Hero: React.FC = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeoutId: number;
    
    if (isDeleting) {
      if (text === '') {
        timeoutId = window.setTimeout(() => {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 500); // Pause before typing new word
      } else {
        timeoutId = window.setTimeout(() => {
          setText(text.slice(0, -1));
        }, deletingSpeed);
      }
    } else { // isTyping
      const currentPhrase = phrases[phraseIndex];
      if (text === currentPhrase) {
        timeoutId = window.setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      } else {
        timeoutId = window.setTimeout(() => {
          setText(currentPhrase.slice(0, text.length + 1));
        }, typingSpeed);
      }
    }

    return () => window.clearTimeout(timeoutId);
  }, [text, isDeleting, phraseIndex]);


  return (
    <div className="flex flex-col justify-center text-center lg:text-left p-8 rounded-2xl bg-black/30 backdrop-blur-xl border border-white/10 shadow-2xl">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight h-28 sm:h-32 md:h-36">
        Get Your Plant's
        <br />
        <span className="text-emerald-400 whitespace-nowrap">{text}</span>
        <span className="animate-blink border-r-4 border-emerald-400 ml-1"></span>
      </h1>
      <p className="mt-4 text-lg text-gray-300 max-w-lg mx-auto lg:mx-0">
        Download the Naptah Android app to instantly identify plant diseases. Get expert solutions and treatment plans right on your phone.
      </p>
      <div className="mt-8 flex flex-col items-center lg:items-start">
        <a
          href="https://www.dropbox.com/scl/fi/n3woch1c2taqzh6f83i1s/Naptah-v-0.1.apk?rlkey=3shrfidw6vfuvgixfua8rcaa6&st=4fljk4aw&dl=1"
          download
          className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-emerald-500 text-white font-bold text-lg rounded-lg hover:bg-emerald-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-300 shadow-lg"
        >
            <DownloadIcon className="h-6 w-6" />
            <span>Download APK</span>
        </a>
        <p className="mt-3 text-sm text-gray-400">Version 0.1 | For Android devices</p>
      </div>
    </div>
  );
};