// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");

function MyReadMe() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your project title?",
        name: "projectTitle",
      },
      
      {
        type: "input",
        message: "Write a brief decription of your project:",
        name: "projectDescription",
      },
      {
        type: "input",
        message: 
        "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
        name: "projectInstall",
      },
      {
        type: "input",
        message:
        "Provide instructions and examples for use. Include screenshots as needed.",
        name: "projectUsage",
      },
      {
        type: "list",
        message: "Please choose your appropriate license:",
        name: "projectLicenseChoice",
        choices: ["Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "Open"],
      },
      {
        type: "input",
        message: 
        "Please list your collaborators, if any, with links to their GitHub profiles.",
        name: "projectContributers",
      },
      {
        type: "input",
        message: "What is your GitHub username?",
        name: "githubUsername",
      },
      {
        type: "input",
        message: "Please provide a link to your Github:",
        name: "githublink",
      },
      {
        type: "input",
        message: "Where can someone email you for additional questions?",
        name: "userEmail",
      },
      {
        type: "input",
        message: "If your project has many features, list them here:",
        name: "projectFeatures",
      },
      {
        type:"input",
        message:
        "If your created application or package needs outside additions & you would like other developers to contribute to it, please provide a link to request access to contribute.",
        name: "howToContribute"
      },
    ])

    .then(function (answers) {
    
    var readmeOutput = `
    ## Project Title
    # <${answers.projectTitle}>

    ## Description
    # <${answers.projectDescription}>

    ## Table of Contents (Optional)
    If your README is long, add a table of contents to make it easy for users to find what they need.
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    # <${answers.projectTableofContents}>

    ## Installation
    # <${answers.projectInstall}>

    ## Usage
    # <${answers.projectUsage}>
    
    ## Credits
    # <${answers.projectContributers}>
    
    ## License
    ![gitHubLicense](https://img.shields.io/badge/license-${answers.projectLicenseChoice}-blue.svg)
    Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
    # <${answers.projectLicenseChoice}>
    
    ## Features
    # <${answers.projectFeatures}>

    ## How to Contribute
    # <${answers.howToContribute}>
    
    `;


      // instead of console log, save/write to a file
      // use fs to save/write to file
      console.log(readmeOutput);
      fs.writeFile("README.md", readmeOutput, "utf8", function () {
        console.log("filewritten");
      });
    });
}

MyReadMe();


//DONE
//TODO:
// ask for title DONE


//DONE
//TODO:
// ASK USER FOR BRIEF DESCRIPTION OF PROJECT

//DONE
//TODO:
// INSTALLTION: WHAT YOU HAVE TO DO TO USE CREATE
// THE READ ME


//DONE = PURPOSE
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


//DONE
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
