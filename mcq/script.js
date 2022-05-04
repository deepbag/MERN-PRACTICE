// const getResult = () => {
//     const resultNumber = document.querySelector('.result-Number');
//     const resultPassOrFail = document.querySelector('.result-passorfail');

//     // Value from Inputs
//     const reactJS = document.querySelector('input[name="RECTJS"]:checked').value;
//     const mangoDB = document.querySelector('input[name="MANGODB"]:checked').value;
//     const HP = document.querySelector('input[name="HP"]:checked').value;
//     const macBook = document.querySelector('input[name="MACBOOK"]:checked').value;
//     const computer = document.querySelector('input[name="COMPUTER"]:checked').value;

//     const getValue = {
//         REACTJS: reactJS,
//         MANGODB: mangoDB,
//         HPLAPTOP: HP,
//         MACBOOK: macBook,
//         COMPUTER: computer 
//     }
//     console.log(getValue)

//     const mcqAnswer = {
//         REACTJSANS: 'reactjs',
//         MANGODBANS: 'mangodb',
//         HPLAPTOPANS: 'hp',
//         MACBOOKANS: 'macbook',
//         COMPUTERANS: 'computer'
//     }
// }

const resultNumber = document.querySelector('.result-Number');
const resultPassOrFail = document.querySelector('.result-passorfail');
const resultWrongAnswer = document.querySelector('.wrong-answers');

let COUNT = 0;
let WRONG_ANSWER = [];
const PASSING_MARKS = 40;

const mcqAnswer = {
    REACTJSANS: 'reactjs',
    MANGODBANS: 'mangodb',
    HPLAPTOPANS: 'hp',
    MACBOOKANS: 'macbook',
    COMPUTERANS: 'computer'
}

function handleChangeReact(e){
    if(e.value === mcqAnswer.REACTJSANS){
        COUNT = COUNT + 10;
        // console.log(COUNT)
    }else{
        WRONG_ANSWER.push(e.value);
    }
}

function handleChangeMangoDB(e){
    if(e.value === mcqAnswer.MANGODBANS){
        COUNT = COUNT + 10;
        // console.log(COUNT)
    }else{
        WRONG_ANSWER.push(e.value);
    }
}

function handleChangeHP(e){
    if(e.value === mcqAnswer.HPLAPTOPANS){
        COUNT = COUNT + 10;
        // console.log(COUNT)
    }else{
        WRONG_ANSWER.push(e.value);
    }
}

function handleChangeMacBook(e){
    if(e.value === mcqAnswer.MACBOOKANS){
        COUNT = COUNT + 10;
        // console.log(COUNT)
    }else{
        WRONG_ANSWER.push(e.value);
    }
}

function handleChangeComputer(e){
    if(e.value === mcqAnswer.COMPUTERANS){
        COUNT = COUNT + 10;
        // console.log(COUNT)
    }else{
        WRONG_ANSWER.push(e.value);
    }
}

function getResult(){
    // console.log(COUNT)
    resultNumber.innerHTML = COUNT + ' OUT OF 50';
    checkPassOrFail();
    console.log(WRONG_ANSWER)
    if(WRONG_ANSWER){
        resultWrongAnswer.innerHTML = WRONG_ANSWER.join('<br>').toLocaleUpperCase();
    }else{
        resultWrongAnswer.innerHTML = ' NO WRONG ANSWERS';
    }
}

function checkPassOrFail(){
    if(COUNT >= PASSING_MARKS){
        resultPassOrFail.innerHTML = 'PASS';
    }else{
        resultPassOrFail.innerHTML = 'FAIL';
    }
}