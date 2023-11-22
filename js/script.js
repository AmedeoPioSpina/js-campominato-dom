const app = () => {
    let btn = document.querySelector(".start-btn");
    btn.addEventListener("click", () => {
        let gridGameElement = gridGameGenFunc();
        suqareSetAndAssembleFunc(gridGameElement);
        injectElementFunc(".grid-game-container", gridGameElement);
    })
}

const gridGameGenFunc = () => {
    let gridGame = document.createElement("div")
    gridGame.classList.add("grid-game");
    return gridGame;
}

const suqareSetAndAssembleFunc = (gridGameTarget) => {
    for(let i = 1; i <= 100; i++){
        let squareElement = squareGenFunc();
        let pNumElement = pNumElementGenFunc();
        squareElement.addEventListener("click", () => {
            squareElement.classList.toggle("bg-light-blue")
            console.log(pNumElement.textContent);
        })
        squareElement.appendChild(pNumElement)
        gridGameTarget.appendChild(squareElement);
    }
}

const squareGenFunc = () => {
    let newSquareElement = document.createElement("div")
    newSquareElement.classList.add("square");
    return newSquareElement;
}

const pNumElementGenFunc = () => {
    let pElement = document.createElement("p")
    let num = numAssignmentFunc();
    pElement.classList.add("square-num");
    pElement.textContent = num;
    return pElement
}

const numAssignmentFunc = () => {
    debugger;
    let squareNumList = document.querySelectorAll(".square-num");
    let squareNumValueList = Array.from(squareNumList, (x) => x.textContent);
    let randomNum = randomNumGenFunc();
    let status = false;

    while(!status){
        if(squareNumValueList.includes(randomNum) === false || squareNumList.length === 0){
            status = true;
        }
        else{
            randomNum = randomNumGenFunc();
        }
    }
    return randomNum
}

const randomNumGenFunc = () => {
    return Math.floor(Math.random() * 100 + 1); 
}

const injectElementFunc = (parentTarget, elementTarget) => {
    let gridGameContainer = document.querySelector(parentTarget);
    gridGameContainer.appendChild(elementTarget);
}

app();