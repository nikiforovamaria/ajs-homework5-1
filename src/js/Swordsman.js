import Character from './Character';

export default class Swordsman extends Character {
  constructor(name, type, health, level, attack = 40, defence = 10) {
    super(name, 'Swordsman', health, level);
    this.attack = attack;
    this.defence = defence;
  }
}
