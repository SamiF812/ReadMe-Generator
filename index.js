// TODO: Required packages inquirer, fs, md function from generate markdown file
const inquirer = require("inquirer");
const fs = require("fs");



const generateReadMe = ({projectName, description, installation, usage, license, contribution, tests, github, email }) =>
    
`# Title: no
[![License](https://img.shields.io/badge/License-MIT-green)]


## Description
no


## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contribution)
- [Tests](#tests)
- [Questions](#questions)


## Installation
<a href = "installation"></a>
*no



## Usage
<a href = "usage"></a>
*no



## License
<a href = "usage"></a>
*MIT



## Contribution
<a href = "contribution"></a>
*no



## Tests
<a href = "tests"></a>
*no


## Questions
<a href = "questions"></a>
*Check out my GitHub: https://github.com/no<br>
*Feel free to email me at: no`;



inquirer
    .prompt([
        {
            type: `input`,
            message: `What is the name of your project?`,
            name: `projectName`,
        },
        {
            type: `input`,
            message: `Please type a quick description of your project`,
            name: `description`,
        },
        {
            type: `input`,
            message: `Was there an installation process/instructions?`,
            name: `installation`,
        },
        {
            type: `input`,
            message: `What could this project be used for?`,
            name: `usage`,
        },
        {
            type: `list`,
            message: `Which license would you like to apply to this project?`,
            name: `license`,
            choices: [
                "MIT",
                "Mozzila",
                "Open"
            ]

        },
        {
            type: `input`,
            message: `Who contributed to this project?`,
            name: `contribution`,
        },
        {
            type: `input`,
            message: `What are the test instructions?`,
            name: `tests`,
        },
        {
            type: `input`,
            message: `What is your github username?`,
            name: `github`,
        },
        {
            type: `input`,
            message: `What is your email address?`,
            name: `email`,
        }



    ])
        .then((answers) => {
            const mdInfo = generateReadMe(answers);
            fs.writeFile("GeneratedReadMe.md", mdInfo, (err) =>
            err ? console.log(err) : console.log("Success!") 
            );
        
        });


       
        // in .then of inquirer prompt call fs write file


// in fs write file (2) arguments first argument 1. file path file name 2. data (generateMarkdown)

        
