import { ArtificialIntelligence } from '@components/ai-projects/ta-canh/artificial-intelligence';
import { expose } from 'comlink';

const worker = { ArtificialIntelligence };

export type ArtificialIntelligenceWorker = typeof worker;

expose(worker);
