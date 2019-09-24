
// Create the canvas
//var canvas = document.createElement("canvas");
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
//document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () 
{ bgReady = true; };
bgImage.src = "images/background.png";

// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function()
{ heroReady = true; };
heroImage.src = "images/hero.png";

// Monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function()
{ monsterReady = true; };
monsterImage.src = "images/monster.png";

// Fish image
var fishReady = false;
var fishImage = new Image();
fishImage.onload = function()
{ fishReady = true; };
fishImage.src = "images/fish.png";

// Speed potion image
var spotion1Ready = false;
var spotion1Image = new Image();
spotion1Image.onload = function()
{ spotion1Ready = true; };
spotion1Image.src = "images/speedpotion.png";





