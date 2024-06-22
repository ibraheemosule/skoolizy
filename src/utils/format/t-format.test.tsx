import { vi } from 'vitest';
import { capitalizeChar, formatDate } from '.';

const date = new Date('2022-02-23T09:43:03.000Z');
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

describe('tests for formatting date and time', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  test('time should be in a proper format', () => {
    vi.setSystemTime(date);
    const result = formatDate('2022-02-23T00:43:03.000Z').getTime;
    expect(result).toBe('1:43am');
  });
  test('noon time should be formatted properly', () => {
    const result = formatDate('2022-02-23T12:43:03.000Z').getTime;
    expect(result).toBe('1:43pm');
  });
  test('month should be formatted properly in the date', () => {
    const result = formatDate('2022-12-23T12:43:03.000Z').getDate;
    expect(result).toBe('23/12/2022');
  });
  test('invalid values should return current date and time', () => {
    vi.setSystemTime(date);
    expect(formatDate('[]')).toStrictEqual(
      formatDate('2022-02-23T09:43:03.000Z')
    );
    expect(formatDate('')).toStrictEqual(
      formatDate('2022-02-23T09:43:03.000Z')
    );
    expect(formatDate('123135636346467757662')).toStrictEqual(
      formatDate('2022-02-23T09:43:03.000Z')
    );
  });
});
