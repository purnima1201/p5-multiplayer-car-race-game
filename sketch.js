var cnavas, game;
var db, fireAuth, user_document_id;
var signUp, player, playerRegistration, emailKey;
var allPlayers;
var form;
var cars, car1, car2;
var track, car1_img, car2_img;
var playerCount, gauge;

var gameState = null;
var backgroundImage;
var song;

function preload() {
  backgroundImage = loadImage("./assets/bg.png");
  track = loadImage("./assets/track.jpg");
  car1_img = loadImage("./assets/car1.png");
  car2_img = loadImage("./assets/car2.png");
  ground = loadImage("./assets/ground.png");
  song = loadSound("assets/music/bg.mp3");
}

function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  fireAuth = firebase.auth();
  db = firebase.database();

  game = new Game();
  signUp = new SignUpForm();
  player = new Player();
  form = new Form();
  // gauge = new Gauge(200, 200, "Speedometer");

  car1 = createSprite(width / 2, 200);
  car1.addImage("car1", car1_img);
  car2 = createSprite(width - 300, 200);
  car2.addImage("car2", car2_img);

  cars = [car1, car2];
  song.loop();
}

function draw() {
  background(backgroundImage);

  if (gameState === null || gameState === 0) {
    game.start();
  }

  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    clear();
    game.play();
  }
  if (gameState === 2) {
    game.end();
  }
}

function windowResized() {
  resizeCanvas(displayWidth, displayHeight);
}

function mouseClicked() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.pause(); // .play() will resume from .pause() position
  } else {
    song.play();
  }
}
