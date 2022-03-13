// TODO: Required packages inquirer, fs, md function from generate markdown file
const inquirer = require("inquirer");
const fs = require("fs");



const generatedReadMe = ({projectName, description, installation, usage, license, contribution, test, github, email }) =>
`# projectName


## Description
<!-- code -->


## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Installation
<a href = "installation"></a>
*${installation}



## Usage
<a href = "usage"></a>
*${usage}



## License
<!-- code -->



## Contribution
<a href = "contribution"></a>
*${contribution}



## Tests
<a href = "test"></a>
*${test}


## Questions
<!-- code -->


<!-- export? -->`

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
            name: `test`,
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

        
