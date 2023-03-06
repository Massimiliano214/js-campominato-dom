let gameStart = document.getElementById("avvioGioco");
let deathList = [];

scoreCheck = 0;




gameStart.addEventListener("click",
    function() {
        const currentElement = document.querySelector(".mainBottom");
        currentElement.classList.toggle("containerList");
        deathList = [];
        
        createNewSquare();
    }
);



function createNewSquare() {

    const levelDom = document.getElementById("difficolta");
    level = levelDom.value;

    let cells;
    let cellForSide;

    if (level == 101) {
        cells = 100;
    } else if (level == 82){
        cells = 81;
    } else {
        cells = 49;
    }

    cellForSide = Math.sqrt(cells);
    quadratiDaMettere(cells, cellForSide, level);

    
    while (deathList.length < 16) {
        const numberChosen = deathNote(level);
        if (deathList.includes(numberChosen)) {
            deathNote(level);
        } else {
            deathList.push(numberChosen);
        }
        
    };
    console.log(deathList);
};

function quadratiDaMettere(cells, cellForSide, level) {
    const gridDom = document.querySelector(".containerSquares");
    gridDom.innerHTML = "";
    let dead = false;
    for (let i = 1; i <= cells; i++) {
        
        let currentCell= ownCell(cellForSide, i)

        currentCell.addEventListener("click", function(){
            console.log(i);
            
            let scoreDom = document.querySelector(".score");
            
            
            if(deathList.includes(i)) {
                this.classList.add("bomb");
                dead = true;
                console.log(dead);
                scoreDom.innerHTML ="la partita è finita, hai perso " + scoreCheck;

            } else if (dead == false) {
                console.log(dead);
                scoreCheck++;
                this.classList.toggle("clicked");
                scoreDom.innerHTML = scoreCheck;
            } else if ((dead == false) && (scoreCheck == (level - 16)))  {
                console.log(dead);
                scoreDom.innerHTML ="la partita è finita, hai Vinto " + scoreCheck;
                scoreDom.innerHTML = scoreCheck;
            }
                            //currentCell[deathList].classList.add("bomb");

            console.log(i);
        });

        gridDom.append(currentCell);
    }
};

function ownCell(cellForSide, number) {
    const totCells = document.createElement("div");
    totCells.classList.add("squares");
    totCells.style.width = `calc(100% / ${cellForSide})`;
    totCells.style.height = `calc(100% / ${cellForSide})`;
    totCells.innerHTML = ` <div class="cell-numer">${number}</div>`;
    return totCells;
}

function deathNote(max) {
    deathNumber = Math.floor(Math.random() * max) + 1;
    return deathNumber;
}



