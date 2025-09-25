$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(500, 0, 20, 180, "yellow");
    createPlatform(310, 200, 80, 20, "red");
    createPlatform(1200, 535, 500, 50, "red");
    createPlatform(1000, 668, 100, 100, "red");
    createPlatform(900, 400, 200, 55, "red");
    createPlatform(1100, 200, 100, 50, "red");
    createPlatform(500, 280, 200, 20, "yellow");
    createPlatform(700, 280, 200, 20, "yellow");
    // bright green for a finished platform

    // TODO 3 - Create Collectables
    createCollectable("steve", 1350, 100);
    createCollectable("diamond", 200, 170, 0.5, 0.7);
    createCollectable("database", 1350, 500, 0.5);
    createCollectable("grace", 220, 56);
    createCollectable("kennedi", 1300, 700, 0.1, 0.3);
    createCollectable("max", 600, 243);
    // TODO 4 - Create Cannons
    createCannon("top", 250, 720);
    createCannon("left", 550, 2000);
    createCannon("left", 210, 1500);
    createCannon("bottom", 640, 1800);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
