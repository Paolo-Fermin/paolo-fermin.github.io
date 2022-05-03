/**
 * Function to draw a background image with random noise and variance
 * @returns 400x400 background image
 */
 function createGrassyField() {
    var a=random(1500);

    push();
    background(3, 242, 102);
    noStroke();

    // sky
    var n1 = a;
    for (var x=0; x<=800; x+=4) {
        var n2 = 0;
        for (var y=0; y<=800; y+=4) {
            var c = map(noise(n1,n2),0,1,0,255);
            fill(c, c+50,c,100);
            rect(x,y,4,4);
            n2 += 0.075; // step size in noise
        }
        n1 += 0.02; // step size in noise
    }
    pop();

    // take a picture
    return get(0, 0, 600, 600);    
}