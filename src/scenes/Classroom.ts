/* Classroom for coding */

import Phaser from "phaser";
import { urlToHttpOptions } from "url";
import { createCharacterAnims } from "../anims/CharacterAnims";
import { createClassroomTilemap } from "../tilemaps/ClassTile";

export default class Classroom extends Phaser.Scene {
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private myPlayer!: Phaser.Physics.Arcade.Sprite;
  private map!: Phaser.Tilemaps.Tilemap;
  //   private tileset!: Phaser.Tilemaps.Tileset;
  //   private myPlayer!: Phaser.Physics.Matter.Sprite;

  constructor() {
    super("classroom");
  }

  preload() {
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  create() {
    /* Create a classroom tilemap */
    this.map = this.make.tilemap({ key: "classroomTilemap" });
    const tileset = this.map.addTilesetImage(
      "classroomTilemap",
      "floorAndWall"
    );

    const floorLayer = this.map.createLayer(
      "floor",
      tileset,
      window.innerWidth / 2.5,
      -window.innerHeight / 2
    );
    const wallLayer = this.map.createLayer(
      "wall",
      tileset,
      window.innerWidth / 2.5,
      -window.innerHeight / 2
    );
    const bottomLayer = this.map.createLayer(
      "bottom",
      tileset,
      window.innerWidth / 2.5,
      -window.innerHeight / 2
    );

    floorLayer.setCullPadding(8, 8);
    wallLayer.setCullPadding(8, 8);
    bottomLayer.setCullPadding(8, 8);

    wallLayer.setCollisionByProperty({ collides: true });
    bottomLayer.setCollisionByProperty({ collides: true });

    // const debugGraphics = this.add.graphics().setAlpha(0.7);
    // wallLayer.renderDebug(debugGraphics, {
    //   tileColor: null,
    //   collidingTileColor: new Phaser.Display.Color(243, 234, 48, 255),
    //   faceColor: new Phaser.Display.Color(40, 39, 37, 255),
    // });
    // bottomLayer.renderDebug(debugGraphics, {
    //   tileColor: null,
    //   collidingTileColor: new Phaser.Display.Color(243, 234, 48, 255),
    //   faceColor: new Phaser.Display.Color(40, 39, 37, 255),
    // });

    // this.cameras.main.setBounds(0, 0, window.innerWidth, window.innerHeight);
    // this.physics.world.setBounds(0, 0, map.width * 256, map.height * 128);

    this.myPlayer = this.physics.add.sprite(
      window.innerWidth / 2,
      window.innerHeight / 2,
      "male1"
    );

    createCharacterAnims(this.anims);

    /* Camera Setting */
    this.cameras.main.setZoom(0.8);
    this.cameras.main.startFollow(this.myPlayer, true);

    /* Collision */
    this.physics.add.collider([wallLayer, bottomLayer], this.myPlayer);
  }

  update(t: number, dt: number) {
    if (!this.cursors || !this.myPlayer) {
      return;
    }
    const speed = 150;

    if (this.cursors.left?.isDown) {
      this.myPlayer.setVelocityX(-speed);
      this.myPlayer.play("male1-walk-left", true);
      this.myPlayer.scaleX = 1;
    } else if (this.cursors.right?.isDown) {
      this.myPlayer.setVelocityX(speed);
      this.myPlayer.play("male1-walk-right", true);
      this.myPlayer.scaleX = 1;
    } else if (this.cursors.down?.isDown) {
      this.myPlayer.setVelocityY(speed);
      this.myPlayer.play("male1-walk-down", true);
    } else if (this.cursors.up?.isDown) {
      this.myPlayer.setVelocityY(-speed);
      this.myPlayer.play("male1-walk-up", true);
    } else {
      this.myPlayer.play("male1-idle-down");
      this.myPlayer.setVelocity(0, 0);
    }
  }
}
