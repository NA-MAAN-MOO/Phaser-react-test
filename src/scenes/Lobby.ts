/* Login & Signin & Show houses */

import Phaser from "phaser";
import { createCharacterAnims } from "../anims/CharacterAnims";
import Button from "../components/Buttons";

export default class Lobby extends Phaser.Scene {
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private myPlayer!: Phaser.Physics.Arcade.Sprite;
  private houseForList!: Phaser.GameObjects.Image;
  private buttonForList!: Phaser.GameObjects.Text;

  constructor() {
    super("lobby");
  }

  preload() {
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  create() {
    this.add.image(window.innerWidth / 2, window.innerHeight / 2, "bg");

    const width = this.scale.width;
    const height = this.scale.height;

    for (let i = 11; i >= 0; i--) {
      this.add.image(width / 2, height / 2, `layer${i}`);
    }

    this.houseForList = this.physics.add
      .sprite(width / 3, height - 150, "house")
      .setScale(0.3);

    this.myPlayer = this.physics.add.sprite(width / 10, height - 80, "male1");
    createCharacterAnims(this.anims);

    this.buttonForList = new Button(
      width / 3,
      height / 2 + 50,
      "스페이스바를 눌러\n강의실 목록을 보세요!",
      this,
      () => console.log("clicked")
    ).getBtn;
  }

  update() {
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
    } else {
      this.myPlayer.play("male1-idle-down");
      this.myPlayer.setVelocity(0, 0);
    }

    /* Classroom List Button interaction */
    let boundPlayer = this.myPlayer.getBounds();
    let boundHouse = this.houseForList.getBounds();
    if (Phaser.Geom.Intersects.RectangleToRectangle(boundPlayer, boundHouse)) {
      this.buttonForList.setVisible(true);
    } else {
      this.buttonForList.setVisible(false);
    }
  }
}
