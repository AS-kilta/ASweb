let canvas = document.getElementById("demo"),
    context = canvas.getContext("2d"),
    particles = [];

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

let colors = ["#610396", "#bf99d6", "#721ea2"];

let animation;

class Particle {

    constructor(x, y) {
        this.location = {
            x: x,
            y: y
        }
        this.homeLocation = {
            x: x,
            y: y
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.acceleration = {
            x: 0,
            y: 0
        }
        this.color = colors[Math.floor(Math.random() * 3)];
        this.radius = 1;
    }

    // Slight random movement altering location slightly
    sparkle() {
        this.location.x = this.location.x + Math.random()-0.5;
        this.location.y = this.location.y + Math.random()-0.5;
        this.radius = Math.random()/2+1;
    }

    // Pseudo rotation effect
    rotateY() {
        this.location.x *= 1-Math.sin(this.location.y)/width;
    }

    rotate2D(x, y, a) {
        this.location.x = Math.cos(a) * (this.location.x - x) - Math.sin(a) * (this.location.y - y) + x;
        this.location.y = Math.sin(a) * (this.location.x - x) + Math.cos(a) * (this.location.y - y) + y;
    }

    // Random acceleration to any direction
    cascade() {
        this.acceleration.x += (0.5-Math.random())/500;
        this.acceleration.y += (0.5-Math.random())/500;
    }

    // Orbit around home position
    orbital() {
        (this.location.x > this.homeLocation.x) ?
            this.acceleration.x = (this.homeLocation.x - this.location.x) /width :
            this.acceleration.x = (this.homeLocation.x - this.location.x) /width;

        (this.location.y > this.homeLocation.y) ?
            this.acceleration.y = (this.homeLocation.y - this.location.y) /height :
            this.acceleration.y = (this.homeLocation.y - this.location.y) /height;
    }

    // Form some sort of interference pattern
    interference() {
        this.location.x = this.location.x+Math.sin((this.location.x-width)/20);

    }

    // Return home linearly
    returnHome() {
        if (Math.abs(this.location.x - this.homeLocation.x) > 400)
            (this.location.x > this.homeLocation.x) ? this.location.x -= 25 : this.location.x += 25;
        else if (Math.abs(this.location.x - this.homeLocation.x) > 200)
            (this.location.x > this.homeLocation.x) ? this.location.x -= 10 : this.location.x += 10;
        else if (Math.abs(this.location.x - this.homeLocation.x) > 50)
            (this.location.x > this.homeLocation.x) ? this.location.x -= 5 : this.location.x += 5;
        else if (Math.abs(this.location.x - this.homeLocation.x) > 1)
            (this.location.x > this.homeLocation.x) ? this.location.x -= 1 : (this.location.x === this.homeLocation.x) ? null : this.location.x += 1;
        else
            this.location.x = this.homeLocation.x;

        if (Math.abs(this.location.y - this.homeLocation.y) > 400)
            (this.location.y > this.homeLocation.y) ? this.location.y -= 50 : this.location.y += 50;
        else if (Math.abs(this.location.y - this.homeLocation.y) > 200)
            (this.location.y > this.homeLocation.y) ? this.location.y -= 10 : this.location.y += 10;
        else if (Math.abs(this.location.y - this.homeLocation.y) > 50)
            (this.location.y > this.homeLocation.y) ? this.location.y -= 5 : this.location.y += 5;
        else if (Math.abs(this.location.y - this.homeLocation.y) > 1)
            (this.location.y > this.homeLocation.y) ? this.location.y -= 1 : (this.location.y === this.homeLocation.y) ? null : this.location.y += 1;
        else
            this.location.y = this.homeLocation.y;
    }

    // Reduce speed
    decelerate() {
        (this.velocity.x < 0) ? this.velocity.x += 0.1 : this.velocity.x;
        (this.velocity.x > 0) ? this.velocity.x -= 0.1 : this.velocity.x;
        (this.velocity.y < 0) ? this.velocity.y += 0.1 : this.velocity.y;
        (this.velocity.y > 0) ? this.velocity.y -= 0.1 : this.velocity.y;
    }

    // Change color

    colorize(color) {
        this.color = color;
    }

    // Check if particle is at its original location

    isHome() {
        return this.location.x === this.homeLocation.x && this.location.y === this.homeLocation.y;
    }

    stop() {
        this.acceleration = {
            x: 0,
            y: 0
        };

        this.velocity = {
            x: 0,
            y: 0
        };
    }

    // Move according to velocity and acceleration
    move() {
        this.velocity.x += this.acceleration.x;
        this.velocity.y += this.acceleration.y;
        this.location.x += this.velocity.x;
        this.location.y += this.velocity.y;
    }

    render() {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.location.x, this.location.y, this.radius, 2*Math.PI, false);
        context.fill();
    }

}

function initialize() {

    // Reset animation

    if (animation)
        cancelAnimationFrame(animation);
    frame = 0;
    isFinishedAfterFinal = true;

    if (width !== 0 && height !== 0)
        context.clearRect(0, 0, width, height);

    // Update canvas width

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    width = canvas.width;
    height = canvas.height;

    // Clear the area / particles

    context.clearRect(0, 0, width, height);
    particles = [];

    // Get text from url param

    const text = decodeURI(window.location.search.split("=")[1])

    context.font = "bold clamp(2rem, 10vw, 7rem) 'Comic Sans MS', 'Comic Sans', sans-serif";
    context.textAlign = "center";
    context.fillText(text, width / 2, height / 2);

    let imageData = context.getImageData(0, 0, width, height);
    context.clearRect(0, 0, width, height);

    // Create particles for the area covered by the text, based on the image data

    for (let i = 0; i < imageData.width; i += 2) {
        for (let j = 0; j < imageData.height; j += 2) {
            if (imageData.data[(j * 4 * imageData.width) + (i * 4) + 3] > 128)
                particles.push(new Particle(i, j));
        }
    }
}

let frame = 0,
    isFinishedAfterFinal = true;

function render() {
    frame += 1;
    context.clearRect(0, 0, width, height);
    isFinishedAfterFinal = true;

    // Render particles with effects (i. e. transcript for the demo)

    particles.forEach(el => {
        if (frame < 200) {
            el.colorize(colors[Math.floor(Math.random() * 3)])
            el.cascade()
        } else if (frame < 290) {
            el.colorize("violet")
            el.orbital()
        } else if (frame < 360) {
            el.colorize("#008184")
            el.interference()
            el.decelerate()
        } else if (frame < 380) {
            el.colorize("violet")
        } else if (frame < 420) {
            el.colorize("#008184")
            el.returnHome()
            el.rotate2D(width / 2, height / 2, -1 * Math.PI / 15)
        } else if (frame < 700) {
            el.colorize(colors[Math.floor(Math.random() * 3)])
            el.cascade()
        } else if (frame === 700) {
            el.stop()
        } else if (frame > 700) {
            el.colorize(colors[0])
            el.returnHome()
        }     

        el.move()

        if (frame < 700) {
            el.sparkle();
        } else
            if (!el.isHome())
                isFinishedAfterFinal = false;

        el.render()
    });

    // Restart after finishing the animation

    if (frame > 700 && isFinishedAfterFinal)
        cancelAnimationFrame(animation);

    if (frame < 700 || (frame >= 700 && !isFinishedAfterFinal))
        animation = requestAnimationFrame(render);
}

initialize();
animation = requestAnimationFrame(render);

// Full reset after resizing the viewport

window.addEventListener("resize", () => {
    window.location.href = window.location.href;
});
