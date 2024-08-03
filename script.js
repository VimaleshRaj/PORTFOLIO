const boardwidth = 500;
const boardheight = 650;
const playerwidth = 80;
const playerheight = 10;
const playervelocityx = 10;
const ballwidth = 10;
const ballheight = 10;
const ballvelocityx = 3;
const ballvelocityy = 2;
const blockwidth = 50;
const blockheight = 10;
const blockcolumns = 8;
const initialblockrows = 3;
const blockmaxrows = 10;

let board;
let context;
let player;
let ball;
let blockArray = [];
let score = 0;
let gameOver = false;
let blockcount = 0;

window.onload = function () {
    board = document.getElementById('board');
    board.width = boardwidth;
    board.height = boardheight;
    context = board.getContext('2d');
    player = {
        x: boardwidth / 2 - playerwidth / 2,
        y: boardheight - playerheight - 5,
        width: playerwidth,
        height: playerheight,
        velocityx: playervelocityx
    };
    ball = {
        x: boardwidth / 2,
        y: boardheight / 2,
        width: ballwidth,
        height: ballheight,
        velocityx: ballvelocityx,
        velocityy: ballvelocityy
    };

    createblocks();

    requestAnimationFrame(update);
    document.addEventListener('keydown', moveplayer);
};

function update() {
    requestAnimationFrame(update);
    if (gameOver) {
        return;
    }

    context.clearRect(0, 0, board.width, board.height);

    drawRect(player, '#eee');
    drawRect(ball, '#fff');

    handleballcollision();
    if (ball.y <= 0 || ball.y + ball.height >= boardheight) {
        handleGameOver();
    }

    drawBlocks();
    handleNextlevel();
    drawscore();
}

function drawRect(obj, color) {
    context.fillStyle = color;
    context.fillRect(obj.x, obj.y, obj.width, obj.height);
}

function moveplayer(e) {
    if (gameOver) {
        if (e.code === "Space") {
            resetGame();
        }
        return;
    }

    if (e.code === "ArrowLeft") {
        moveplayerx(-player.velocityx);
    } else if (e.code === "ArrowRight") {
        moveplayerx(player.velocityx);
    }
}

function moveplayerx(velocity) {
    const nextplayerx = player.x + velocity;
    if (nextplayerx >= 0 && nextplayerx + player.width <= boardwidth) {
        player.x = nextplayerx;
    }
}

function handleballcollision() {
    if (detectcollision(ball, player)) {
        ball.velocityy *= -1;
    }

    blockArray.forEach((block) => {
        if (!block.break && detectcollision(ball, block)) {
            block.break = true;
            ball.velocityy *= -1;
            score += 50;
            blockcount--;
        }
    });
    if (ball.x <= 0 || ball.x + ball.width >= boardwidth) {
        ball.velocityx *= -1;
    }

    ball.x += ball.velocityx;
    ball.y += ball.velocityy;
}

function detectcollision(obj1, obj2) {
    return (
        obj1.x < obj2.x + obj2.width &&
        obj1.x + obj1.width > obj2.x &&
        obj1.y < obj2.y + obj2.height &&
        obj1.y + obj1.height > obj2.y
    );
}

function handleGameOver() {
    gameOver = true;
    context.font = '20px sans-serif';
    context.fillText("Game Over: Press 'SPACE' to Restart", 80, 400);
}

function drawBlocks() {
    blockArray.forEach((block) => {
        if (!block.break) {
            drawRect(block, '#9db2bf');
        }
    });
}

function handleNextlevel() {
    if (blockcount === 0) {
        score += 100 * initialblockrows * blockcolumns;
        initialblockrows = Math.min(initialblockrows + 1, blockmaxrows);
        createblocks();
    }
}

function drawscore() {
    context.font = "20px sans-serif";
    context.fillText(`Score: ${score}`, 10, 25);
}

function createblocks() {
    blockArray = [];
    for (let c = 0; c < blockcolumns; c++) {
        for (let r = 0; r < initialblockrows; r++) {
            const block = {
                x: 15 + c * (blockwidth + 10),
                y: 15 + r * (blockheight + 10),
                width: blockwidth,
                height: blockheight,
                break: false
            };
            blockArray.push(block);
        }
    }
    blockcount = blockArray.length;
}

function resetGame() {
    gameOver = false;
    score = 0;
    player.x = boardwidth / 2 - playerwidth / 2;
    ball.x = boardwidth / 2;
    ball.y = boardwidth / 2;
    createblocks();
}
