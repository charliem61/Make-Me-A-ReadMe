// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");

function MyReadMe() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is your project title?",
      name: "projectTitle",
    },
    {
      type: "input",
      message: "Write a brief decription of your completed project.",
      name: "projectDescription",
    },
    {
      type: "input",
      message: "How can I install you project if needed?",
      name: "projectInstall",
    },
    {
      type: "input",
      message: "Choose you appropriate license.",
      name: "projectLicenseChoice",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
      type: "input",
      message: "Who worked on this project with you?",
      name: "projectContributers",
       },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "githubUsername",
      },  {
        type: "input",
        message: "Please provide a link to your github?",
        name: "githublink",
      },  {
        type: "input",
        message: "What is your project title?",
        name: "projectTitle",
      },  {
        type: "input",
        message: "What is your project title?",
        name: "projectTitle",
      },  {
        type: "input",
        message: "What is your project title?",
        name: "projectTitle",
      },




  ]);
}






//TODO: 
// ask for title DONE

//TODO:
// ASK USER FOR BRIEF DESCRIPTION OF PROJECT 

//TODO:
// INSTALLTION: WHAT YOU HAVE TO DO TO USE CREATE 
// THE READ ME

//TODO:
// USAGE: WHAT THE READ ME WILL BE USED FOR

//TODO:
// LICENSE: WATCH LICENSE, SHEILDING, 
// IT IS A OBJECT WITH A ARRAY 
{
    type: "list",
    name: "license",
    message: "Chose the appropriate license for this project: ",
    choices: [
        "Apache",
        "Academic",
        "GNU",
        "ISC",
        "MIT",
        "Mozilla",
        "Open"
    ]
},

//TODO:
//CONTRIBUTING:WHO WORKED ON THE PROJECT

//TODO:
//TEST: LOOK INTO THIS

//TODO:
// GIT HUB USER NAME:
// WHEN GIT HUB USERNAME IS ENETERED, THEN THIS
// IS ADDED TO THE SECTION OF THE README ENTITLED
// QUESTIONS WITH A LINK TO MY GITHUB PROFILE

//TODO: 
// 

//TODO:
//
