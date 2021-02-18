import Character from './Character';

export default class Zombie extends Character {
  constructor(name, type, health, level, attack = 40, defence = 10) {
    super(name, 'Zombie', health, level);
    this.attack = attack;
    this.defence = defence;
  }
}
