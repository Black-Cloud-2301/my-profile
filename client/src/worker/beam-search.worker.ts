import { BeamSearch } from '@components/ai-projects/ta-canh/beam-search';
import { expose } from 'comlink';

const worker = { BeamSearch };

export type BeamSearchWorker = typeof worker;

expose(worker);
