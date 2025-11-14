
import React from 'react';
import { PlantAnalysis } from '../types';
import { CheckCircleIcon } from './icons/CheckCircleIcon';
import { AlertTriangleIcon } from './icons/AlertTriangleIcon';
import { SyringeIcon } from './icons/SyringeIcon';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';

interface AnalysisResultProps {
  result: PlantAnalysis;
  imagePreview: string;
  onReset: () => void;
}

const InfoCard: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
    <div className="bg-white/5 p-4 rounded-lg">
        <div className="flex items-center gap-3 mb-2">
            {icon}
            <h3 className="text-lg font-semibold text-emerald-300">{title}</h3>
        </div>
        <div className="text-sm text-gray-300 space-y-2 prose prose-sm prose-invert max-w-none">
            {children}
        </div>
    </div>
);


export const AnalysisResult: React.FC<AnalysisResultProps> = ({ result, imagePreview, onReset }) => {
  const confidenceColor = result.confidence === 'High' ? 'text-green-400' : result.confidence === 'Medium' ? 'text-yellow-400' : 'text-red-400';

  return (
    <div className="w-full max-w-md mx-auto bg-gray-800/50 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-6 flex flex-col animate-fade-in">
        <div className="relative">
            <img src={imagePreview} alt="Analyzed plant" className="rounded-xl w-full h-48 object-cover mb-4" />
            {result.isHealthy ? (
                 <div className="absolute top-2 right-2 flex items-center gap-2 bg-green-500/80 text-white text-xs font-bold px-2 py-1 rounded-full">
                    <CheckCircleIcon className="w-4 h-4" />
                    HEALTHY
                 </div>
            ) : (
                <div className="absolute top-2 right-2 flex items-center gap-2 bg-red-500/80 text-white text-xs font-bold px-2 py-1 rounded-full">
                    <AlertTriangleIcon className="w-4 h-4" />
                    DISEASE DETECTED
                 </div>
            )}
        </div>
      
      {result.isHealthy ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-400">Plant Appears Healthy!</h2>
          <p className="text-gray-300 mt-2">No diseases detected. Keep up the great work!</p>
          {result.prevention.length > 0 && (
             <InfoCard title="Preventative Care Tips" icon={<ShieldCheckIcon className="w-5 h-5 text-emerald-300"/>}>
                 <ul className="list-disc list-inside">
                    {result.prevention.map((tip, index) => <li key={index}>{tip}</li>)}
                </ul>
            </InfoCard>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <p className="text-sm text-emerald-400 font-medium">{result.diseaseName}</p>
            <h2 className="text-2xl font-bold text-white">Analysis Complete</h2>
            {result.confidence && <p className={`text-sm font-medium ${confidenceColor}`}>Confidence: {result.confidence}</p>}
          </div>

          <InfoCard title="Symptoms" icon={<AlertTriangleIcon className="w-5 h-5 text-emerald-300"/>}>
            <ul className="list-disc list-inside">
                {result.symptoms.map((symptom, index) => <li key={index}>{symptom}</li>)}
            </ul>
          </InfoCard>
          
          <InfoCard title="Treatment Plan" icon={<SyringeIcon className="w-5 h-5 text-emerald-300"/>}>
            <ul className="list-disc list-inside">
                {result.treatment.map((step, index) => <li key={index}>{step}</li>)}
            </ul>
          </InfoCard>

          <InfoCard title="Prevention" icon={<ShieldCheckIcon className="w-5 h-5 text-emerald-300"/>}>
            <ul className="list-disc list-inside">
                {result.prevention.map((tip, index) => <li key={index}>{tip}</li>)}
            </ul>
          </InfoCard>
        </div>
      )}
        <button onClick={onReset} className="mt-6 w-full px-6 py-2 bg-gray-600/50 text-white font-semibold rounded-full hover:bg-gray-500/50 transition-colors">
            Analyze Another Plant
        </button>
    </div>
  );
};
