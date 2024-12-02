import { encrypt, decrypt } from '~utils/encryption';

describe('CryptoJS Encrypt/Decrypt', () => {
  const secretKey = 'key123';
  const plainText = 'za-testing';

  test('encrypt() should return a valid encrypted string', () => {
    const encryptedText = encrypt(plainText, secretKey);

    expect(typeof encryptedText).toBe('string');
    expect(encryptedText).not.toBe(plainText);
  });

  test('decrypt() should return the original plaintext', () => {
    const encryptedText = encrypt(plainText, secretKey);
    const decryptedText = decrypt(encryptedText, secretKey);

    expect(decryptedText).toBe(plainText);
  });

  test('decrypt() with a wrong key should return error', () => {
    const encryptedText = encrypt(plainText, secretKey);
    const wrongKey = 'wrongKey123';

    const decryptedText = decrypt(encryptedText, wrongKey);
    expect(decryptedText).not.toBe(plainText);
  });
});
