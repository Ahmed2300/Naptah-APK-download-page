
export interface PlantAnalysis {
  isHealthy: boolean;
  diseaseName: string | null;
  confidence: 'High' | 'Medium' | 'Low' | null;
  symptoms: string[];
  treatment: string[];
  prevention: string[];
}
