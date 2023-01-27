const {isTrue} = require('./App');

describe('isTrue', () => {
    test('returns true for input true', () => {
        expect(isTrue(true)).toBe(true);
    });

    test('returns false for input false', () => {
        expect(isTrue(false)).toBe(false);
    });
});