//Question 3
let classGroup = "Arts";

if (classGroup === "Science") {
  console.log("Physics, Chemistry, Biology, Technical Drawing, English, Mathematics");
} else if (classGroup === "Social Science") {
  console.log("Accounting, Commerce, Marketing, Geography, English, Mathematics");
} else if (classGroup === "Arts") {
  console.log("Government, Economics, Literature, History, English, Mathematics");
} else {
  console.log("Invalid class group. You will take the General subjects: English, Mathematics");
}

//Answer: Government, Economics, Literature, History, English, Mathematics


//Question 5

function findNearestPowerOf2(num) {
  let pwr = 1;
  while (pwr < num) {
    pwr *= 2;
  }
  if (num - pwr / 2 < pwr - num) {
    pwr /= 2;
  }
  return pwr;
}

function printResult(num) {
  const pwr = findNearestPowerOf2(num);
  console.log(`The number ${pwr} is the power of 2 nearest to ${num}.`);
}

// example
printResult(20); 
//The number 16 is the power of 2 nearest to 20.

