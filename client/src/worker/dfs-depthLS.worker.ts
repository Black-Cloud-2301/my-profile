import { DFSDepthLS } from '@components/ai-projects/ta-canh/dfs-depthLS';
import { expose } from 'comlink';

const worker = { DFSDepthLS };

export type DFSDepthLSWorker = typeof worker;

expose(worker);
