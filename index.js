// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
            validate: (value) => {
                if (value) { return true } else { return 'Please enter your project title.' }
            },
        },
        {
            type: 'input',
            name: 'repo',
            message: 'What is the repository name of your project?',
            validate: (value) => {
                if (value) { return true } else { return 'Please enter your repository name.' }
            },
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of your project?',
            validate: (value) => {
                if (value) { return true } else { return 'Please enter description.' }
            },
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter instructions for installation',
            validate: (value) => {
                if (value) { return true } else { return 'Please enter instructions.' }
            },
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage information?',
            validate: (value) => {
                if (value) { return true } else { return 'Please enter usage information.' }
            },
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Is there any contribution you would like to add?',
            validate: (value) => {
                if (value) { return true } else { return 'Please enter your contribution guidelines.' }
            },
        },
        {
            type: 'input',
            name: 'test',
            message: 'Any test to include?',
            validate: (value) => {
                if (value) { return true } else { return 'Please enter your test instructions.' }
            },
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
            validate: (value) => {
                if (value) { return true } else { return 'Please choose a license.' }
            },
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: (value) => {
                if (emailValidator.validate(value)) {
                    return true
                } else { return 'Please enter a valid email address' }
            },
        },
    ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,function(err){
        if(err) {
            console.log(err);
        } else {
            console.log('README file sucessfully created!');
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        writeToFile("README.md" , generateMarkdown(data));
    })
}

// Function call to initialize app
init();
