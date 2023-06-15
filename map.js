/*
 * Reglas:
 * El final de cada nivel debe ser el inicio del siguiente
*/

const emojis = {
  '-': ' ',
  'O': '🚪',
  'X': '🎄',
  'P': '🌴',
  'C': '🌵',
  'I': '🎁',
  'PLAYER': '🎅',
  'BOMB_COLLISION': '🔥',
  'GAME_OVER': '☠',
  'WIN': '🎇',
};

const maps = [];
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

// maps.push(`
//   O--PPPPPPP
//   P--PPPPPPP
//   PP----PPPP
//   P--PP-PPPP
//   P-PPP--PPP
//   P-PPPP-PPP
//   PP--PP--PP
//   PP--PPP-PP
//   PPPP---IPP
//   PPPPPPPPPP
// `);

// maps.push(`
//   I-----CCCC
//   CCCCC-CCCC
//   CC----CCCC
//   CC-CCCCCCC
//   CC-----CCC
//   CCCCCC-CCC
//   CC-----CCC
//   CC-CCCCCCC
//   CC-----OCC
//   CCCCCCCCCC
// `);

// maps.push(`
//   O---------
//   ---C-C---- 
//   CC-C--C-CC 
//   --CC---C-- 
//   -CC-C---CC 
//   -C-------C 
//   C--C--C-C- 
//   -CC-C--CCC 
//   C----C---I 
//   CCC-C-CCCC 
// `);

// maps.push(`
//   I--PPPPPPP
//   P--PPPPPPP
//   P------PPP
//   P--PP--PPP
//   P--PP--PPP
//   P--PP--PPP
//   P------PPP
//   PPPP------
//   PPPPPPPPPO
//   PPPPPPPPPP
// `);

// maps.push(`
//   O--C------
//   C---CC---C
//   C--CC-C-C-
//   C------CC-
//   C-CCC--CCC
//   C---C--CC-
//   C---CC--CC
//   C--------C
//   C---C----C
//   CCCCCCICCC
// `);

// maps.push(`
//   I---PPPPPP
//   -PPPPPPP--
//   ---------- 
//   ---PP-PP--
//   ---PP-PPPP
//   --PP----PP
//   P--PPP-PPP
//   P-PP---PPP
//   P-------PP
//   PPPPPPOPPP
// `);

// maps.push(`
//   O--CC--CCC
//   CC-CC--CCC
//   C-----CCCC
//   CC-CC-CCCC
//   C----CCCCC
//   CCCC--CCCC
//   CCCCC-CCIC
//   CCC------C
//   CC---C---C
//   CCCCCCCCCC
// `);

// maps.push(`
//   I--PPPPPPP
//   P--PPPPPPP
//   PP----PPPP
//   P--PP-PPPP
//   P-PPP--PPP
//   P-PPPP-PPP
//   PP--PP--OP
//   PP--PPP-PP
//   PPPP----PP
//   PPPPPPPPPP
// `);

// maps.push(`
//   O----CCCCC
//   CC-CCCC-CC
//   C----C---C
//   CCCC-C-CCC
//   C----C---C
//   C-CC-C-CCC
//   C----C---C
//   CCCC-C-CCC
//   C--------C
//   CCCCCCCICC
// `);