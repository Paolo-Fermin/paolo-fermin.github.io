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
        // draw a grid of 9 rectangles for the user to click on
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                var x = 100 + i * grid_width / 3;
                var y = 200 + j * grid_height / 3;
                var w = grid_width / 3;
                var h = grid_height / 3;
                fill(color('white'));
                rect(x, y, w, h);
            }
        }

        // write text over the rectangles
        textSize(30);
        fill(color('black'));
        noStroke();
        textSize(40);
        
        text('Multiply', 165, 260);
        text('Bat &\nBall', 165, 350);
        text('Gamble', 165, 460);
        text('Lottery', 300, 260);

        // when a user clicks on a rectangle, update the game state
        if (mouseIsPressed) {
            var x = mouseX;
            var y = mouseY;
            if (x > 100 && x < 100 + grid_width / 3 &&
            y > 200 && y < 200 + grid_height / 3) {
            game_state = "level_1";
            } else if (x > 100 && x < 100 + grid_width / 3 &&
            y > 300 && y < 300 + grid_height / 3) {
            game_state = "level_2";
            } else if (x > 100 && x < 100 + grid_width / 3 &&
            y > 400 && y < 400 + grid_height / 3) {
            game_state = "level_3";
            } else if (x > 200 && x < 200 + grid_width / 3 &&
            y > 200 && y < 200 + grid_height / 3) {
            game_state = "level_4";
            } else if (x > 200 && x < 200 + grid_width / 3 &&
            y > 300 && y < 300 + grid_height / 3) {
            game_state = "level_5";
            } else if (x > 200 && x < 200 + grid_width / 3 &&
            y > 400 && y < 400 + grid_height / 3) {
            game_state = "level_6";
            } else if (x > 300 && x < 300 + grid_width / 3 &&
            y > 200 && y < 200 + grid_height / 3) {
            game_state = "level_7";
            } else if (x > 300 && x < 300 + grid_width / 3 &&
            y > 300 && y < 300 + grid_height / 3) {
            game_state = "level_8";
            } else if (x > 300 && x < 300 + grid_width / 3 &&
            y > 400 && y < 400 + grid_height / 3) {
            game_state = "level_9";
            } else if (x > 400 && x < 400 + grid_width / 3 &&
            y > 200 && y < 200 + grid_height / 3) {
            game_state = "level_10";
            } else if (x > 400 && x < 400 + grid_width / 3 &&
            y > 300 && y < 300 + grid_height / 3) {
            game_state = "level_11";
            } else if (x > 400 && x < 400 + grid_width / 3 &&
            y > 400 && y < 400 + grid_height / 3) {
            game_state = "level_12";
            }
        }

    }
}