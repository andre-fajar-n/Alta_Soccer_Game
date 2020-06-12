// kickoff ball
let initial_x = '0px'
let initial_y = '-285px'
let initial_player1_x = '-335px'
let initial_player1_y = '-260px'
let initial_player2_x = '335px'
let initial_player2_y = '-260px'

// ball
let ball = document.getElementById('ball').style
ball.left = initial_x
ball.bottom = initial_y
ball.position = 'relative'
ball.width = ball.height = '25px'

// ball position
let pos_ball = convertPixelToInteger(ball)
let pos_ball_x = pos_ball[0]
let pos_ball_y = pos_ball[1]

// player1
let player1 = document.getElementById('player1').style
player1.left = initial_player1_x
player1.bottom = initial_player1_y
player1.position = 'relative'
player1.width = player1.height = '75px'
let up1 = down1 = left1 = right1 = 0

let left_field_player1 = -335
let top_field_player1 = -20
let right_field_player1 = 435
let bottom_field_player1 = -500

// player 2
let player2 = document.getElementById('player2').style
player2.left = initial_player2_x
player2.bottom = initial_player2_y
player2.position = 'relative'
player2.width = player2.height = '75px'
let up2 = down2 = left2 = right2 = 0

let left_field_player2 = -435
let top_field_player2 = -20
let right_field_player2 = 335
let bottom_field_player2 = -500

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

// speed
let speed = 20
let speed_ball_x = 0
let speed_ball_y = 0

// sounds
let kick_sound = new Audio()
let goal_sound = new Audio()
let backsound = new Audio()

kick_sound.src = "asset/sound/kick.wav"
goal_sound.src = "asset/sound/goal1.wav"
backsound.src = "asset/sound/tsubasa.mp3"

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
    
    speed_ball_x *= 0.98
    speed_ball_y *= 0.98
    
    if (Math.abs(speed_ball_x) < 0.5) speed_ball_x = 0
    if (Math.abs(speed_ball_y) < 0.5) speed_ball_y = 0
    
    handlerCollision()
    kick()
    goal()
}

function handlerCollision(){
    if (pos_ball_y > top_field) speed_ball_y *= -1
    if (pos_ball_y < bottom_field) speed_ball_y *= -1
    if (pos_ball_x > right_field && (pos_ball_y > goal_top || pos_ball_y < goal_bottom)) speed_ball_x *= -1
    if (pos_ball_x < left_field && (pos_ball_y > goal_top || pos_ball_y < goal_bottom)) speed_ball_x *= -1
}

function goal(){
    if ((goal_top > pos_ball_y && pos_ball_y > goal_bottom) && pos_ball_x > right_field) {
        score_p1++
        scoreP1.innerHTML = `Score: ${score_p1}`
        goal_sound.play()
        resetBall()
    }
    if ((goal_top > pos_ball_y && pos_ball_y > goal_bottom) && pos_ball_x < left_field) {
        score_p2++
        scoreP2.innerHTML = `Score: ${score_p2}`
        goal_sound.play()
        resetBall()
    }
}

function resetBall(){
    ball.left = initial_x
    ball.bottom = initial_y
    pos_ball = convertPixelToInteger(ball)
    pos_ball_x = pos_ball[0]
    pos_ball_y = pos_ball[1]
    player1.left = initial_player1_x
    player1.bottom = initial_player1_y
    player2.left = initial_player2_x
    player2.bottom = initial_player2_y
    speed_ball_x = 0
    speed_ball_y = 0
}

function distanceTwoPoint(x1, y1, x2, y2){
    return Math.sqrt((x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2))
}

function angleTwoPoint(x1, y1, x2, y2){
    return Math.atan2((y2 - y1), (x2 - x1));
}

function kick(){
    let x1 = player1.left.replace('px', '')
    let x_coordinat_1 = parseInt(x1, 10)
    x_coordinat_1 -= 50
    
    let y1 = player1.bottom.replace('px', '')
    let y_coordinat_1 = parseInt(y1, 10)
    y_coordinat_1 -= 25
    
    let x2 = player2.left.replace('px', '')
    let x_coordinat_2 = parseInt(x2, 10)
    x_coordinat_2 += 50
    
    let y2 = player2.bottom.replace('px', '')
    let y_coordinat_2 = parseInt(y2, 10)
    y_coordinat_2 -= 25

    let distance_1 = distanceTwoPoint(x_coordinat_1, y_coordinat_1, pos_ball_x, pos_ball_y)
    
    let distance_2 = distanceTwoPoint(x_coordinat_2, y_coordinat_2, pos_ball_x, pos_ball_y)
    
    if (Math.abs(distance_1) <= 50) {
        let angle_1 = angleTwoPoint(x_coordinat_1, y_coordinat_1, pos_ball_x, pos_ball_y)
        speed_ball_x = speed*Math.cos(angle_1)
        speed_ball_y = speed*Math.sin(angle_1)
        kick_sound.play()
    }
    if (Math.abs(distance_2) <= 50) {
        let angle_2 = angleTwoPoint(x_coordinat_2, y_coordinat_2, pos_ball_x, pos_ball_y)
        speed_ball_x = speed*Math.cos(angle_2)
        speed_ball_y = speed*Math.sin(angle_2)
        kick_sound.play()
    }
}


function movePlayer1(){
    var p1x = player1.left.replace('px', '')
    var p1_x = parseInt(p1x, 10)
    var p1y = player1.bottom.replace('px', '')
    var p1_y = parseInt(p1y, 10)
    if (left1 === 1) {
        p1_x -= speed
        if (p1_x < left_field_player1) player1.left = left_field_player1
        else player1.left = `${p1_x}px`
    }
    if (right1 === 1) {
        p1_x += speed
        if (p1_x > right_field_player1) player1.left = right_field_player1
        else player1.left = `${p1_x}px`
    }
    if (up1 === 1) {
        p1_y += speed
        if (p1_y > top_field_player1) player1.bottom = top_field_player1
        else player1.bottom = `${p1_y}px`
    }
    if (down1 === 1) {
        p1_y -= speed
        if (p1_y < bottom_field_player1) player1.bottom = bottom_field_player1
        else player1.bottom = `${p1_y}px`
    }
}

function movePlayer2(){
    var p2x = player2.left.replace('px', '')
    var p2_x = parseInt(p2x, 10)
    var p2y = player2.bottom.replace('px', '')
    var p2_y = parseInt(p2y, 10)
    if (left2 === 1) {
        p2_x -= speed
        if (p2_x < left_field_player2) player2.left = left_field_player2
        else player2.left = `${p2_x}px`
    }
    if (right2 === 1) {
        p2_x += speed
        if (p2_x > right_field_player2) player2.left = right_field_player2
        else player2.left = `${p2_x}px`
    }
    if (up2 === 1) {
        p2_y += speed
        if (p2_y > top_field_player2) player2.bottom = top_field_player2
        else player2.bottom = `${p2_y}px`
    }
    if (down2 === 1) {
        p2_y -= speed
        if (p2_y < bottom_field_player2) player2.bottom = bottom_field_player2
        else player2.bottom = `${p2_y}px`
    }
}

function endGame(){
    if (score_p1 === 2) {
        alert('Player1 Win!!!')
    } else if (score_p2 === 2) {
        alert('Player2 Win!!!')
    }
}

function startGame(){
    backsound.play()
    movePlayer1()
    movePlayer2()
    moveBall()
    endGame()
}
window.onload = function() {
    setInterval("startGame()",100);
};
