const canvas = document.createElement('canvas')
const context = canvas.getContext('2d')
canvas.width = 1300
canvas.height = 550
document.body.appendChild(canvas)

function loop(){
    context.fillStyle = '#12FF12'
    context.fillRect(50, 50, canvas.width, canvas.height)
    requestAnimationFrame(loop)
}

function ball(){
    context.fillStyle = '#FFFFFF'
    context.beginPath()
    context.arc(canvas.width/2, canvas.height/2, 100, Math.PI*2, false)
    context.closePath()
    context.fill()
}

function drawRect(x, y, w, h, color){
    context.fillStyle = color;
    context.fillRect(x, y, w, h);
}

// User Paddle
const user = {
    x : 0, // left side of canvas
    y : (canvas.height - 100)/2, // -100 the height of paddle
    width : 10,
    height : 100,
    score : 0,
    color : "WHITE"
}

// COM Paddle
const com = {
    x : canvas.width - 10, // - width of paddle
    y : (canvas.height - 100)/2, // -100 the height of paddle
    width : 10,
    height : 100,
    score : 0,
    color : "WHITE"
}

function render(){
    loop()
    ball()
    drawRect(user.x, user.y, user.width, user.height, user.color);
        
    // draw the COM's paddle
    drawRect(com.x, com.y, com.width, com.height, com.color);

}

let loop = setInterval(render, 500)
