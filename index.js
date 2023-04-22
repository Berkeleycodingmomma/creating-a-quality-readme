// These are the packages needed for this application
const inquirer = require('inquirer');
const fs = requirer('fs');
const generateMarkdown = require('./utils/generateMarkdown');

//This is an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'what is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter you project desription?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Provide and example of code',
        name: 'code',
    },
    {
        type: 'input',
        message: 'Provide information about contributers?',
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
        message: 'what is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'what is your Linkedin address?',
        name: 'linkedin',
    },
    {
        type: 'input',
        message: 'What is your Github username',
        name: 'github',
    },
];

//I created function propmts for the user to enter data and then it will be added to the readme file
inquirer
    .promopt(questions)
    .then((date) => {
        let markdown = generateMarkdown({
            title: `${data.title}`,
            desription: `${data.description}`,
            instalation: `${data.instalation}`,
            code: `${data.code}`,
            contributing: `${data.contributing}`,
            test: `${data.test}`,
            license: `${data.license}`,
            linkedin: `${data.linkedin}`,
            github: `${data.github}`,
        })
        //This is the generateMarkdown(data)
        fs.writeFile('README.md', markdown, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('it worked');
            }
        })
    });

// //This is a function to write README file
// function writeToFile(fileName, data) {}

//This is the function to initialize app
function init() {}

// Function call to initialize app
init();