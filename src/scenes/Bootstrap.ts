/* for Phaser Game Booting 
   - preload game assets
   - create a new network environment
   - launch game
*/

import Phaser from "phaser";

export default class Bootstrap extends Phaser.Scene {
  constructor() {
    super("bootstrap");
  }

  preload() {
    /* For Lobby Scene */
    this.load.image("bg", "assets/bg.png");
    this.load.image("layer0", "assets/background/lobby/Layer_0000_9.png");
    this.load.image("layer1", "assets/background/lobby/Layer_0001_8.png");
    this.load.image("layer2", "assets/background/lobby/Layer_0002_7.png");
    this.load.image("layer3", "assets/background/lobby/Layer_0003_6.png");
    this.load.image("layer4", "assets/background/lobby/Layer_0004_Lights.png");
    this.load.image("layer5", "assets/background/lobby/Layer_0005_5.png");
    this.load.image("layer6", "assets/background/lobby/Layer_0006_4.png");
    this.load.image("layer7", "assets/background/lobby/Layer_0007_Lights.png");
    this.load.image("layer8", "assets/background/lobby/Layer_0008_3.png");
    this.load.image("layer9", "assets/background/lobby/Layer_0009_2.png");
    this.load.image("layer10", "assets/background/lobby/Layer_0010_1.png");
    this.load.image("layer11", "assets/background/lobby/Layer_0011_0.png");
    this.load.image("house", "assets/house.png");
    this.load.image("logo", "assets/logo/logo.png");

    /* For Classroom Scene*/
    this.load.image("floorAndWall", "assets/tilemap/floorandwall.png");
    this.load.tilemapTiledJSON(
      "classroomTilemap",
      "assets/tilemap/classroomTilemap.json"
    );

    /* Characters */
    this.load.atlas(
      "male1",
      "assets/character/villager-males.png",
      "assets/character/male1.json"
    );
  }

  create() {
    this.scene.start("lobby");
  }
}
