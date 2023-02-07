import Phaser from "phaser";

const createClassroomTilemap = (scene: Phaser.Scene) => {
  const map = scene.make.tilemap({ key: "classroomMap" });

  map.tilesets.push(map.addTilesetImage("tile/stone_E.png", "floor"));
  map.tilesets.push(map.addTilesetImage("tile/stone_N.png", "floorLeftBottom"));
  map.tilesets.push(map.addTilesetImage("tile/stoneWall_E.png", "wallE"));
  map.tilesets.push(map.addTilesetImage("tile/stoneWall_S.png", "wallS"));
  map.tilesets.push(
    map.addTilesetImage("tile/stoneWallCorner_S.png", "wallCorner")
  );
  map.tilesets.push(map.addTilesetImage("tile/stoneWallDoor_S.png", "door"));

  /* Create Tilemap Layers */
  const floorLayer = map.createLayer(
    "floor",
    map.tilesets,
    window.innerWidth / 2.5,
    -window.innerHeight / 2
  );

  const wallLayer = map.createLayer(
    "wall",
    map.tilesets,
    window.innerWidth / 2.5,
    -window.innerHeight / 2
  );

  wallLayer.setCollisionByProperty({ collides: true });

  //   add color to walls for debugging
  const debugGraphics = scene.add.graphics().setAlpha(0.7);
  wallLayer.renderDebug(debugGraphics, {
    tileColor: null,
    collidingTileColor: new Phaser.Display.Color(243, 234, 48, 255),
    faceColor: new Phaser.Display.Color(40, 39, 37, 255),
  });

  floorLayer.setCullPadding(8, 8);
  wallLayer.setCullPadding(8, 8);

  return map;
};

export { createClassroomTilemap };
