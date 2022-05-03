class Title {
    constructor() {
        this.level_state = "start";

        this.image = loadImage("cover2.jpg");
    }
    
    draw() {
        switch (this.level_state) {
            case "start":
                background(color('white'));
                image(this.image, 0, 0, 400, 600);

                // next button
                textSize(48);
                fill(color('white'));
                rect(425, 500, 150, 75);
                fill(color('black'));
                text("Next", 465, 550);
            
                if (mouseIsPressed) {
                    var x = mouseX;
                    var y = mouseY;
                    if (x > 425 && x < 575 &&
                        y > 500 && y < 575) {
                        this.level_state = "intro";
                    }
                }
                break;
            case "intro":
                textAlign(CENTER);
                textSize(38);
                textLeading(35);
                text('Thinking, Fast and Slow\nwas written by psychologist and\nNobel Prize laureate Daniel Kahneman\nin 2011. The book contains\nmany insights into the human mind,\nespecially the relationship between \n\"System 1\" and \"System 2\".\n\nLearn some psychology\nin this fun videogame!', 300, 100);
                
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
}