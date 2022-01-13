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
      //PROPERTY OR KEY OR PROPERTY NAME- TYPE: 
      // "INPUT"-VALUE

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
        message: "Where can someone email you for additional questions about this project?",
        name: "userEmail",
      },  {
        type: "input",
        message: "What is your project title?",
        name: "projectTitle",
      } 
  ]).then(function (answers) {
    var readmeOutput = `
      this is my github link: ${answers.githublink}
      this is my github username: ${answers.githubUsername}
      Project Title: ${answers.projectTitle}
      Desrciption of Project: ${answers.projectDescription}
    `;

    // instead of console log, save/write to a file
    // use fs to save/write to file
    console.log(readmeOutput)
  })

 


}

MyReadMe()





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
// {
//     type: "list",
//     name: "license",
//     message: "Chose the appropriate license for this project: ",
//     choices: [
//         "Apache",
//         "Academic",
//         "GNU",
//         "ISC",
//         "MIT",
//         "Mozilla",
//         "Open"
//     ]
// },

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
// ORDER OF QUESTIONS AND LAYOUT OF README
//
// TITLE OF PROJECT
//
// SECTIONS:
//          DESCRIPTION
//          TABLE OF CONTENTS
//          INSTALLATION
//          USAGE
//          LICENSE
//          CONTRIBUTING
//          TESTS
//          QUESTIONS?
//
// GITHUB USERNAME
//
// LINK TO GITHUB PROFILE
//
// USER EMAIL
//
// WHEN EMAIL IS ENTERED, IT IS ADDED TO SECTION
// NAMED "QUESTIONS", WITH INSTRUCTIONS ON HOW TO 
// REACH ME WITH ADDITIONAL QUESTIONS ABOUT THE 
// PROJECT
//
// LINKS WILL BE DISPLAYED IN THE TABLE OF CONTENTS
// THEN, THEY WILL TAKE YOU TO A CORRESPONDING SECTION
// OF THE README

