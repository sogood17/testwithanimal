const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const startButton = document.querySelector("#start_button");

// console.log(qnaList[0].a[0].type);

function begin() {
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";
    setTimeout(()=> {
        qna.style.WebkitAnimation = "fadeIn 1s";
        qna.style.animation = "fadeIn 1s";
        setTimeout(()=> {
            qna.style.display="block";
            main.style.display="none";
        },450);
        let qnaIndex = 0;
        goNext(qnaIndex);
    },450);

}

startButton.addEventListener("click", begin);
