// Control what part of the game is running
// i.e. start_screen, level_1, win_screen, lose_screen, etc.
var game_state = "title";

var level1, level2, level3;
var level_dict;


var font, bg;

function preload() {
    font = loadFont('Rudiment-0gwP.ttf')
}

function setup() {
    createCanvas(600, 600);   

    textFont(font);

    title = new Title();
    start_screen = new StartScreen();
    level1 = new MathProblems();
    level2 = new BatBall();
    level3 = new Gamble();
    level4 = new Fourfold();
    level5 = new Hitchhiking();
    level6 = new Hitler();

    level_dict = {
        "start_screen": start_screen,
        "title": title,
        "level_1": level1,
        "level_2": level2,
        "level_3": level3,
        "level_4": level4,
        "level_5": level5,
        "level_6": level6
    }

    bg = loadImage("looseleaf.jpg");
}

function draw() {
    background(bg);
  	// print out
	fill(color('black'));
	//   text("game_state: " + game_state, 10, 30);

	level_dict[game_state].draw();
}

function win_screen() {
  // draw the  win screen
  background(220);
  fill(color('black'));
  textSize(32);
  text("You win!", 100, 100);
}

function lose_screen() {
  // draw the  lose screen
  background(220);
  fill(color('black'));
  textSize(32);
  text("You lose!", 100, 100);
}

function keyPressed() {
    if (keyCode == ENTER) {
        level_dict[game_state].submit();
    } else if (keyCode == BACKSPACE) {
        level_dict[game_state].answer = level_dict[game_state].answer.slice(0, -1);
    } else {
        level_dict[game_state].answer += key;
    }

}

function mousePressed() {
    redraw();
}