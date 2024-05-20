let score = 0;
let tempNum;
let currentAnswer;

$(document).ready(() => {
    $(".answer-box").hide()
    $(".score").hide()
})

function generateProblem(min, max) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(tempNum)
    if (!tempNum) {
        console.log("minors!!")
        tempNum = num
    }
    while (num == tempNum) {
        num = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    tempNum = num
    currentAnswer = num * num;
    $(".problem").html(`What is $${num}^2$?`)
    MathJax.typeset()
    console.log(`Real Answer !!! ${currentAnswer}`)
    $(document).ready(() => {
        $(".answer").on("keyup", () => {
            setTimeout(() => {
                if ($(".answer").val() == currentAnswer) {
                    console.log($(".answer").val())
                    score++;
                    $(".score").text(`Score: ${score}`)
                    $(".answer").val("")
                    generateProblem(min, max)
                }
            }, 25)
        })
    })
}

function startSession() {
    const lBound = parseInt($("#lower-bound").val());
    const uBound = parseInt($("#upper-bound").val());
    $(".heading").hide()
    $(".options").hide()
    $(".answer-box").show()
    $(".answer").focus();
    $(".score").show()
    generateProblem(lBound, uBound)
}