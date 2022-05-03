class Gamble {
    constructor() {
        this.level_state = "start";
        this.answer = '';
        this.prospect = loadImage("prospect.jpg");
    }

    draw() {
        switch (this.level_state) {
            case "start":
                textSize(38);
                textAlign(CENTER);
                textLeading(35);
                text('Consider a 50/50 gamble\nwhere you can lose $10.\n', 300, 100);
                text('What is the smallest gain\nthat makes this gamble attractive?', 300, 205);
                
                // place answer text
                textSize(48);
                text("$" + this.answer, 250, 450);

                // place a line under the answer
                line(200, 475, 400, 475);    
                
                break;
            case "averse":
                textSize(38);
                textAlign(CENTER);
                textLeading(35);

                var ratio = this.answer / 10.0;

                text('Like most people, you are loss averse.\nYour \"loss aversion ratio\" is', 300, 100);
                text(ratio.toFixed(2), 300, 170);
                text('The average loss aversion ratio is \nbetween 1.5 and 2.5\n', 300, 200);

                text('This reflects the general principle\nthat losses loom larger\nthan gains.', 300, 315);
                
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
            case "indifferent":
                textSize(38);
                textAlign(CENTER);
                textLeading(35);

                var ratio = this.answer / 10.0;

                text('Unlike most people,\nyou are indifferent to risk.\nYour \"loss aversion ratio\" is', 300, 60);
                text(ratio.toFixed(2), 300, 170);
                text('The average loss aversion ratio is \nbetween 1.5 and 2.5\n', 300, 200);

                text('Professional risk takers\nin financial settings are typically\nnot as emotional to losses.', 300, 315);
                
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
                text("Based on these findings,\nKahneman developed\nPROSPECT THEORY", 300, 100);

                image(this.prospect, 150, 200, 300, 300);

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
                        game_state = "start_screen";
                    }
                }
                break;
        }

    }

    submit() {
        this.answer = parseFloat(this.answer);
        if (this.answer > 10.0) {
            this.level_state = "averse";
        } else {
            this.level_state = "indifferent";
        }
             
    }

}