import Magician from '../Magician';

test('should create magician character', () => {
  const magician = new Magician('Mike');
  const result = 'Magician';
  expect(magician.type).toBe(result);
});

test('should give an error about name length', () => {
  const result = 'Длина имени должна быть минимум 2 символа и максимум 10 символов';
  expect(() => {
    const magician = new Magician('M');
    return magician;
  }).toThrow(result);
});
