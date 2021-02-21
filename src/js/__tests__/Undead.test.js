import Undead from '../Undead';

test('should create undead character', () => {
  const undead = new Undead('Mike');
  const result = 'Undead';
  expect(undead.type).toBe(result);
});

test('should give an error about name length', () => {
  const result = 'Длина имени должна быть минимум 2 символа и максимум 10 символов';
  expect(() => {
    const undead = new Undead('M');
    return undead;
  }).toThrow(result);
});
