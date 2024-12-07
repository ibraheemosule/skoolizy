import { encrypt, decrypt } from '~utils';

describe('CryptoJS Encrypt/Decrypt', () => {
  const plainText = 'za-testing';

  test('encrypt() should return a valid encrypted string', () => {
    const encryptedText = encrypt(plainText);

    expect(typeof encryptedText).toBe('string');
    expect(encryptedText).not.toBe(plainText);
  });

  test('decrypt() should return the original plaintext', () => {
    const encryptedText = encrypt(plainText);
    const decryptedText = decrypt(encryptedText);

    expect(decryptedText).toBe(plainText);
  });
});
