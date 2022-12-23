import { types, constant, API_URL } from './constant';

describe('Constant', () => {
  test('Constant Object is Defined', () => {
    expect(types).toBeDefined();
    expect(constant).toBeDefined();
    expect(API_URL).toBeDefined();
  });
});
