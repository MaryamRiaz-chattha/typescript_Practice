//q1
console.log("hello world!");
//q2
let temp=18;
if (temp<20){
    console.log("it's cold");
}
//q3
// Start with 10 apples
const totalApples = 10;

// Give away 3 apples
const applesGiven = 3;

// Calculate how many apples are left
const applesLeft = totalApples - applesGiven;

// Display the result
console.log(`After giving away ${applesGiven} apples, you have ${applesLeft} left.`);


//q4
let firstname:string="ali";
let lastname:string="ahmad";
let fullname:string= `${firstname} ${lastname}`;
console.log(fullname);
//q5
//Write a TypeScript code that uses a comparison operator to check if the number 5 is greater than 3. Log "Yes" if true, otherwise log "No".
let num=5;
if (num>3)
    {
        console.log("yes");
    }
else{
    console.log("no");
}
//q6
function calculateArea(radius: number): number {

    const pi: number = 3.14159; 
    const area: number = pi * radius * radius;
    return area;
}
//q7
//Write a loop that logs numbers from 1 to 50. For multiples of 3, log "Fizz" instead of the number, and for multiples of 5, log "Buzz".
for (let i = 1; i <= 50; i++) {
    let output = "";
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    console.log(output || i);
}

//q8
//Define an array temperatures with at least five different temperatures (numbers). Write a script to find and log the highest temperature.
const temperature =[18,25,40,45,60];
// Define an array of temperatures


let highest = temperature[0];

for (let i = 1; i < temperature.length; i++) {
    // If the current temperature is higher than the current highest, update highest
    if (temperature[i] > highest) {
        highest = temperature[i];
    }
}

console.log("Highest temperature:", highest);

//q9
//10


