var clicks = 0, wins = 0;
var mat = [ ];

document.onload = game();

for(var i = 1; i <= 3; ++i) {
    mat[i] = [ ];
    for(var j = 1; j <= 3; ++j) {
        mat[i][j] = 0; 
    }
}

function game() {
    for (let i = 1; i <= 3; ++i) {
        for (let j = 1; j <= 3; ++j) {
            let newElem1 =  document.createElement("h2");
            let newContent1 = document.createTextNode("");
            newElem1.appendChild(newContent1);
            newElem1.id = i * 10 + j;    
            let currentElement1 = document.getElementById("TicTacToe");
            currentElement1.appendChild(newElem1);
            newElem1.onclick = function() {
                addContent(newElem1);
            }   
        }
    } 
}

function addContent(elem) {
    if (clicks % 2 == 0 && document.getElementById(elem.id).innerHTML == "" && wins == 0) {
         document.getElementById(elem.id).innerHTML = 'X';
         mat[Math.floor(elem.id / 10)][Math.floor(elem.id% 10)] = '1';
         ++clicks;     
        if (findWinner(1) == 1) {
            alert ("X WINS");
        }   
     } else if (clicks % 2 != 0 && document.getElementById(elem.id).innerHTML == "" && wins == 0){
         document.getElementById(elem.id).innerHTML = '0';
         mat[Math.floor(elem.id/ 10)][Math.floor(elem.id % 10)] = '2';
         ++clicks; 
         if (findWinner(2) == 1) {
            alert ("0 WINS");
        } 
     }
     if (findWinner() == 0 && clicks == 9) {
         const dialog = document.getElementById("drawdialog");
         const playbtn = document.getElementById("refreshgame");
         dialog.show();
         playbtn.addEventListener('click', function playagain(){
             playAgain();
         });
     }
}

function findWinner(winner) {
        if((mat[1][1] == mat[1][2]) && (mat[1][2] == mat[1][3]) && (mat[1][3] == winner)) { 
            wins = 1;
            return 1;
        }
        if ((mat[1][1] == mat[2][1]) && (mat[2][1] == mat[3][1]) && (mat[3][1] == winner)) {
            wins = 1;
            return 1;
        }
        if ((mat[1][1] == mat[2][2]) && (mat[2][2] == mat[3][3]) && (mat[3][3] == winner)) {
            wins = 1;
            return 1;
        }
        if ((mat[2][1] == mat[2][2]) && (mat[2][2] == mat[3][2]) && (mat[3][2] == winner)) {
            wins = 1;
            return 1;
        }
        if ((mat[1][3] == mat[2][3]) && (mat[2][3] == mat[3][3]) && (mat[3][3]) == winner) {
            wins = 1;
            return 1;
        }
        if ((mat[1][3] == mat[2][2]) && (mat[2][2] == mat[3][1]) && (mat[3][1] == winner)) {
            wins = 1;
            return 1;
        }
        if ((mat[2][1] == mat[2][2]) && (mat[2][2] == mat[2][3]) && (mat[2][3] == winner)) {
            wins = 1;
            return 1;
        }
        if ((mat[3][1] == mat[3][2]) && (mat[3][2] == mat[3][3]) && (mat[3][3] == winner)){
            wins = 1;
            return 1;
        }
        return 0;  
}

function playAgain() {
    location.reload();
}
