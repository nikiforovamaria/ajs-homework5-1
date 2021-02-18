import Bowman from './Bowman';
import Daemon from './Daemon';
import Magician from './Magician';
import Swordsman from './Swordsman';
import Undead from './Undead';
import Zombie from './Zombie';

console.log('worked');

const bowman = new Bowman('Mike');
const daemon = new Daemon('Luke');
const magician = new Magician('Paul');
const swordsman = new Swordsman('Dany');
const undead = new Undead('Felix');
const zombie = new Zombie('Tom');

console.log(bowman, daemon, magician, swordsman, undead, zombie);
