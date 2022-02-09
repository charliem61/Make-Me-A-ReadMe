const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown')


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
          "If your README is long, add a table of contents to make it easy for users to find what they need.",
        name: "projectTableOfContents",
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
        type: "input",
        message:
          "If your created application or package needs outside additions & you would like other developers to contribute to it, please provide a link to request access to contribute.",
        name: "howToContribute",
      },
    ])

  .then((answers) => fs.writeFileSync('./utils/README.md',generateMarkdown(answers)))}
  
MyReadMe();

      // instead of console log, save/write to a file
      // use fs to save/write to file

      //console.log(readmeOutput);
       //fs.writeFile("./README.md", readmeOutput(answers),
      //(err) => err ? console.error(err) : console.log("success!")) 
      //  ;
