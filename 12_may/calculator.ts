import inquirer from "inquirer";
const questions =await inquirer.prompt(
    [
        {
          type: "number",
          name:"num1",
          message:"enter your 1st number",
        },
        {
            type: "number",
            name:"num2",
            message:"enter your 2 number",
          },
          {
            type: "list",
            operator:"num1",
            message:"enter your 1st number",
         choices:["+","-","*"],
        },

    ]
);
function sum(num1: number, num2: number){
    const result= num1+num2;
    console.log(`sum of ${num1} and ${num2}=${result}`);
}