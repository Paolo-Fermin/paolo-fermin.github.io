class Hitler {
    constructor() {
        this.level_state = "start";
    }

    draw() {
        switch (this.level_state) {
            case "start":
                noStroke();
                textAlign(CENTER);
                text('Pick which statement is true', 300, 100);

                // draw two rectangles
                stroke(color('black'));
                fill(color('white'));
                rect(100, 200, 400, 100);
                rect(100, 300, 400, 100);

                // write text over the rectangles
                fill(color('black'));
                noStroke();
                textSize(40);
                text('Hitler was born in 1892', 300, 265);

                fill(color('grey'));
                text('Hitler was born in 1887', 300, 365);

                // check for mouse input
                if (mouseIsPressed) {
                    var x = mouseX;
                    var y = mouseY;
                    if (x > 100 && x < 500 &&
                        y > 100 && y < 400) {
                        this.level_state = "lesson";
                    }
                }
                break;
            case "lesson":
                noStroke();
                textSize(38);
                textLeading(35);
                textAlign(CENTER);
                text('In reality, both answers are wrong.\nHitler was born in 1889.\n\nHowever, you are more likely to think\nthat the first is correct\nbecause of it clearer print.\n\nIf you want to persuade people,\nprint in high-contrast\ncolors and clear text.', 300, 100);

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

        }
    }
}