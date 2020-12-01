const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);


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
                "ISC",
                "Apache",
                "GNU GPLv3",
            ],
            
         },
         {
            type: "input",
            message: "To whom should the credit of this project got to>", 
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
    
//Creating inner code
function generateMarkdown(response) {
    return `
    # ${response.title}

    # Table of Contents

    - [Description](#description)
    - [Installation](#installation)
    - [contribution](#contribution)
    - [Usage](#usage)
    - [Test](#tests)
    - [License](#license)
    - [Credit](#credit)
    - [Github](#username)
    - [Contact](#email)

    ## Description:

        ${response.description}

    ## Installation

        ${response.installation}

    ## Usage

        ${response.usage}

    ## Test

        ${response.credit}
    
    ## License

    ## Questions:

        For any questions or inquiries, you can send me a direct email or visit 
        my GitHub page:

        -[GitHub Profile]:(https://github.com${response.username})
        -[Email]:${response.email}
    
    `;
}

//Initialize program
//async before a function = function always returns a promise.
async function init() {
    //In complete honestly I am confused about try element
    try {
        // await makes JavaScript wait until that promise settles and returns its result.
        const response = await promptUser();

        const readME = generateMarkdown(response);

        await writeFileAsync ("README.md", readME);
        console.log("success!");
    } catch (err) {
        console.log(err);
    }
}

init();