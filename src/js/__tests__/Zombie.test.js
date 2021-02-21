import Zombie from '../Zombie';

test('should create zombie character', () => {
  const zombie = new Zombie('Mike');
  const result = 'Zombie';
  expect(zombie.type).toBe(result);
});

test('should give an error about name length', () => {
  const result = 'Длина имени должна быть минимум 2 символа и максимум 10 символов';
  expect(() => {
    const zombie = new Zombie('M', 'Bowman');
    return zombie;
  }).toThrow(result);
});
