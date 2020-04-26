// const canvas = document.createElement('canvas')

// const context = canvas.getContext('2d')
// canvas.width = 1300
// canvas.height = 550
// document.body.appendChild(canvas)

// function loop(){
//     context.fillStyle = '#12FF12'
//     context.fillRect(50, 50, canvas.width, canvas.height)
//     requestAnimationFrame(loop)
// }

// function ball(){
//     context.fillStyle = '#FFFFFF'
//     context.beginPath()
//     context.arc(canvas.width/2, canvas.height/2, 100, Math.PI*2, false)
//     context.closePath()
//     context.fill()
// }

// function drawRect(x, y, w, h, color){
//     context.fillStyle = color;
//     context.fillRect(x, y, w, h);
// }

// // User Paddle
// const user = {
//     x : 0, // left side of canvas
//     y : (canvas.height - 100)/2, // -100 the height of paddle
//     width : 10,
//     height : 100,
//     score : 0,
//     color : "WHITE"
// }

// // COM Paddle
// const com = {
//     x : canvas.width - 10, // - width of paddle
//     y : (canvas.height - 100)/2, // -100 the height of paddle
//     width : 10,
//     height : 100,
//     score : 0,
//     color : "WHITE"
// }

// function render(){
//     loop()
//     ball()
//     drawRect(user.x, user.y, user.width, user.height, user.color);
        
//     // draw the COM's paddle
//     drawRect(com.x, com.y, com.width, com.height, com.color);

// }

// let loop = setInterval(render, 500)

let player_first = document.getElementsByClassName('player1')
let player1 = player_first.style
player1.backgroundColor = '#FF69B4'
player1.left = '240px'
player1.bottom = '250px'
player1.position = 'relative'
player1.width = player1.height = '75px'

let left_field_player1 = 240
let top_field_player1 = -25
let bottom_field_player1 = -500
let right_field_player1 = 595

let speed = 5

document.addEventListener('keydown', function(e) {
    if (e.which === 37) {
        var leftNumbers = player1.left.replace('px', '')
        var left = parseInt(leftNumbers, 10)
        left -= speed
        // if (left < left_field_player1) player1.left = left_field_player1
        // else player1.left = `${left}px`
    }
    if (e.which === 39) {
        var rightNumbers = player1.left.replace('px', '')
        var right = parseInt(rightNumbers, 10)
        right += speed
        // if (right > right_field_player1) player1.left = right_field_player1
        // else player1.left = `${right}px`
    }
    if (e.which === 38) {
        var topNumbers = player1.bottom.replace('px', '')
        var top = parseInt(topNumbers, 10)
        top += speed
        // if (top > top_field_player1) player1.bottom = top_field_player1
        // else player1.bottom = `${top}px`
    }
    if (e.which === 40) {
        var bottomNumbers = player1.bottom.replace('px', '')
        var bottom = parseInt(bottomNumbers, 10)
        bottom -= speed
        // if (bottom < bottom_field_player1) player1.bottom = bottom_field_player1
        // else player1.bottom = `${bottom}px`
    }
  })
  
let player_2nd = document.getElementById('player2')
let player2 = player_2nd.style
player2.backgroundColor = 'blue'
player2.left = '600px'
player2.bottom = '-250px'
player2.position = 'relative'
player2.width = player2.height = '75px'

let left_field_player2 = 240
let top_field_player2 = -25
let bottom_field_player2 = -500
let right_field_player2 = 595
