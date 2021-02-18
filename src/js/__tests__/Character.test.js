import Character from '../Character';

test('should create bowman character', () => {
  const bowman = new Character('Mike', 'Bowman');
  const result = 'Mike';
  expect(bowman.name).toBe(result);
});

test('should give an error about name length', () => {
  const bowman = new Character('M', 'Bowman');
  const result = 'Длина имени должна быть минимум 2 символа и максимум 10 символов';
  expect(bowman).toThrow(result);
});

test('should give an error about type', () => {
  const bowman = new Character('Mike', 'Bowmann');
  const result = 'Тип должен быть один из перечисленных вариантов: Bowman, Swordsman, Magician, Daemon, Undead, Zombie';
  expect(bowman).toThrow(result);
});
