let score = 0;
let tempNum

$(document).ready(() => {
    $(".answer-box").hide()
    $(".score").hide()
})

function generateProblem(min, max) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!tempNum) {
        tempNum = num
    } else if (num == tempNum) {
        while (num != tempNum) {
            num = Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
    let answer = num * num;
    $(".problem").html(`What is $${num}^2$?`)
    MathJax.typeset()

    $(".answer").keyup(() => {
        if ($(".answer").val() == answer) {
            score++;
            $(".score").text(`Score: ${score}`)
            $(".answer").val("")
            generateProblem(min, max)
        }
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
