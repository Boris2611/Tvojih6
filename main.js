 // -------------- KVOTA ------------------------
 let kvota = ["None", "None", "None", "None", "None",
 10000, 7500, 5000, 2500, 1000, 500, 300,
 200, 150, 100, 90, 80, 70, 60, 50, 40,
 30, 25, 20, 15, 10, 9, 8, 7, 6, 5, 4,
 3, 2, 1]

// -------------- RANDOM NUMS --------------------
 
var arr = []
function rand(){
    arr = []
    // 35 random brojeva
    while(arr.length < 35){
      var candidateInt = Math.floor(Math.random() * 48) + 1
      if(arr.indexOf(candidateInt) === -1) arr.push(candidateInt)
    } 
 }


const ballSound = new Audio("ball.wav")

let gameStart;
let newGame;

let id;
let idd;
let idRemove;
let counter = -1;
let counter2;

let izasle = [];

let klasa;
let show;
let wait;

let turn = 1;
let firstRound = 1;


function start() {
    clearTimeout(newGame)
    if(firstRound == 1) {
        rand()
    }
    document.getElementById("kolo").innerHTML = turn;

    gameStart = setTimeout(ball, 3000)
}

function ball() {
    firstRound = 0;
    counter += 1;
    idd = arr[counter];
    counter2 = counter + 1;

    console.log(arr)

    document.getElementById("izaslo").innerHTML = "Izaslo: " +   counter2;


    if (idd == 1 || idd == 9 || idd == 17 || idd == 25 || idd == 33 || idd == 41) {
        klasa = "red"
    }

    else if (idd == 2 || idd == 10 || idd == 18 || idd == 26 || idd == 34 || idd == 42) {
        klasa = "limegreen"
    }

    else if (idd == 3 || idd == 11 || idd == 19 || idd == 27 || idd == 35 || idd == 43) {
        klasa = "blue"
    }

    else if (idd == 4 || idd == 12 || idd == 20 || idd == 28 || idd == 36 || idd == 44) {
        klasa = "purple"
    }

    else if (idd == 5 || idd == 13 || idd == 21 || idd == 29 || idd == 37 || idd == 45) {
        klasa = "white"
    }

    else if (idd == 6 || idd == 14 || idd == 22 || idd == 30 || idd == 38 || idd == 46) {
        klasa = "yellow"
    }

    else if (idd == 7 || idd == 15 || idd == 23 || idd == 31 || idd == 39 || idd == 47) {
        klasa = "orange"
    }

    else if (idd == 8 || idd == 16 || idd == 24 || idd == 32 || idd == 40 || idd == 48) {
        klasa = "black"
    }

    id = "ball" + counter2;

    document.getElementById('bigBallNum').style.visibility = "visible";
    document.getElementById('bigBallNum').innerHTML = idd;
    document.getElementById('bigBall').style.background = klasa;


    izasle.push(idd);
    console.log(izasle)
    console.log(id)



    show = setTimeout(showNum, 1000)


    if (izasle.length == 35) {
        counter = -1;
        // STOPS
        clearInterval(gameStart)
        rand()
        izasle = [];
        wait = setTimeout(clearBalls, 4000)
    }
    else if (izasle.length < 35) {
        clearTimeout(gameStart)
        start()
    }
}


function showNum() {
    ballSound.play()
    clearTimeout(show)
    document.getElementById('bigBallNum').style.visibility = "hidden";
    document.getElementById('bigBallNum').innerHTML = '';
    document.getElementById('bigBall').style.background = '';
    document.getElementById(id).innerHTML = idd;
    document.getElementById(id).className = klasa;

}

function clearBalls() {
    clearTimeout(wait)

    turn += 1;
    document.getElementById("kolo").innerHTML = turn;
    for (let i = 1; i < 36; i++) {
        idRemove = "ball" +  i;
        document.getElementById(idRemove).innerHTML = '';
        document.getElementById(idRemove).className = 'balls';
        }

    console.log("Game Ended")
    newGame = setTimeout(start, 5000)
    }