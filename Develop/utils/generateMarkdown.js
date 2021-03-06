function generateMarkdown(answers) { 
  
return `

## Project Title
     
${answers.projectTitle}

## Description

${answers.projectDescription}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${answers.projectInstall}

## Usage

${answers.projectUsage}

## Credits

${answers.projectContributers}

## License

${answers.projectLicenseChoice}

## Features

${answers.projectFeatures}

## How to Contribute

${answers.howToContribute}

`
}


module.exports = generateMarkdown;
