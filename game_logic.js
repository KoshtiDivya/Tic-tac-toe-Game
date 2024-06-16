let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newGame = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let turnO = true //player X & player O

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6],
];
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true ;
    }
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false ;
        box.innerText ="";
    }
}
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("clicked")
         if(turnO){
            box.innerText = "O";
            box.style.color="#3e5c76";
            turnO = false;
         }else{
            box.innerText = "X";
            turnO = true;
         }
         box.disabled = true;
         checkWinner();
    })
})
const showWinner = (winner) => {
          msg.innerText = `Congratualations, Winner is ${winner}`;
          msgContainer.classList.remove("hide"); 
}
const checkWinner = () => {
    for( let patterns of winPatterns){
        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner", pos1val);
                showWinner(pos1val);
                disableBoxes();
            }
        }   
    }
}
newGame.addEventListener("click",resetGame);
reset.addEventListener("click", resetGame);
