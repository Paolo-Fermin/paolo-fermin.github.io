class BatBall {
    constructor() {
        this.answer = '';
        this.level_state = "start";
    }

    draw() {
        switch (this.level_state) {
            case "start":
                // place title text
                textAlign(CENTER);
                textSize(48);
                textLeading(40);
                fill(color('black'));
                noStroke();
                text("A bat and ball cost $1.10.", 300, 100);
                text("The bat costs $1.00 more \nthan the ball.", 300, 175);
                text("How much does the ball cost?", 300, 275);

                // place answer text
                textSize(48);
                text("$" + this.answer, 250, 450);

                // place a line under the answer
                stroke(color('black'));
                line(200, 475, 400, 475);        
                break;
            case "correct":
                textAlign(CENTER);
                textSize(48);
                textLeading(48);
                noStroke();
                text("Congratulations!", 300, 100);
                text("You likely thought\nthe answer was $0.10\nat first, but\nyour System 2 corrected\nthe knee-jerk response", 300, 175);


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
                        this.answer = '';
                    }
                }

                break;
            case "wrong":
                textAlign(CENTER);
                textSize(48);
                textLeading(48);
                noStroke();
                text("Try again!", 300, 100);
                text("Don't worry - 50% of students\nat MIT, Princeton, and Harvard\nwere incorrect as well.", 300, 175);  
                text("Do not follow the \nlaw of least effort!", 300, 350);
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
                        this.answer = '';
                    }
                }
                break;
            case "lesson":
                textAlign(CENTER);
                textSize(38);
                textLeading(35);
                noStroke();
                // text("Anyone can solve this puzzle\nby engaging their System 2,\nbut System 2 is lazy.\n\n", 300, 100);
                text("A job of System 2\nis to endorse \"suggestions\" from\nSystem 1. Often System 2 will\naccept the intuitive answer\nthat System 1 provides.\n\nThose who got the question correct\ncan be considered more engaged,\nintellectually active, and skeptical\nof their intuitions.", 300, 100);
                
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
                        this.answer = '';
                        game_state = "start_screen"
                    }
                }
                break;
        }

    }

    submit() {
        // check if the user's answer is correct
        if (this.answer == ".05" || this.answer == "0.05") {
            level2.level_state = "correct";
        } else {
            level2.level_state = "wrong";
        } 
    }
}