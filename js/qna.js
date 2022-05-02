const qnaP = document.querySelector("#qnaP");
const answerBox = document.querySelector("#answerBox");
const result = document.querySelector("#result");
const resultImg = document.querySelector("#resultImg");
const resultAnimal = document.querySelector("#resultAnimal");
const resultDesc = document.querySelector("#resultDesc");
const endPoint = 12;
let typeList = [];

let calcul = [
    {name:"mouse", value:0, key:0},
    {name:"cow", value:0, key:1},
    {name:"tiger", value:0, key:2},
    {name:"rabbit", value:0, key:3},
    {name:"dragon", value:0, key:4},
    {name:"snake", value:0, key:5},
    {name:"horse", value:0, key:6},
    {name:"sheep", value:0, key:7},
    {name:"monkey", value:0, key:8},
    {name:"chicken", value:0, key:9},
    {name:"dog", value:0, key:10},
    {name:"pig", value:0, key:11},
   ];
//    console.log(typeList);
//    console.log(typeof(typeList[0]));
// //    console.log(typeof(calcul[0].name));
// calcul[1].value += 2;
// answerNum[0][k] = calcul[i].name

function calResult(qnaIndex, answer){

 for (k=0; k<answer.length; k++) {
    for (i=0; i<endPoint; i++) {
        if (answer[k] == calcul[i].name){
            calcul[i].value += 1 ;
            }
        }
    }
}

function addAnswer(answer, qnaIndex, num){
    const createAnswer = document.createElement("button");
    answerBox.appendChild(createAnswer);
    createAnswer.innerHTML = answer;
    createAnswer.classList.add("answerButton");
    createAnswer.classList.add("mx-auto");
    createAnswer.addEventListener("click", function(){
        const answerButtonAll = document.getElementsByClassName("answerButton");
        for (let i=0; i<answerButtonAll.length; i++){
            answerButtonAll[i].style.display="none";
            }
        const answerList = Number(num);
        typeList = qnaList[qnaIndex].a[answerList].type;
        // console.log(qnaList[qnaIndex].a[answerList].type);
        // console.log(typeList);
        calResult(qnaIndex, typeList);
        goNext(++qnaIndex);
    });

}

// goNext(++qnaIndex);


function showResult(keyNum) {
    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.animation = "fadeOut 1s";
    resultAnimal.innerHTML = infoList[keyNum].name;
    const createImg = document.createElement("img");
    resultImg.appendChild(createImg);
    // const imgNum = max+1;
    createImg.src = "./img/image-"+keyNum+".png";
    createImg.classList = "img-fluid";
    resultDesc.innerHTML = infoList[keyNum].desc;
    setTimeout(()=> {
        result.style.WebkitAnimation = "fadeIn 1s";
        result.style.animation = "fadeIn 1s";
        setTimeout(()=> {
            result.style.display="block";
            qna.style.display="none";
        },450);
        },450);
    
    }


let answer = 0;

function goResult(){
    let max= 0;
    for (i=0; i<endPoint-1; i++){
        // for (k=1; k<endPoint-1; k++){
            if (calcul[i].value > max){
                max = calcul[i].value;
                answer = calcul[i].name;
                keyNum = calcul[i].key;
            }
    }
    // console.log(max);
    // console.log(calcul);
    // console.log(answer);
    showResult(keyNum);
}

function goNext(qnaIndex){
    if (qnaIndex == endPoint){
        goResult();
    } else {
    qnaP.innerHTML = qnaList[qnaIndex].q;
    for(let i in qnaList[qnaIndex].a){
        addAnswer(qnaList[qnaIndex].a[i].answer, qnaIndex, i);
    }
}
}
