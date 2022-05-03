class MathProblems {
    constructor() {
        this.level_name = "System 1 and 2";
        this.level_state = "start";

        this.answer = '';
    }

    draw() {
        if (this.level_state != "lesson") {
            // print level name at center
            fill(color('black'));
            textSize(48);
            textAlign(CENTER);
            // text(this.level_name, 300, 100);
            textLeading(48);
            noStroke();
            text("Take a look at \nthis math problem", 300, 75);
            textSize(48);

            text("17 x 24", 300, 200);        
        }

        switch (this.level_state) {
            case "start":

                text("Is the answer \nbigger or smaller than \n123", 300, 275);

                // draw two rectangles, one on each side near the bottom of the canvas
                // when the user clicks on one of the rectangles, update the game state
                stroke(color('black'));
                fill(color('white'));
                rect(100, 400, 150, 75);
                rect(350, 400, 150, 75);

                noStroke();
                fill(color('black'));
                text("Smaller", 175, 450);
                text("Bigger", 425, 450);

                // check for mouse input if the user clicks on one of the rectangles
                if (mouseIsPressed) {
                    var x = mouseX;
                    var y = mouseY;
                    if (x > 100 && x < 250 &&
                        y > 400 && y < 475) {
                        this.level_state = "smaller";
                    } else if (x > 350 && x < 500 &&
                        y > 400 && y < 475) {
                        this.level_state = "bigger";
                    }
                }
                break;
            case "smaller":
                text('Try again!', 300, 300);

                // next button
                stroke(color('black'));
                textSize(48);
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
                    }
                }

                break;
            case "wronganswer":
                    text('Try again!', 300, 300);
    
                    this.answer = '';

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
                            this.level_state = "system2";
                        }
                    }
    
                    break;
            case "bigger":
                textLeading(40);
                textSize(40);
                text('Great Job!', 300, 300);
                text("You just engaged \nyour System 1. \nYou could quickly tell that \nthe answer is bigger.", 300, 350);

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
                        this.level_state = "system2";
                        this.answer = "";
                    }
                }

                break;
            
            case "system2":
                noStroke();
                text("Now take your time to\nanswer the problem", 300, 275);
                // stroke(color('black'));
                // line(20, 450, this.myInput.x + this.myInput.width, 450);
                text(this.answer, 300, 400);
                // draw a line underneath the answer
                stroke(color('black'));
                line(200, 425, 400, 425);


                break;
            case "correct":

                text("Correct!", 300, 300);
                textSize(40);
                text("You just engaged your System 2.\nIt was probably more difficult, \nbut you did it!", 300, 350);


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
                        this.level_state = "lesson";
                    }
                }

                break;
            case "lesson":
                textAlign(CENTER);
                textSize(38);
                textLeading(35);
                text("SYSTEM 1 and SYSTEM 2\nSystem 1: Operates automatically \nand quickly, with little \neffort nor self control.\n\nSystem 2: Allocates attention \nto effortful mental activities.\nAssociated with the sense of \nagency, choice, and concentration", 300, 100);

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
        }

    }

    submit() {
        // get text input from user
        // let answer = level1.myInput.value();

        // check if the user's answer is correct
        if (this.answer == "408") {
            level1.level_state = "correct";
        } else  {
            level1.level_state = "wronganswer";
        } 
    }


}