window.onload = function(){

    const cellElement = document.querySelectorAll('.cell');
    const playerFirst = document.querySelector('.playerFirst');
    const playerSecond = document.querySelector('.playerSecond');
    const ResultTagH1 = document.querySelector('.result h1');

    const playerFirstO = 'O';
    const playerSecondX = 'X';
    let turnPlayer = true;

    const WINNING_CONDITIONS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    cellElement.forEach((cell)=>{
        cell.onclick=()=>{
            let currentPlayer = turnPlayer ? playerFirstO : playerSecondX;
            cell.classList.add('disabled');
            cell.innerHTML = currentPlayer;
            cell.classList.add(currentPlayer);

            if(winnerCheck(currentPlayer)){
                ResultTagH1.innerText = currentPlayer + " WIN THE GAME!";
                setInterval(function(){location.reload();}, 2000);
            }else if(isDraw()){
                ResultTagH1.innerText = "DRAW THE GAME!";
            }else{
                turnPlayer = !turnPlayer;
                if(turnPlayer){
                    playerFirst.classList.add("active");
                    playerSecond.classList.remove("active");
                }else{
                    playerSecond.classList.add("active");
                    playerFirst.classList.remove("active");
                }
            }
        }
    })


    const winnerCheck = (currentPlayer) => {
        return WINNING_CONDITIONS.some((conditions)=>{
            return conditions.every((index)=>{
                return cellElement[index].classList.contains(currentPlayer);
            })
        })
    }

    const isDraw = () => {
        return [...cellElement].every((cell)=>{
            console.log(cell)
            return cell.classList.contains(playerSecondX) || cell.classList.contains(playerFirstO)
        })
    }
}