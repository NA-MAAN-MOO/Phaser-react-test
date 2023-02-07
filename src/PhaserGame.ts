import Phaser from "phaser";
import Game from "./scenes/Game";
import Preloader from "./scenes/Preloader";
import Background from "./scenes/Background";
import Bootstrap from "./scenes/Bootstrap";
import Lobby from "./scenes/Lobby";
import Classroom from "./scenes/Classroom";

export default new Phaser.Game({
  type: Phaser.AUTO,
  // Keep bg transparent
  transparent: true,
  //
  scale: {
    mode: Phaser.Scale.FIT,
    // mode: Phaser.Scale.ScaleModes.RESIZE,
    width: window.innerWidth,
    height: window.innerHeight,
  },

  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
  //   physics: {
  //     default: "matter",
  //     matter: {
  //       debug: true, // 이 설정때문에 오브젝트에 이미지를 추가하지 않아도 대체되는 도형이 그려진다.
  //       gravity: { y: 0 },
  //     },
  //   },
  //   plugins: {
  //     scene: [
  //       {
  //         plugin: PhaserMatterCollisionPlugin,
  //         key: "matterCollision",
  //         mapping: "matterCollision",
  //       },
  //     ],
  //   },
  /* Game Scenes */
  scene: [Bootstrap, Lobby, Classroom],
});
