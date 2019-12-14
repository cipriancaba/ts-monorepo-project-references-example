import { times } from './index';

describe('math', () => {
  describe('times', () => {
    it('should return 12 for 3*4', () => {
      expect(times(3, 4)).toBe(12);
    });
  });
});
