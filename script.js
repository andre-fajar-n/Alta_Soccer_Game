// ball
let ball = document.getElementById('ball').style
ball.backgroundColor = 'red'
ball.left = '-100px'
ball.bottom = '-280px'
ball.position = 'relative'
ball.width = ball.height = '25px'

// ball position
let pos_ball = convertPixelToInteger(ball)
let pos_ball_x = pos_ball[0]
let pos_ball_y = pos_ball[1]

// player1
let player1 = document.getElementById('player1').style
player1.backgroundColor = '#FF69B4'
player1.left = `${-385 + 50}px`
player1.bottom = `${pos_ball_y + 25}px`
player1.position = 'relative'
player1.width = player1.height = '75px'
let up1 = down1 = left1 = right1 = 0

let pos_p1 = convertPixelToInteger(player1)
let pos_p1_x = pos_p1[0]
let pos_p1_y = pos_p1[1]

let left_field_player1 = -335
let top_field_player1 = -30
let right_field_player1 = 15
let bottom_field_player1 = -490

// player 2
let player2 = document.getElementById('player2').style
player2.backgroundColor = 'blue'
player2.left = '335px'
player2.bottom = '-260px'
player2.position = 'relative'
player2.width = player2.height = '75px'
let up2 = down2 = left2 = right2 = 0

let left_field_player2 = -15
let top_field_player2 = -30
let right_field_player2 = 335
let bottom_field_player2 = -490

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
let score_p1 = 0
let score_p2 = 0

scoreP1.innerHTML = `Score: ${score_p1}`
scoreP2.innerHTML = `Score: ${score_p2}`

let speed = 10
let speed_ball_x = 0
let speed_ball_y = 0

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
    pos_ball_x += speed_ball_x
    ball.left = `${pos_ball_x}px`
    
    pos_ball_y += speed_ball_y
    ball.bottom = `${pos_ball_y}px`

    handlerCollision()
    kick()

    speed_ball_x *= 0.98
    speed_ball_y *= 0.98

    if (Math.abs(speed_ball_x) < 0.5) speed_ball_x = 0
    if (Math.abs(speed_ball_y) < 0.5) speed_ball_y = 0
}

function resetBall(){
    ball.left = '0px'
    ball.bottom = '-280px'
    startGame()
}

function distanceTwoPoint(x1, y1, x2, y2){
    return Math.sqrt((x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2))
}

function kick(){
    let leftNumbers = player1.left.replace('px', '')
    let x_coordinat = parseInt(leftNumbers, 10)
    x_coordinat -= 50
    
    let rightNumbers = player1.bottom.replace('px', '')
    let y_coordinat = parseInt(rightNumbers, 10)
    y_coordinat -= 25
    let distance = distanceTwoPoint(x_coordinat, y_coordinat, pos_ball_x, pos_ball_y)
    if (Math.abs(distance) <= 50) {
        speed_ball_x = speed
    }
}

function handlerCollision(){
    if (pos_ball_y > top_field) speed_ball_y *= -1
    if (pos_ball_y < bottom_field) speed_ball_y *= -1
    if (pos_ball_x > right_field && (pos_ball_y > goal_top || pos_ball_y < goal_bottom)) speed_ball_x *= -1
    
    // goal condition
    // if (goal_top > pos_ball_y > goal_bottom && pos_ball_x > right_field) {
    //     score_p1 += 1
    //     scoreP1.innerHTML = `Score: ${score_p1}`
    //     return resetBall()
    // }

    if (pos_ball_x < left_field && (pos_ball_y > goal_top || pos_ball_y < goal_bottom)) speed_ball_x *= -1

    // goal condition
    // else if (goal_top > pos_ball_y > goal_bottom && pos_ball_x < left_field) {
    //     resetBall()
    //     score_p2 += 1
    //     scoreP2.innerHTML = `Score: ${score_p2}`
    // }
    // if (Math.abs(right - pos_ball_x) <= 50) speed_ball_x = speed


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
    // goal()
}
window.onload = function() {
    setInterval("startGame()",100);
};
