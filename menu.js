class StartScreen {
    draw() {
        
        var grid_width = 400
        var grid_height = 300
        
        // draw a title on the start screen
        textAlign(CENTER);
        textSize(64);
        fill(color('black'));
        textLeading(30);
        text("Pick a Minigame!", width/2, 100);
        stroke(color('black'));
        // draw a grid of 6 rectangles for the user to click on
        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 3; j++) {
                var x = 100 + i * grid_width / 2;
                var y = 200 + j * grid_height / 3;
                var w = grid_width / 2;
                var h = grid_height / 3;
                fill(color('white'));
                rect(x, y, w, h);
            }
        }

        // write text over the rectangles
        fill(color('black'));
        noStroke();
        textSize(50);
        
        text('Multiply', 200, 265);
        text('Bat & Ball', 200, 365);
        text('Gamble', 200, 465);
        text('Lottery', 400, 265);
        text('Hitchhike', 400, 365);
        text('History', 400, 465);

        // when a user clicks on a rectangle, update the game state
        if (mouseIsPressed) {
            var x = mouseX;
            var y = mouseY;
            if (x > 100 && x < 250 &&
                y > 200 && y < 275) {
                game_state = "level_1";
            } else if (x > 100 && x < 250 &&
                y > 300 && y < 375) {
                game_state = "level_2";
            } else if (x > 100 && x < 250 &&
                y > 400 && y < 475) {
                game_state = "level_3";
            } else if (x > 350 && x < 500 &&
                y > 200 && y < 275) {
                game_state = "level_4";
            } else if (x > 350 && x < 500 &&
                y > 300 && y < 375) {
                game_state = "level_5";
            } else if (x > 350 && x < 500 &&
                y > 400 && y < 475) {
                game_state = "level_6";
            }
        }
    }
}
