var x = canvas.width/2;
var y = canvas.height/2;

var vx = 0, vy = 0;

var player = new Vector(x, y);

var lightEngine = new LightEngine(500, [0,255,0], 'grey', player, function(){}, [255,0,0], 5);

function randPoint() {
    return new Vector( parseInt(Math.random()*canvas.width), parseInt(Math.random()*canvas.height) );
}

for (var i = 0; i < 8; i++) {
    var randSeg = new Segment( randPoint(), randPoint() );
    lightEngine.segments.push( randSeg );
}

function update() {
    player.x += vx;
    player.y += vy;
    lightEngine.update();
}

function draw() {
    lightEngine.draw();
}

function keydown(key) {
    switch(key) {
        case 'w':
            vy = -5;
            break;
        case 's':
            vy = +5;
            break;
        case 'a':
            vx = -5;
            break;
        case 'd':
            vx = +5;
            break;
    }
}

function keyup(key) {
    switch(key) {
        case 'w':
        case 's':
            vy = 0;
        case 'a':
        case 'd':
            vx = 0;
    }
}
