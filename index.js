// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'project',
            message: 'What is your project title?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of your project?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter instructions for installation',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage information?',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Is there any contribution you would like to add?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Any test to include?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your project?',
            choices: ["MIT", "Microsoft Public License", "ISC", "GNU GPLv3"]
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
    ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
