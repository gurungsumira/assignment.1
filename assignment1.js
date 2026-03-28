let myScore = 85;
if (myScore > 90) {
    console.log("A");
} else if (myScore >= 80 && myScore <= 90) {
    console.log("B");
} else {
    console.log("C");
}


for (let i = 1; i <= 10; i++) {
    let output = "";
    for (let j = 1; j <= i; j++) {
        output += "2";
    }
    console.log(output);
}


let num1 = 0;
let num2 = 1;
for (let i = 1; i <= 5; i++) {
    if (i === 1) {
        console.log(num1);
    } else if (i === 2) {
        console.log(num2);
    } else {
        let next = num1 + num2;
        console.log(next);
        num1 = num2;
        num2 = next;
    }
}


