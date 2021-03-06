import Bowman from '../Bowman';

test('should create bowman character', () => {
  const bowman = new Bowman('Mike');
  const result = 'Bowman';
  expect(bowman.type).toBe(result);
});

test('should give an error about name length', () => {
  const result = 'Длина имени должна быть минимум 2 символа и максимум 10 символов';
  expect(() => {
    const bowman = new Bowman('M');
    return bowman;
  }).toThrow(result);
});
