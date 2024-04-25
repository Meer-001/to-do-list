#! /usr/bin/env node

import inquirer from "inquirer";

let toDo = []
let name = []
let user = await inquirer.prompt(
    [
        {
                name:"userName",
                type:"input",
                message: "Enter your name here"
        
            

        }
    ]
);

let condition = true
while (condition) {
    
let addTask = await inquirer.prompt([
    {
        name:"todos",
        type:"input",
        message: "Do you want to add anything on your to-do list?"

    },

    {


        name:"addMore",
        type:"confirm",
        message:"Do you want to Add more?",
        default: "true"


    }
]
);

toDo.push(addTask.todos)
name.push(user.userName)
condition = addTask.addMore
console.log("user:",user.userName ,"\n" ,"item", toDo);
}; 
console.log("\n","Created by - Ahmer Shaikh","\n");
