import Swordsman from '../Swordsman';

test('should create swordsman character', () => {
  const swordsman = new Swordsman('Mike');
  const result = 'Swordsman';
  expect(swordsman.type).toBe(result);
});

test('should give an error about name length', () => {
  const result = 'Длина имени должна быть минимум 2 символа и максимум 10 символов';
  expect(() => {
    const swordsman = new Swordsman('M');
    return swordsman;
  }).toThrow(result);
});
