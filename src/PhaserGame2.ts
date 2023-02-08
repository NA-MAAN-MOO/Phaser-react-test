import Phaser from "phaser";
import Game from "./scenes/Game";
import Preloader from "./scenes/Preloader";

export default new Phaser.Game({
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  physics: {
    default: "arcade",
    arcade: {
      // gravity: { y: 0 },
      // debug: false,
    },
  },
  scene: [Preloader, Game],
});
