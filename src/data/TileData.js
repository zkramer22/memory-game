import bobomb from '../img/bobomb.png';
import boo from '../img/boo.png';
import capefeather from '../img/capefeather.png';
import iceflower from '../img/iceflower.png';
import mushroom from '../img/mushroom.png';
import piranha from '../img/piranha.png';
import shell from '../img/shell.png';
import starman from '../img/starman.png';

export const TILES = {
  0: {
    id: 0,
    name: 'Super Mushroom',
    type: 'Powerup',
    def: 'One of the first items found in Super Mario World. Eat this to become Super Mario and gain 1 extra health point. You can also break blocks!', 
    img: mushroom,
  },
  1: {
    id: 1,
    name: 'Starman',
    type: 'Powerup',
    def: "Enemies beware! Collect this to become invincible for 7 seconds, defeating all enemies on contact.",
    img: starman,
  },
  2: {
    id: 2,
    name: 'Ice Flower',
    type: 'Powerup',
    def: 'Brrrr...Collect the rare Ice Flower to become Ice Mario. Throw ice balls at enemies to freeze them for a short period.',
    img: iceflower,
  },
  3: {
    id: 3,
    name: 'Feather',
    type: 'Powerup',
    def: 'A crowd favorite. When Mario grabs a Feather, he wears a yellow cape, and can jump while sprinting to take flight!',
    img: capefeather,
  },
  4: {
    id: 4,
    name: 'Blue Shell',
    type: 'Hazard',
    def: 'Watch out! This spiky item will find you wherever you go, and knock you on your behind. Only certain items can counter this attack.',
    img: shell,
  },
  5: {
    id: 5,
    name: 'Boo',
    type: 'Enemy',
    def: 'Boo is too shy to move when Mario is looking, but when Mario\'s back is turned, Boo becomes a deadly enemy, chasing after Mario! Creepy...',
    img: boo,
  },
  6: {
    id: 6,
    name: 'Piranha Plant',
    type: 'Enemy',
    def: 'Yikes! This stationary, sometimes fire-breathing enemy lives in Warp Pipes and will pop out when Mario least expects it. Do NOT step on Piranha Plant!',
    img: piranha,
  },
  7: {
    id: 7,
    name: 'Bob-omb',
    type: 'Enemy',
    def: 'When Bob-omb activates, Mario has 5 seconds until he goes KABOOM. Mario can pick up and throw Bob-omb at other enemies too, but...better be quick about it!',
    img: bobomb,
  },
};

export const buildDeck = tiles => {
  let arr = []
  Object.entries(tiles).forEach(([key, val]) => {
    const item = { 
      id: key, 
      img: val.img 
    }
    arr.push(item, item)
  })
  
  return shuffler(arr)
}

export const shuffler = arr => {
  var i, j, temp;
  for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
  }
  return arr;
}
