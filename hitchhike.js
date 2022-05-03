class Hitchhiking {
    constructor() {
        this.level_state = "start";
    }

    draw() {
        switch (this.level_state) {
            case "start":
                noStroke();
                textSize(38);
                textLeading(35);
                textAlign(CENTER);
                text('Mr. Brown almost never\npicks up hitchhikers. \nYesterday he gave a\nman a ride and he was robbed.', 300, 100);
                text('Mr. Smith frequently picks\nup hitchhikers. \nYesterday he gave a \nman a ride and he was robbed.', 300, 275);

                text('Who will experience more regret?', 300, 450);

                // draw two rectangles, one on each side near the bottom of the canvas
                // when the user clicks on one of the rectangles, update the game state
                stroke(color('black'));
                fill(color('white'));
                rect(100, 500, 150, 75);
                rect(350, 500, 150, 75);

                noStroke();
                fill(color('black'));
                text('Mr. Brown', 175, 550);
                text('Mr. Smith', 425, 550);

                // check for mouse input if the user clicks on one of the rectangles
                if (mouseIsPressed) {
                    var x = mouseX;
                    var y = mouseY;
                    if (x > 100 && x < 250 &&
                        y > 500 && y < 575) {
                        this.level_state = "regret";
                    } else if (x > 350 && x < 500 &&
                        y > 500 && y < 575) {
                        this.level_state = "regret";
                    }
                }

                break;
            case "regret":
                noStroke();
                textSize(38);
                textLeading(35);
                textAlign(CENTER);
                text('Mr. Brown almost never\npicks up hitchhikers. \nYesterday he gave a\nman a ride and he was robbed.', 300, 100);
                text('Mr. Smith frequently picks\nup hitchhikers. \nYesterday he gave a \nman a ride and he was robbed.', 300, 275);

                text('Who will be criticized more\nseverely by others?', 300, 450);

                // draw two rectangles, one on each side near the bottom of the canvas
                // when the user clicks on one of the rectangles, update the game state
                stroke(color('black'));
                fill(color('white'));
                rect(100, 500, 150, 75);
                rect(350, 500, 150, 75);

                noStroke();
                fill(color('black'));
                text('Mr. Brown', 175, 550);
                text('Mr. Smith', 425, 550);

                // check for mouse input if the user clicks on one of the rectangles
                if (mouseIsPressed) {
                    var x = mouseX;
                    var y = mouseY;
                    if (x > 100 && x < 250 &&
                        y > 500 && y < 575) {
                        this.level_state = "blame";
                    } else if (x > 350 && x < 500 &&
                        y > 500 && y < 575) {
                        this.level_state = "blame";
                    }
                }
                break;
            case "blame":
                noStroke();
                textSize(38);
                textLeading(35);
                textAlign(CENTER);
                break;
  

        }
    }
}