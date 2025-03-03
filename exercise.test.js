import { reverseString } from './exercise.js';

test('reverseString reverses the string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
    // add more tests here
});
