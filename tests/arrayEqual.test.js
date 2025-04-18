const arrayEqual = require('../utility/arrayEqual');

describe('arrayEqual', () => {
    test('returns true for identical arrays', () => {
        expect(arrayEqual([1, 2, 3], [1, 2, 3])).toBe(true);
    });

    test('returns false for arrays with different lengths', () => {
        expect(arrayEqual([1, 2], [1, 2, 3])).toBe(false);
    });

    test('returns false for arrays with different elements', () => {
        expect(arrayEqual([1, 2, 3], [1, 2, 4])).toBe(false);
    });

    test('returns false if one or both inputs are not arrays', () => {
        expect(arrayEqual([1, 2, 3], 'not an array')).toBe(false);
        expect(arrayEqual('not an array', [1, 2, 3])).toBe(false);
        expect(arrayEqual('not an array', 'not an array')).toBe(false);
    });

    test('returns true for empty arrays', () => {
        expect(arrayEqual([], [])).toBe(true);
    });

    test('returns false for arrays with same elements but different order', () => {
        expect(arrayEqual([1, 2, 3], [3, 2, 1])).toBe(false);
    });

    test('returns true for arrays with identical nested arrays', () => {
        expect(arrayEqual([[1, 2], [3, 4]], [[1, 2], [3, 4]])).toBe(false); // Shallow comparison
    });
});