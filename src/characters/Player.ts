/* Skeleton of phaser sprite */

import Phaser from "phaser";

export default class Player extends Phaser.Physics.Arcade.Sprite {
  private selectedObject: String;
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture: string,
    id: string,
    frame?: string | number
  ) {
    super(scene, x, y, texture, frame);
    this.selectedObject = "";
  }

  setSelectedObject(object: String) {
    this.selectedObject = object;
  }
  getSelectedObject(): String {
    return this.selectedObject;
  }
}

declare global {
  namespace Phaser.GameObjects {
    interface GameObjectFactory {
      player(
        x: number,
        y: number,
        texture: string,
        id: string,
        frame?: string | number
      ): Player;
    }
  }
}

Phaser.GameObjects.GameObjectFactory.register(
  "player",
  function (
    this: Phaser.GameObjects.GameObjectFactory,
    x: number,
    y: number,
    texture: string,
    id: string,
    frame?: string | number
  ) {
    const sprite = new Player(this.scene, x, y, texture, id, frame);

    this.displayList.add(sprite);
    this.updateList.add(sprite);

    this.scene.physics.world.enableBody(
      sprite,
      Phaser.Physics.Arcade.DYNAMIC_BODY
    );

    const collisionScale = [0.5, 0.2];
    sprite.body
      .setSize(
        sprite.width * collisionScale[0],
        sprite.height * collisionScale[1]
      )
      .setOffset(
        sprite.width * (1 - collisionScale[0]) * 0.5,
        sprite.height * (1 - collisionScale[1])
      );

    return sprite;
  }
);
