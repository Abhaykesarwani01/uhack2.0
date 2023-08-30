var canvas = document.querySelector('canvas');

canvas.width = $(window).width();
canvas.height = $(window).height();

var ctx = canvas.getContext('2d');

function Dot(x, y, a, moving) {
    this.x = x;
    this.y = y;
    this.a = a;
    this.moving = false;
}

var sizeX,
    sizeY,
    dotSize = 3;

var w = screen.width || Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = screen.height || Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

if(h > w) {
    sizeX = 9;
    sizeY = 26;
} else if(h < w) {
    sizeX = 26;
    sizeY = 9;
} else {
    sizeX = 20;
    sizeY = 20;
}

if(w < 500 || h < 500) {
    sizeX = Math.floor(sizeX/2);
    sizeY = Math.floor(sizeY/2);
    sizeY--;
    dotSize *= 2;
}

var points = new Array(sizeX);

var divisionX = $(window).width() / sizeX,
    divisionY = $(window).height() / sizeY;

for(var i = 0; i < points.length; i++) {
    points[i] = new Array(sizeY);

    for(var j = 0; j < points[i].length; j++) {
        points[i][j] = new Dot((i + 0.5) * divisionX, (j + 0.5) * divisionY, 1);
    }
}

function draw(d) {
    ctx.fillStyle = 'rgba(255,255,255,' + d.a + ')';
    ctx.fillRect(d.x-(dotSize/2), d.y-(dotSize/2), dotSize, dotSize);
}

function genRandInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function moveRandomDotHorz() {
    var movingLeft = Math.random() > 0.5;
    var x;
    var y;
    var d;

    if(movingLeft) {
        x = genRandInt(1, sizeX - 1);
        y = genRandInt(1, sizeY - 1);
        d = -1;
    } else {
        x = genRandInt(0, sizeX - 2);
        y = genRandInt(0, sizeY - 2);
        d = 1;
    }


    if(points[x][y].moving == false && points[x+d][y].moving == false) {
        var ogBoxCoord = points[x][y].x;

        var i = 0;

        points[x][y].moving = true;
        points[x+d][y].moving = true;

        var angle = 0;

        var k = setInterval(function() {
            angle++;
            points[x][y].x = ogBoxCoord + d*Math.sin(angle*Math.PI/360)*divisionX;

            points[x+d][y].a = Math.cos(angle*Math.PI/180);

            if(angle >= 180) {
                clearInterval(k);
                points[x][y].x = ogBoxCoord;
                points[x+d][y].a = 1;
                points[x][y].a = 0;

                angle = 0;

                var l = setInterval(function() {
                    angle += 0.5;
                    points[x][y].a = Math.sin(angle*Math.PI/360);

                    if(angle >= 180) {
                        clearInterval(l);

                        points[x+d][y].moving = false;
                        points[x][y].moving = false;
                    }
                }, 1);
            }
        }, 1);
    }
}

function moveRandomDotVert() {
    var movingUp = Math.random() > 0.5;
    var x;
    var y;
    var d;

    if(movingUp) {
        x = genRandInt(1, sizeX - 1);
        y = genRandInt(1, sizeY - 1);
        d = -1;
    } else {
        x = genRandInt(0, sizeX - 2);
        y = genRandInt(0, sizeY - 2);
        d = 1;
    }

    if(points[x][y].moving == false && points[x][y+d].moving == false) {
        var ogBoxCoord = points[x][y].y;

        var i = 0;

        points[x][y].moving = true;
        points[x][y+d].moving = true;

        var angle = 0;

        var k = setInterval(function() {
            angle++;
            points[x][y].y = ogBoxCoord + d*Math.sin(angle*Math.PI/360)*divisionY;

            points[x][y+d].a = Math.cos(angle*Math.PI/180);

            if(angle >= 180) {
                clearInterval(k);
                points[x][y].y = ogBoxCoord;
                points[x][y+d].a = 1;
                points[x][y].a = 0;

                angle = 0;

                var l = setInterval(function() {
                    angle += 0.5;
                    points[x][y].a = Math.sin(angle*Math.PI/360);

                    if(angle >= 180) {
                        clearInterval(l);

                        points[x][y+d].moving = false;
                        points[x][y].moving = false;
                    }
                }, 1);
            }
        }, 1);
    }
}

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for(var i = 0; i < points.length; i++) {
        for(var j = 0; j < points[i].length; j++) {
            draw(points[i][j]);
        }
    }

    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);

setInterval(function() {
    moveRandomDotHorz();
    moveRandomDotVert();
}, 500)
