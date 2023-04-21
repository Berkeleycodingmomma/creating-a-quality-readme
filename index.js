// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = requirer('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        message: 'what is your project title?'
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter you project desription?'
        name: 'description',
    },
    {
        type: 'input',
        message: 'Provide and example of code'
        name: 'code',
    },
    {
        type: 'input',
        message: 'Provide information about contributers?'
        name: 'contributing',
    }, {
        type: 'input',
        message: 'provide information on running test'
        name: 'test',
    },
    {
        type: 'list',
        message: ['apache 2.0', 'Boost 1.0', 'BSD 3-Clause', 'BSD 2-clause', 'IBM Public License Version 1.0', 'GNU FDL v1.3', 'GNU LGPL v3', 'GNU GPL v2'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'what is your project title?'
        name: 'title',
    },
    {
        type: 'input',
        message: 'what is your Linkedin address?'
        name: 'linkedin',
    },
    {
        type: 'input',
        message: 'What is your Github username'
        name: 'github',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();