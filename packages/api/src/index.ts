import { sum } from '@mono/shared';

export const API = true;

const port = sum(3000, 1);

console.log(`Would listen on port ${port}...`);
