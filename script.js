var  screenWidth = window.innerWidth;
var  screenHeight = window.innerHeight;
var width = Math.min(screenWidth,screenHeight)
var app = new PIXI.Application(width, width, {backgroundColor : 0x1099bb});

document.getElementById("box").appendChild(app.view);

var cardWidth = width/6;
var cardHeight = width/6;

var stage = app.stage;
var brush = new PIXI.Graphics();
brush.beginFill(0xffffff);
brush.drawCircle(0, 0, 50);
brush.endFill();
var distance = 30;
function createCard(){
	var basicCard = new PIXI.Text('4');
	basicCard.x = distance+=30;
	basicCard.y = 90;
	return basicCard;
} 

PIXI.loader.load(setup);
function setup(){
	for(var i=0;i<9;i++){
		var card = createCard();
		stage.addChild(card)
	}
}


