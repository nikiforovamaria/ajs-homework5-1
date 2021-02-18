import Daemon from '../Daemon';

test('should create daemon character', () => {
  const daemon = new Daemon('Mike');
  const result = 'Daemon';
  expect(daemon.type).toBe(result);
});

test('should give an error about name length', () => {
  const daemon = new Daemon('M');
  const result = 'Длина имени должна быть минимум 2 символа и максимум 10 символов';
  expect(daemon).toThrow(result);
});
