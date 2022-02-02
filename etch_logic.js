let gameWindow = document.getElementById("gamewindow");
let boardSize = document.querySelector(':root');

let assignedBoardSize = 8;

let sizeText = document.createElement("p");
sizeText.classList.add("gamewindow2text");

let lowerGameWindow = document.getElementById("gamewindow2");

let resetButton = document.getElementById("resetbutton");

resetButton.addEventListener("click", function (){
    addCellsToBoard(assignedBoardSize)
});


addCellsToBoard(assignedBoardSize)


$("#slide").on("change", function(){
    assignedBoardSize = $(this).val();

    addCellsToBoard(assignedBoardSize)
})



function addCellsToBoard(value){

    setBoardSize(value);
    removeAllChildren(gameWindow);

    for (let i = 0; i < getBoardSize()*getBoardSize(); i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("onmouseover", `this.style.background="black"`)
        gameWindow.append(cell);
    }




    sizeText.innerHTML = getBoardSize() + " x " + getBoardSize();
    lowerGameWindow.appendChild(sizeText)

}


function getBoardSize() {
    let getBS = getComputedStyle(boardSize);
    return getBS.getPropertyValue("--cell-count");
}

function setBoardSize(setSize){
    boardSize.style.setProperty("--cell-count",setSize);
}

function removeAllChildren(parent) {
    while (parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
}

