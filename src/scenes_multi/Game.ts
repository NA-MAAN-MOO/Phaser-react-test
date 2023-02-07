import Phaser from "phaser";

export default class Game extends Phaser.Scene {
  constructor() {
    super("game");
  }

  preload() {}

  create() {
    const map = this.make.tilemap({
      key: "multipleImg",
    });

    map.layers.map((layer) => {
      layer.x += 400 / 2;
      layer.y += 250 / 4;
    });

    const block0 = map.addTilesetImage("blocks", "block01");
    const block1 = map.addTilesetImage("blocks", "block02");
    const layer0 = map.createLayer("Tile Layer 1", block0);
    const layer1 = map.createLayer("Tile Layer 1", block1);

    layer0.setCollisionByProperty({ collides: true });
    layer1.setCollisionByProperty({ collides: true });
  }
}
