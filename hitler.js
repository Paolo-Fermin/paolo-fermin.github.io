class Hitler {
    constructor() {
        this.level_state = "start";
    }

    draw() {
        switch (this.level_state) {
            case "start":
                text('Pick which statement is true', 300, 100);

                // draw two rectangles
                fill(color('white'));
                rect(100, 200, 200, 100);
                rect(100, 300, 200, 100);
        }
    }
}