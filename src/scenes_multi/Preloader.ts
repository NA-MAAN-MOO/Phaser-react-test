import Phaser from "phaser";

export default class Preloader extends Phaser.Scene {
  constructor() {
    super("preloader");
  }

  preload() {
    this.load.image("block01", "assets/isometric_angled_pixel_0000.png");
    this.load.image("block02", "assets/isometric_angled_pixel_0001.png");
    this.load.tilemapTiledJSON("multipleImg", "assets/multipleImg.json");
  }

  create() {
    this.scene.start("game");
  }
}
