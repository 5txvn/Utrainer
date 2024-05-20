// Generate sign
function gs(num) {
  if (num == 0) {
    if (Math.floor(Math.random() * 2) == 0) {
      return "\\div";
    } else {
      return "\\times";
    }
  } else if (num == 1) {
    if (Math.floor(Math.random() * 2) == 0) {
      return "+";
    } else {
      return "-";
    }
  }
}

//random negation-izer
function rn(num, addParentheses) {
  if (addParentheses) {
    if (Math.floor(Math.random() * 2) == 0) {
      return -num;
    }
    return num;
  }
  if (Math.floor(Math.random() * 2) == 0) {
    return "(" + num + ")";
  } else {
    if (num == "\\pi") {
      return "-(" + num + ")";
    } else {
      return "(" + (0 - num) + ")";
    }
  }
}

//number generation function
function gen(multiplier) {
  /* Unknown whether or not we have to include this part
    let multiplierRange = [multiplier, multiplier + 1];
    multiplier = multiplierRange[Math.floor(Math.random() * 2)];
    */
  let num = Math.random() * 0.9 + 0.1;
  num = Math.floor(num * Math.pow(10, 3));
  console.log(num);
  num = num / Math.pow(10, 3 - multiplier);

  //chance to draw pi
  let chance = Math.floor(Math.random() * 25);
  if (chance == 0 && (multiplier == 0 || multiplier == 1)) {
    return "\\pi";
  } else {
    return num;
  }
}

//choose random number function
function choose(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function texToJS(string) {
  string = string.replaceAll("}{", ")/(");
  string = string.replaceAll("\\frac{", "(");
  string = string.replaceAll("}", ")");
  string = string.replaceAll("\\times", "*");
  string = string.replaceAll("\\div", "/");
  string = string.replaceAll("\\pi", Math.PI.toString());
  return string;
}

function generateCruncher(problem) {
  switch (problem) {
    case 1:
      let type1 = 2; //choose(0,2)
      switch (type1) {
        //tmsca 1 2 3
        case 0:
          let n0 = choose(0, 2);
          //ex (0.99 + 4.54) x 0.0835
          let problem0 = `(${rn(gen(n0))} ${gs(1)} ${gen(n0)}) ${gs(0)} ${rn(gen(n0 + 1))}`;
          return [problem0, math.evaluate(texToJS(problem0))];
          break;
        //tmsca 4 5
        case 1:
          let n1 = choose(-1, 2);
          let problem1 = `${rn(gen(n1))} ${gs(1)} ${gen(n1)} ${gs(1)} ${gen(n1)}`;
          return [problem1, math.evaluate(texToJS(problem1))];
          break;
        //uil c
        case 2:
          let n2 = choose(1, 2);
          let problem2 = `(${rn(gen(n2))} \\times ${rn(gen(n2))}) ${gs(1)} ${gen(n2 + 1)}`;
          return [problem2, math.evaluate(texToJS(problem2))];
          break;
      }
      break;
    case 2:
      let type2 = choose(0, 3);
      switch (type2) {
        case 0:
          let n0 = choose(0, 1);
          let problem0 = `(${rn(gen(n0))} ${gs(1)} ${gen(n0)})/${gen(n0)} ${gs(1)} ${gen(n0 - 1)}`;
          return [problem0, math.evaluate(texToJS(problem0))];
          break;
        case 1:
          let n1 = choose(1, 2);
          let problem1 = `(${gen(n1)} ${gs(1)} ${gen(n1)})\\times ${gen(n1)} ${gs(1)} ${gen(n1 + 1)}`;
          return [problem1, math.evaluate(texToJS(problem1))];
          break;
        case 2:
          let n2 = choose(0, 1);
          let problem2 = `(${rn(gen(n2))}\\times ${gen(n2)}) ${gs(1)} (${gen(n2 + 1)} ${gs(1)} ${gen(n2 + 1)})`;
          return [problem2, math.evaluate(texToJS(problem2))];
          break;
        case 3:
          let n3 = choose(0, 2);
          let problem3 = `${rn(gen(n3))}/${gen(n3)} ${gs(1)} ${gen(n3 - 1)} ${gs(1)} ${gen(n3 - 1)}`;
          return [problem3, math.evaluate(texToJS(problem3))];
          break;
      }
      break;
    case 3:
      let type3 = choose(0, 1);
      switch (type3) {
        case 0:
          let n0 = choose(0, 2);
          let problem0 = `(${gen(n0)} ${gs(1)} ${gen(n0)} ${gs(1)} ${gen(n0)} ${gs(1)} ${gen(n0)})\\times ${rn(gen(n0))}`;
          return [problem0, math.evaluate(texToJS(problem0))];
          break;
        case 1:
          let n1 = choose(1, 2);
          let problem1 = `\\frac{${rn(gen(n1))}${rn(gen(n1))}${rn(gen(n1))}}{${rn(gen(n1), 1)}} + ${gen(n1 + 1)}`;
          return [problem1, math.evaluate(texToJS(problem1))];
          break;
      }
      break;
    default:
      null;
  }
}

function applySigfigs(number) {
  console.log(number);
  let logged = Math.floor(Math.log10(Math.abs(number)));
  console.log(logged);
  number /= Math.pow(10, logged - 2);
  number = Math.round(number);
  number /= Math.pow(10, -(logged - 2));
  return number;
}

let test = generateCruncher(choose(1, 3));
$(".problem").text(`$${test[0]} \\space = \\space \\dots$`);
$(".answer").text(`Answer: ${applySigfigs(test[1])}`);
MathJax.typeset();
