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
                        this.level_state = "lesson";
                    } else if (x > 350 && x < 500 &&
                        y > 500 && y < 575) {
                        this.level_state = "lesson";
                    }
                }
                break;
            case "lesson":
                noStroke();
                textSize(38);
                textLeading(35);
                textAlign(CENTER);

                text("Most people would agree that\nMr. Brown will experience\nmore regret and Mr. Smith\nwill receive more criticism.\n\nRegret and blame are evoked\nby comparison to the norm, but\nthe norms are different.", 300, 100);

                // next button
                textSize(48);
                stroke(color('black'));
                fill(color('white'));
                rect(225, 500, 150, 75);
                fill(color('black'));
                noStroke();
                text("Next", 300, 550);

                if (mouseIsPressed) {
                    var x = mouseX;
                    var y = mouseY;
                    if (x > 225 && x < 375 &&
                        y > 500 && y < 575) {
                        this.level_state = "lesson2";
                    }
                }

                break;
            case "lesson2":
                textSize(38);
                textLeading(35);
                textAlign(CENTER);

                text("Despite the habitual risks\nthat Mr. Smith takes, Mr. Brown\nwill feel more regret because\nhe acted out of character a single time.\n\nThe regret we feel by deviations\nfrom the norm makes us bias\ntowards risk-averse behavior.", 300, 100);

                // next button
                textSize(48);
                stroke(color('black'));
                fill(color('white'));
                rect(225, 500, 150, 75);
                fill(color('black'));
                noStroke();
                text("Next", 300, 550);

                if (mouseIsPressed) {
                    var x = mouseX;
                    var y = mouseY;
                    if (x > 225 && x < 375 &&
                        y > 500 && y < 575) {
                        this.level_state = "start";
                        game_state = "start_screen";
                    }
                }

        }
    }
}