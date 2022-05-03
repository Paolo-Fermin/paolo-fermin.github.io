class Fourfold {
    constructor() {
        this.level_state = "start";
    }

    draw() {
        switch (this.level_state) {
            case "start":
                textSize(38);
                textAlign(CENTER);
                textLeading(35);
                noStroke();
                text('You have the opportunity to\nreceive $1 million. In these\n examples, your chances increase by 5%\nPick the one which sounds\nmost appealing.', 300, 100);

                // draw four rectangles stacked on top of each other and allow the user to select a choice
                // when the user clicks on one of the rectangles, update the game state
                fill(color('white'));
                stroke(color('black'));
                rect(100, 300, 150, 75);
                rect(350, 300, 150, 75);
                rect(100, 400, 150, 75);
                rect(350, 400, 150, 75);

                textSize(30);
                fill(color('black'));
                textLeading(30);
                noStroke();
                text('From\n0% to 5%', 175, 330);

                text('From\n5% to 10%', 425, 330);

                text('From\n60% to 65%', 175, 430);

                text('From\n95% to 100%', 425, 430);

                // detect mouseclick in these boxes
                if (mouseIsPressed) {
                    var x = mouseX;
                    var y = mouseY;
                    if (x > 100 && x < 250 &&
                        y > 300 && y < 375) {
                        this.level_state = "0-5";
                    } else if (x > 350 && x < 500 &&
                        y > 300 && y < 375) {
                        this.level_state = "5-10";
                    } else if (x > 100 && x < 250 &&
                        y > 400 && y < 475) {
                        this.level_state = "60-65";
                    } else if (x > 350 && x < 500 &&
                        y > 400 && y < 475) {
                        this.level_state = "95-100";
                    }
                }
                break;
            case "0-5":
                textSize(38);
                textLeading(35);
                text('Despite all chances increasing by\nthe same amount, it is more impressive\nto have a chance that wasn\'t\npreviously available.\nThis is known as the\nPOSSIBILITY EFFECT.', 300, 100);
                text('Highly unlikely outcomes\nare weighted more in our minds.\nThe lottery takes advantage of this.', 300, 350);
                
                // next button
                textSize(48);
                fill(color('white'));
                rect(225, 500, 150, 75);
                fill(color('black'));
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
                break;
            case "95-100":
                noStroke();
                textSize(38);
                textLeading(35);
                text('Despite 95% being almost guaranteed,\nwe take comfort when the positive\noutcome is completely assured.\nThis is known as the\nCERTAINTY EFFECT.', 300, 100);
                text('This effect shows that \nnearly certain outcomes\nhave less weight in our mind.', 300, 350);

                // next button
                textSize(48);
                stroke(color('black'));
                fill(color('white'));
                rect(225, 500, 150, 75);
                fill(color('black'));
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
                break;
            case "5-10":
            case "60-65":
                noStroke();
                textSize(38);
                textLeading(35);
                text('Interesting choice!\nMost people would agree\nthat the 1st and 4th choices are more\nimpressive. You are out of\nthe ordinary!', 300, 130);
                
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

                break;
            case "lesson":
                break;

        }


    }
}