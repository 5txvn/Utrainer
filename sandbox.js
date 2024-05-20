//forgot what gs is supposed to stand for
function gs(num) {
    if (num == 0) {
        if (Math.floor(Math.random() * 2) == 0) {
            return ["/", "\\div"]
        } else {
            return ["*", "\\times"]
        }
    } else if (num == 1) {
        if (Math.floor(Math.random() * 2) == 0) {
            return ["+", "+"]
        } else {
            return ["-", "-"]
        }
    }
}

//random negatizer
function rn(num) {
    if (Math.floor(Math.random() * 2) == 0) {
        return num
    } else {
        if (num == "\\pi") {
            return "-" + num
        } else {
            return (0-num)
        }
    }
}

//number generation function
function gen(multiplier, pi) {
    let multiplierRange = [multiplier, multiplier + 1];
    multiplier = multiplierRange[Math.floor(Math.random() * 2)];
    let num = Math.random() * .9 + .1;
    num = Math.floor(num * Math.pow(10, 3))
    console.log(num)
    num = num / Math.pow(10, (3 - multiplier));
    
    //chance to draw pi
    let chance = Math.floor(Math.random() * 25);
    if (chance == 0 && (multiplier == 0 || multiplier == 1)) {
        return "\\pi"
    } else {
        return num;
    }
}

//choose random number function
function choose(...nums) {
    return nums[Math.floor(Math.random() * nums.length)]
}

function texToJS(string) {
    string = string.replaceAll("\\times", "*");
    string = string.replaceAll("\\div", "/");
    string = string.replaceAll(" = ?", "");
    string = string.replaceAll("\\pi", Math.PI.toString())
    return string
}


function generateCruncher (problem) {
    switch(problem) {
        case 1:
            let type = 1
            switch(type) {
                //tmsca 1
                case 0:
                    //ex (0.99 + 4.54) x 0.0835
                    let problem0 = `(${rn(gen(0, 0))} ${gs(1)[1]} ${gen(0, 0)}) ${gs(0)[1]} ${rn(gen(0, 0))} = ?`
                    let answer = eval(texToJS(problem0))
                    console.log(problem0);
                    console.log(answer)
                    break;
                case 1:
                    //ex. (50.4 - 6.57) / 44.1
                    let problem1 = `(${rn(gen(1, 0))} ${gs(1)[1]} ${gen(1, 0)}) ${gs(0)[1]} ${rn(gen(1, 0))} = ?`
                    console.log([problem1, eval(texToJS(problem1))])
                    break;
            }
    }
}

generateCruncher(1)