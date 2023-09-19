const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game loop
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

// Update game state
function update() {
    // Update game logic here
}

// Draw game on canvas
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw game elements here
