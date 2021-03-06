//NAMESPACE

const game = {};

game.canvas = document.getElement


//CREATE & ACCESS CANVAS
game.canvas = document.getElementById('canvas');
game.context = game.canvas.getContext('2d');

// SET & RESET DEFAULT GAME STATE
game.x = undefined;
game.y = undefined;

game.dx = undefined;
game.dy = undefined;

game.default = function() {
    game.x = game.canvas.width / 2;
    game.y = game.canvas.height - 30;
    game.dx = 2;
    game.dy = -2;
};

//  CREATE BALL
game.ballRadius = 10;

game.drawBall = function() {
    game.context.beginPath();
    game.context.arc(game.x, game.y, game.ballRadius, 0, Math.PI * 2);
    game.context.fillStyle = 'white';
    game.context.fill();
    game.context.closePath();
};

// COLLISION DETECTION
game.reverseX = function() {
    return game.dx = -game.dx;
};

game.reverseY = function () {
    return game.dy = -game.dy;
};

game.hitX = function() {
    return (game.y + game.dy) < game.ballRadius ||(game.y + game.dy) > (game.canvas.height - game.ballRadius);
}


// ACTION!
game.draw = function() {

    // CLEAR CANVAS
    game.context.clearRect(0, 0, game.canvas.width, game.canvas.height);
    game.drawBall();

    // MOVE
    game.x += game.dx;
    game.y += game.dy;

    // REFLECTION
    if (game.hitX()) {
        game.reverseX();
    };
    if (game.hitY()) {
        game.reverseY();
    }



    requestAnimationFrame(game.draw);
};

//INIT
game.init = function() {
    game.default();
    game.draw();
};

//DOCREADY
$(game.init);

