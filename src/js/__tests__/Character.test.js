import Character from '../Character';

test('should create bowman character', () => {
  const bowman = new Character('Mike', 'Bowman');
  const result = 'Mike';
  expect(bowman.name).toBe(result);
});

test('should give an error about name length', () => {
  const result = 'Длина имени должна быть минимум 2 символа и максимум 10 символов';
  expect(() => {
    const bowman = new Character('M', 'Bowman');
    return bowman;
  }).toThrow(result);
});

test('should give an error about type', () => {
  const result = 'Тип должен быть один из перечисленных вариантов: Bowman, Swordsman, Magician, Daemon, Undead, Zombie';
  expect(() => {
    const bowman = new Character('Mike', 'Bowmann');
    return bowman;
  }).toThrow(result);
});
