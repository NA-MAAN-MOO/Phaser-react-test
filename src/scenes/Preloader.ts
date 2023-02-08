import Phaser from "phaser";

export default class Preloader extends Phaser.Scene {
  constructor() {
    super("preloader");
  }

  preload() {
    this.load.image("bigmap", "assets/bigmap/bigmap.png");
    this.load.image("tinyBlocks_line", "assets/bigmap/tinyBlocks_line.png");
    this.load.image("objects", "assets/Isometric_MedievalFantasy_Tiles.png");
    this.load.tilemapTiledJSON("bigmap", "assets/bigmap/bigmap.json");

    this.load.atlas(
      "blueman",
      "characters/blueman.png",
      "characters/blueman.json"
    );
    this.load.spritesheet("dude", "assets/dude.png", {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  create() {
    this.scene.start("game");
  }
}
