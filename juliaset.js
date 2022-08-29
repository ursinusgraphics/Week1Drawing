class JuliaSet {
    /**
     * Construct the object and store canvas information
     * @param {string} divName DOM name of div wrapping canvas
     * @param {string} canvasName DOM name of canvas
     */
    constructor(divName, canvasName) {
        const div = document.getElementById(divName);
        this.canvas = document.getElementById(canvasName);
        this.canvas.width = div.clientWidth;
        this.canvas.height = div.clientHeight;
        this.ctx = this.canvas.getContext("2d"); //For drawing
        //Need this to disable that annoying menu that pops up on right click
        this.canvas.addEventListener("contextmenu", function(e){ e.stopPropagation(); e.preventDefault(); return false; }); 
    }

    /**
     * Draw a pixel at a particular position of the canvas 
     * @param {int} x X coordinate of pixel
     * @param {int} y Y coordinate of pixel
     * @param {float} r Red value in [0, 255]
     * @param {float} g Green value in [0, 255]
     * @param {float} b Blue value in [0, 255]
     */
    drawPixel(x, y, r, g, b) {
        this.ctx.fillStyle = "rgb("+r+","+g+","+b+")";
        this.ctx.fillRect(x, y, 1, 1);
    }

    /**
     * Method to paint the Julia set
     */
    repaint() {
        const W = this.canvas.width;
        const H = this.canvas.height;
        this.ctx.clearRect(0, 0, W, H);
        for (let x = 0; x < W; x++) {
            for (let y = 0; y < W; y++) {
                let real = 2*(x/W - 0.5);
                let imag = 2*(y/H - 0.5);

                // TODO: Replace this with code that does a Julia set iteration
                this.drawPixel(x, y, 255*x/W, 255*y/H, 0);
            }
        }
    }
}