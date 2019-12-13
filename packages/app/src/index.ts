import { SHARED_CONFIG } from '@mono/shared';

const APP = true;

console.log(SHARED_CONFIG);

export function times(a: number, b: number): number {
  let result = 0;

  for (let i = 0; i < b; i++) {
    result = result + a;
  }

  return result;
}
