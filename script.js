var  screenWidth = window.innerWidth;
var  screenHeight = window.innerHeight;
var width = Math.min(screenWidth,screenHeight)
var app = new PIXI.Application(width, width, {backgroundColor : 0x1099bb});

document.getElementById("box").appendChild(app.view);