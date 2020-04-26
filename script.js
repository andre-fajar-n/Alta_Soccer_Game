// player1
let player_first = document.getElementById('player1')
let player1 = player_first.style
player1.backgroundColor = '#FF69B4'
player1.left = '-335px'
player1.bottom = '-260px'
player1.position = 'relative'
player1.width = player1.height = '75px'
let up1 = down1 = left1 = right1 = 0

let left_field_player1 = -335
let top_field_player1 = -30
let right_field_player1 = 15
let bottom_field_player1 = -490

// player 2
let player_2nd = document.getElementById('player2')
let player2 = player_2nd.style
player2.backgroundColor = 'blue'
player2.left = '335px'
player2.bottom = '-260px'
player2.position = 'relative'
player2.width = player2.height = '75px'
let up2 = down2 = left2 = right2 = 0

let left_field_player2 = -5
let top_field_player2 = -30
let right_field_player2 = 335
let bottom_field_player2 = -490

// ball
let ball = document.getElementById('ball')
let balls = ball.style
balls.backgroundColor = 'red'
balls.left = '0px'
balls.bottom = '-280px'
balls.position = 'relative'
balls.width = balls.height = '25px'

// field
let top_field = -30
let bottom_field = -540
let left_field = -410
let right_field = 410

// boundary goal
let goal_top = -220
let goal_bottom = -350

// score
let scoreP1 = document.getElementById('score_p1')
let scoreP2 = document.getElementById('score_p2')
let score_p1 = scoreP1.innerHTML
let score_p2 = scoreP2.innerHTML

score_p1 = 0
score_p2 = 0

let speed = 10
let speed_ball_x = speed_ball_y = 10


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

function convertPixelToInteger(object){
    let str_y = object.bottom.replace('px', '')
    let pos_y = parseInt(str_y, 10)

    let str_x = object.left.replace('px', '')
    let pos_x = parseInt(str_x, 10)

    return [pos_x, pos_y]
}

function moveBall(){
    let pos_ball = convertPixelToInteger(balls)

    pos_ball[0] += speed_ball_x
    balls.left = `${pos_ball[0]}px`
    
    pos_ball[1] += speed_ball_y
    balls.bottom = `${pos_ball[1]}px`

    if (pos_ball[1] > top_field) speed_ball_y *= -1
    if (pos_ball[1] < bottom_field) speed_ball_y *= -1

    if (pos_ball[0] > right_field && (pos_ball[1] > goal_top || pos_ball[1] < goal_bottom)) speed_ball_x *= -1

    if (pos_ball[0] < left_field && (pos_ball[1] > goal_top || pos_ball[1] < goal_bottom)) speed_ball_x *= -1
}

function resetBall(){
    balls.left = '0px'
    balls.bottom = '-280px'
}

function goal(){
    let pos_ball = convertPixelToInteger(balls)
    if (goal_top > pos_ball[1] > goal_bottom && pos_ball[0] > right_field) {
        resetBall()
        score_p1 += 1
    }
}

function handlerCollision(){
    let pos_ball = convertPixelToInteger(balls)
    if (pos_ball[0] > top_field) {
        pos_ball[0] -+ speed_ball
        balls.bottom = `${pos_ball[0]}px`
    }
}

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
    moveBall()
    goal()
}
window.onload = function() {
    // player_first = document.getElementById('player1')
    // player_2nd = document.getElementById('player2')
    setInterval("startGame()",100);
};
