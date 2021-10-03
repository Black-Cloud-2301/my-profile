import { BestFirstSearch } from '@components/ai-projects/ta-canh/best-first-search';
import { expose } from 'comlink';

const worker = { BestFirstSearch };

export type BestFirstSearchWorker = typeof worker;

expose(worker);
