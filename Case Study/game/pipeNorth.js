class PipeNorth {
    x;
    y;
    width;
    height;

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 380;
    }

    drawPipeNorth() {
        ctx.drawImage(document.getElementById("pipeNorth"), this.x, this.y, this.width, this.height);
    }

    moveLeft() {
        if (score <= 10) {
            this.x -= 1;
        } else {
            this.x -= 2;
        }
    }
}
