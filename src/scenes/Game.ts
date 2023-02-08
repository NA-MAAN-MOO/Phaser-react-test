import Phaser from "phaser";

let player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
export default class Game extends Phaser.Scene {
  constructor() {
    super("game");
  }

  preload() {}

  create() {
    const map = this.make.tilemap({
      key: "bigmap",
    });

    map.layers.map((layer) => {
      layer.x += window.innerWidth / 2;
      layer.y += window.innerHeight / 4;
    });

    const blockTile = map.addTilesetImage("tinyBlocks_line", "tinyBlocks_line");
    const objectTile = map.addTilesetImage("objects", "objects");
    const objectLayer = map.createLayer("Tile Layer 1", [
      blockTile,
      objectTile,
    ]);

    objectLayer.setCollisionByProperty({ collides: true });

    const debugGraphics = this.add.graphics().setAlpha(0.7);
    objectLayer.renderDebug(debugGraphics, {
      tileColor: null,
      collidingTileColor: new Phaser.Display.Color(243, 234, 48, 255),
      faceColor: new Phaser.Display.Color(40, 39, 37, 255),
    });

    // const blueman = this.add.sprite(128, 128, "blueman", "walk-down-2.png");
    // this.anims.create({
    //   key: "blueman-idle-down",
    //   frames: [{ key: "blueman", frame: "walk-down-2" }],
    // });
    // this.anims.create({
    //   key: "blueman-run-down",
    //   frames: this.anims.generateFrameNames("blueman", {
    //     start: 1,
    //     end: 3,
    //     prefix: "run-down-",
    //     suffix: ".png",
    //   }),
    //   repeat: -1,
    //   frameRate: 15,
    // });
    // blueman.anims.play("blueman-run-down");

    //player
    player = this.physics.add.sprite(
      window.innerWidth / 2,
      window.innerHeight / 2,
      "dude"
    );
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "turn",
      frames: [{ key: "dude", frame: 4 }],
      frameRate: 20,
    });
    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });
    this.physics.add.collider(player, objectLayer);
  }
  update() {
    let cursors = this.input.keyboard.createCursorKeys();
    if (cursors.left.isDown) {
      player.setVelocityX(-160);
      player.anims.play("left", true);
    } else if (cursors.right.isDown) {
      player.setVelocityX(160);
      player.anims.play("right", true);
    } else if (cursors.down.isDown) {
      player.setVelocityY(160);

      player.anims.play("turn");
    } else if (cursors.up.isDown) {
      player.setVelocityY(-160);
      player.anims.play("turn");
    } else {
      player.setVelocityX(0);
      player.setVelocityY(0);
      player.anims.play("turn");
    }
  }
}
