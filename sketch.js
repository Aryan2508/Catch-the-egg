var backgroundimg;
var form;
var playerCount;
var player;
var game;
var database;


function preload() {

  backgroundimg = loadImage("Images/Add a heading (1).png");

}


function setup() {

  createCanvas(windowWidth,windowHeight)
  database = firebase.database();
  game = new Game();
  game.start();



}

function draw() {
  background(backgroundimg);  
  
}