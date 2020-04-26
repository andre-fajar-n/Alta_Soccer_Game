// player1
let player_first = document.getElementById('player1')
let player1 = player_first.style
player1.backgroundColor = '#FF69B4'
player1.left = '105px'
player1.bottom = '-260px'
player1.position = 'relative'
player1.width = player1.height = '75px'
let up1 = down1 = left1 = right1 = 0

let left_field_player1 = 105
let top_field_player1 = -25
let right_field_player1 = 500
let bottom_field_player1 = -500

// player 2
let player_2nd = document.getElementById('player2')
let player2 = player_2nd.style
player2.backgroundColor = 'blue'
player2.left = '-105px'
player2.bottom = '-265px'
player2.position = 'relative'
player2.width = player2.height = '75px'
let up2 = down2 = left2 = right2 = 0

let left_field_player2 = -495
let top_field_player2 = -30
let right_field_player2 = -105
let bottom_field_player2 = -495

// ball
let ball = document.getElementById('ball')
let balls = ball.style
balls.backgroundColor = 'red'
balls.left = '-630px'
balls.bottom = '-290px'
balls.position = 'relative'
balls.width = balls.height = '25px'

let speed = 10

// Keyboard Function on Keydown
document.onkeydown = function(event) {
    let key = String.fromCharCode(event.keyCode);
    // Player 1
    if (key === 'W') up1 = 1;
    if (key === 'S') down1 = 1;
    if (key === 'A') left1 = 1;
    if (key === 'D') right1 = 1;
    
    // Player 2
    if (key === 'I') up2 = 1;
    if (key === 'K') down2 = 1;
    if (key === 'J') left2 = 1;
    if (key === 'L') right2 = 1;
};

// Keyboard Function on Keyup
document.onkeyup = function(event) {
    let key = String.fromCharCode(event.keyCode);
    // Player 1
    if (key === 'W') up1 = 0;
    if (key === 'S') down1 = 0;
    if (key === 'A') left1 = 0;
    if (key === 'D') right1 = 0;
    
    // Player 2
    if (key === 'I') up2 = 0;
    if (key === 'K') down2 = 0;
    if (key === 'J') left2 = 0;
    if (key === 'L') right2 = 0;
};

function movePlayer1(){
    if (left1 === 1) {
        var leftNumbers = player1.left.replace('px', '')
        var left = parseInt(leftNumbers, 10)
        left -= speed
        if (left < left_field_player1) player1.left = left_field_player1
        else player1.left = `${left}px`
    }
    if (right1 === 1) {
        var rightNumbers = player1.left.replace('px', '')
        var right = parseInt(rightNumbers, 10)
        right += speed
        if (right > right_field_player1) player1.left = right_field_player1
        else player1.left = `${right}px`
    }
    if (up1 === 1) {
        var topNumbers = player1.bottom.replace('px', '')
        var top = parseInt(topNumbers, 10)
        top += speed
        if (top > top_field_player1) player1.bottom = top_field_player1
        else player1.bottom = `${top}px`
    }
    if (down1 === 1) {
        var bottomNumbers = player1.bottom.replace('px', '')
        var bottom = parseInt(bottomNumbers, 10)
        bottom -= speed
        if (bottom < bottom_field_player1) player1.bottom = bottom_field_player1
        else player1.bottom = `${bottom}px`
    }
}

function movePlayer2(){
    if (left2 === 1) {
        var leftNumbers = player2.left.replace('px', '')
        var left = parseInt(leftNumbers, 10)
        left -= speed
        if (left < left_field_player2) player2.left = left_field_player2
        else player2.left = `${left}px`
    }
    if (right2 === 1) {
        var rightNumbers = player2.left.replace('px', '')
        var right = parseInt(rightNumbers, 10)
        right += speed
        if (right > right_field_player2) player2.left = right_field_player2
        else player2.left = `${right}px`
    }
    if (up2 === 1) {
        var topNumbers = player2.bottom.replace('px', '')
        var top = parseInt(topNumbers, 10)
        top += speed
        if (top > top_field_player2) player2.bottom = top_field_player2
        else player2.bottom = `${top}px`
    }
    if (down2 === 1) {
        var bottomNumbers = player2.bottom.replace('px', '')
        var bottom = parseInt(bottomNumbers, 10)
        bottom -= speed
        if (bottom < bottom_field_player2) player2.bottom = bottom_field_player2
        else player2.bottom = `${bottom}px`
    }
}
function startGame(){
    movePlayer1()
    movePlayer2()
}
window.onload = function() {
    // player_first = document.getElementById('player1')
    // player_2nd = document.getElementById('player2')
    setInterval("startGame()",100);
};
