"use strict";

/*
 * Reglas:
 * El final de cada nivel debe ser el inicio del siguiente
 */

const emojis = {
  '-': ' ',
  'O': '🚪',
  'X': '💣',
  'I': '💾',
  'PLAYER': '🤖',
  'BOMB_COLLISION': '💥',
  'GAME_OVER': '👎',
  'WIN': '🏆',
  'HEART': '❤️',
};

const maps = [];

// Mapa 1
maps.push(`
  I-----XXXX
  XXXXX-XXXX
  XX----XXXX
  XX-XXXXXXX
  XX-----XXX
  XXXXXX-XXX
  XX-----XXX
  XX-XXXXXXX
  XX-----OXX
  XXXXXXXXXX
`);
// Mapa 2
maps.push(`
  O-----XXXXXX
  XXXXXX-XXXXX
  XXX----XXXXX
  XXX-XXXXXXXX
  XXX-----XXXX
  XXXXXXX-XXXX
  XXX-----XXXX
  XXX-XXXXXXXX
  XXX-----IXXX
  XXXXXXXXXXXX
`);

// Mapa 3
maps.push(`
  O-XXXXXXXXXX
  X------XXXXX
  X---X---XXXX
  XXX-X-XXXXXX
  XX--X--XXXXX
  XX-XXXX-XXXX
  XX------XXXX
  XXX-XXXXXXXX
  XXX-----IXXX
  XXXXXXXXXXXX
`);

// Mapa 4
maps.push(`
  I-XXXXXXXXXX
  X------XXXXX
  X---X---XXXX
  XXX-X-XXXXXX
  XX--X--XXXXX
  XX-XXXX-XXXX
  XX------XXXX
  XXX-XXXXXXXX
  XXX-----OXXX
  XXXXXXXXXXXX
`);

// Mapa 5
maps.push(`
  XXXXXXXXXXX
  XI-------XX
  XXXX-XXX-XX
  XXXX-XX--XX
  XXX--XX-XXX
  XXX-XXX-XXX
  XX-XXX--XXX
  XX-XXXXX-XX
  XX-------OX
  XXXXXXXXXXX 
`);

// Mapa 6
maps.push(`
  XXXXXXXXXXX
  XO-------XX
  XXXX-XXX-XX
  XXXX-XX--XX
  XXX--XX-XXX
  XXX-XXX-XXX
  XX-XXX--XXX
  XX-XXXXX-XX
  XX-------IX
  XXXXXXXXXXX 
`);

// Mapa 7
maps.push(`
  IXXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  OXXXXXXXXX
`);

// Mapa 8
maps.push(`
  O--XXXXXXX
  X--XXXXXXX
  XX----XXXX
  X--XX-XXXX
  X-XXX--XXX
  X-XXXX-XXX
  XX--XX--XX
  XX--XXX-XX
  XXXX---IXX
  XXXXXXXXXX
  `);

// Mapa 9
maps.push(`
  I-----XXXX
  XXXXX-XXXX
  XX----XXXX
  XX-XXXXXXX
  XX-----XXX
  XXXXXX-XXX
  XX-----XXX
  XX-XXXXXXX
  XX-----OXX
  XXXXXXXXXX
`);

// Mapa 10
maps.push(`
  IXXXXX---I
  X--XXX-XXX
  XX-XXX--XX
  XX-XXXX-XX
  XX-XOXX-XX
  XX-X-XX-XX
  XX------XX
  X-XXXX--XX
  X-XXXX-XXX
  I-XXXXX-XI
`);

// Mapa 11
maps.push(`
  O-----XXXXXX
  X-XXXX-XXXXX
  X-X----XXXXX
  X-X-XXXXXXXX
  X-X-----XXXX
  XX-XXXX-XXXX
  XXX---I-XXXX
  XXXX-XXXXXXX
  XXXXXXXXXXXX
  XXXXXXXXXXXX
`);

// Mapa 12
maps.push(`
I-----XXXXXX
X-XXXX-XXXXX
X-X----XXXXX
X-X-XXXXXXXX
X-X-----XXXX
XX-XXXX-XXXX
XXX---O-XXXX
XXXX-XXXXXXX
XXXXXXXXXXXX
XXXXXXXXXXXX
`);