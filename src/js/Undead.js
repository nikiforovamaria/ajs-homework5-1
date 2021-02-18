import Character from './Character';

export default class Undead extends Character {
  constructor(name, type, health, level, attack = 25, defence = 25) {
    super(name, 'Undead', health, level);
    this.attack = attack;
    this.defence = defence;
  }
}
