import { getDomain, getUserData, setUserData } from './index';

describe('Utils', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null),
      },
      writable: true,
    });
  });

  test('getDomain called with url', () => {
    const url = 'https://www.google.com/search?q=test';
    expect(getDomain(url)).toBe('google.com');
  });

  test('getUserData called', () => {
    expect(getUserData()).toMatchObject({});
  });

  test('setUserData called', () => {
    const newUserData = {
      '12345': {
        hide: true,
        points: 100,
      },
    };
    expect(setUserData(newUserData)).toBeUndefined();
  });
});
