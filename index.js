const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

//Prompting user each question
function promptUser() {
    
 return inquirer.prompt ([
        {
           type: "input",
           message: "What is the name of your project?", 
           name: "title",
        },
        {
            type: "input",
            message: "Enter a description of your project.", 
            name: "description",
         },
         {
            type: "input",
            message: "What are installation instructions for this project? If there are none, please write NONE.", 
            name: "installation",
         },
         {
            type: "input",
            message: "What are your contribution guidelines?", 
            name: "contribution",
         },
         {
            type: "input",
            message: "How would you like your application it be utilized?", 
            name: "usage",
            
         },
         {
            type: "input",
            message: "What are your test instructions?", 
            name: "tests",
            
         },
         {
            type: "checkbox",
            message: "Select a license:", 
            name: "license",
            choices: [
                "MIT",
                "gpl-license",
                "Apache-2.0",
                "CDDL-1.0",
            ],
            
         },
         {
            type: "input",
            message: "To whom should the credit of this project got to?", 
            name: "credit",
         },
         {
            type: "input",
            message: "What is your GitHub username?", 
            name: "username",           
         },
         {
            type: "input",
            message: "What is your email address?", 
            name: "email",
            
         },
 ]);
}
    
//Creating code that will be generated
function generateMarkdown(response) {
    return `# ${response.title}

    
## Table of Contents:
* [Description](#description)
* [Installation](#installation)
* [Contribution](#contribution)
* [Usage](#usage)
* [Test](#tests)
* [Credit](#credit)
* [Contact](#email)
* [Github](#username)
* [License](#license)

## Description:

    ${response.description}

## Installation:
    ${response.installation}

## Contribution:
    ${response.contribution}

## Usage:
    ${response.usage}

## Test:
    ${response.tests}

## Credit
    ${response.credit}

## Questions and Contact:
    For any questions or inquiries, you can send me a direct email or visit 
    my GitHub page:
[GitHub Profile](https://github.com/${response.username})

[Email](${response.email})

## License:
[License](https://opensource.org/licenses/${response.license}) 
`
}

//Initialize program
//async before a function = function always returns a promise.
async function init() {
    //In complete honestly I am confused about try element
    try {
        // await makes JavaScript wait until that promise settles and returns its result.
        const response = await promptUser();

        const readME = generateMarkdown(response);

        await writeFileAsync (`${response.title}.md`, readME);
        console.log("success!");
    } catch (err) {
        console.log(err);
    }
}

init();