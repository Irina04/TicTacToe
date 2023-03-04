var clicks = 0, wins = 0;
var mat = [ ];
for(var i = 1; i <= 3; ++i) {
    mat[i] = [ ];
    for(var j = 1; j <= 3; ++j) {
        mat[i][j] = 0; 
    }
}
document.onload = game();
function game() {
    for (let i = 1; i <= 3; ++i) {
        for (let j = 1; j <= 3; ++j) {
            let newElem1 =  document.createElement("h2");
            let newContent1 = document.createTextNode("");
    
            newElem1.appendChild(newContent1);
            newElem1.id = i * 10 + j;    
            let currentElement1 = document.getElementById("noIdea1");
            currentElement1.appendChild(newElem1);
            newElem1.addEventListener('click', ()=>{ 
                if (clicks % 2 == 0 && document.getElementById(newElem1.id).innerHTML == "") {
                    document.getElementById(newElem1.id).innerHTML = 'X';
                    mat[Math.floor(newElem1.id / 10)][Math.floor(newElem1.id% 10)] = '1';
                    ++clicks;
                    if (clicks <= 9 && wins == 0) {
                        if((mat[1][1] == mat[1][2]) && (mat[1][2] == mat[1][3]) && (mat[1][3] == 1)) {
                            alert ("X wins");
                            wins = 1;
                        }
                        if ((mat[1][1] == mat[2][1]) && (mat[2][1] == mat[3][1]) && (mat[3][1] == 1)) {
                            alert ("X wins");
                            wins = 1;
                        }
                        if ((mat[1][1] == mat[2][2]) && (mat[2][2] == mat[3][3]) && (mat[3][3] == 1)) {
                            alert("X wins");
                            wins = 1;
                        }
                        if ((mat[2][1] == mat[2][2]) && (mat[2][2] == mat[2][3]) && (mat[2][3] == 1)) {
                            alert("X wins");
                            wins = 1;
                        }   
                        if ((mat[1][3] == mat[2][3]) && (mat[2][3] == mat[3][3]) && (mat[3][3]) == 1) {
                            alert("X wins");
                            wins = 1;
                        }
                        if ((mat[1][3] == mat[2][2]) && (mat[2][2] == mat[3][1]) && (mat[3][1] == 1)) {
                            alert("X wins");
                            wins = 1;
                        }
                        if ((mat[2][1] == mat[2][2]) && (mat[2][2] == mat[2][3]) && (mat[2][3] == 1)) {
                            alert("X wins");
                            wins = 1;
                        }
                        if ((mat[3][1] == mat[3][2]) && (mat[3][2] == mat[3][3]) && (mat[3][3] == 1)){
                            alert("X wins");
                            wins = 1;
                        } 
                    }         
                } else if (clicks % 2 != 0 && document.getElementById(newElem1.id).innerHTML == ""){
                    document.getElementById(newElem1.id).innerHTML = '0';
                    mat[Math.floor(newElem1.id/ 10)][Math.floor(newElem1.id % 10)] = '2';
                    ++clicks;
                    if (clicks <= 9 && wins == 0) {
                        if((mat[1][1] == mat[1][2]) && (mat[1][2] == mat[1][3]) && (mat[1][3] == 2)) {
                            alert ("0 wins");  
                            wins = 1;
                        }
                        if ((mat[1][1] == mat[2][1]) && (mat[2][1] == mat[3][1]) && (mat[3][1] == 2)) {
                            alert ("0 wins");
                            wins = 1;
                        }
                        if ((mat[1][1] == mat[2][2]) && (mat[2][2] == mat[3][3]) && (mat[3][3] == 2)) {
                                alert("0 wins");
                                wins = 1;
                        }
                        if ((mat[2][1] == mat[2][2]) && (mat[2][2] == mat[2][3]) && (mat[2][3] == 2)) {
                            alert("0 wins");
                            wins = 1;
                        }
                        if ((mat[1][3] == mat[2][3]) && (mat[2][3] == mat[3][3]) && (mat[3][3]) == 2) {
                            alert("0 wins");
                            wins = 1;
                        }
                        if ((mat[1][3] == mat[2][2]) && (mat[2][2] == mat[3][1]) && (mat[3][1] == 2)) {
                            alert("0 wins");
                            wins = 1;
                        }
                        if ((mat[2][1] == mat[2][2]) && (mat[2][2] == mat[2][3]) && (mat[2][3] == 2)) {
                                alert("0 wins");
                                wins = 1;
                        }
                        if ((mat[3][1] == mat[3][2]) && (mat[3][2] == mat[3][3]) && (mat[3][3] == 2)){
                            alert("0 wins");
                            wins = 1;
                        }
                    }  
                } 
                if (clicks == 9 && wins == 0) {
                    const dialog = document.getElementById("drawdialog");
                    const playbtn = document.getElementById("refreshgame");
                    dialog.show();
                    playbtn.addEventListener('click', function playagain(){
                        location.reload();
                    });
                }
            });
             
        }
    }
    
}
function playAgain() {
    location.reload();
}
