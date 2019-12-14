import { sum } from './math';

describe('math', () => {
  describe('sum', () => {
    it('should return 3 for 1+2', () => {
      expect(sum(1, 2)).toBe(3);
    });
  });
});
