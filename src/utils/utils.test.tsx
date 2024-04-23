import { capitalizeChar } from './format';

describe('tests for formatting strings', () => {
  test('validate capitalizeChar function formats string as expected', () => {
    const result = capitalizeChar('i_am_just_for_test');
    expect(result).toBe('I Am Just For Test');
  });

  test('numbers argument should return empty', () => {
    const result = capitalizeChar(12398 as unknown as string);
    expect(result).toBe('');
  });

  test('function should return words separated by space', () => {
    const result = capitalizeChar("Can this / work? here / too_let's_see... ");
    expect(result).toBe("Can This / Work? Here / Too Let's See... ");
  });

  test('function should not capitalize letter that follows a backslash', () => {
    const result = capitalizeChar('/can i do this');
    expect(result).toBe('/can I Do This');
  });
});
