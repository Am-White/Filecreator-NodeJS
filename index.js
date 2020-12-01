const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);


function promptUser() {
 return inquirer.prompt ([
        {
           type: "input",
           message: "What is your name?", 
           name: "name",
        },
        {
            type: "input",
            message: "Where are you from?", 
            name: "place",
         },
         {
            type: "input",
            message: "What would you like your heading to say?", 
            name: "heading",
         },
         {
            type: "input",
            message: "What is your GitHub username?", 
            name: "username",
         },
         {
            type: "input",
            message: "What is your LinkedIn?", 
            name: "link",
            
         },
 ]);
}
    
//Creating inner code
function generateMarkdown(response) {
    return `
    
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

        await writeFileAsync ("README.md", readME;
        console.log("success!");
    } catch (err) {
        console.log(err);
    }
}

init();