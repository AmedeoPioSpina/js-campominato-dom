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
        let pNumElement = pNumElementGenFunc(i);
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

const pNumElementGenFunc = (num) => {
    let pElement = document.createElement("p")
    pElement.classList.add("square-num");
    pElement.textContent = num;
    return pElement
}

const injectElementFunc = (parentTarget, elementTarget) => {
    let gridGameContainer = document.querySelector(parentTarget);
    gridGameContainer.appendChild(elementTarget);
}

app();