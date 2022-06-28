import { Preloads } from "../scenes/preloads.js";
import { MainMenu } from "../scenes/mainmenu.js";
import { LevelSelect } from "../scenes/level_select.js";
import { Level1 } from "../scenes/level_1.js";
import { Victoria } from "../scenes/victoria.js";
import { Derrota } from "../scenes/derrota.js";
 

var config = {
  type: Phaser.AUTO,
  width: 1020,
  height: 660,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 1020,
      height: 660,
    },
    max: {
      width: 1600,
      height: 1200,
    },
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  //scene: [Preloads, MainMenu, LevelSelect, Level1, Victoria, Derrota], // Listado de todas las escenas del juego, en orden
  // La primera escena es con la cual empieza el juego
  scene: [Preloads , MainMenu, LevelSelect, Level1, Derrota, Victoria]
};

var game = new Phaser.Game(config);