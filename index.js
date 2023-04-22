// These are the packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

//This is an array of questions for user to input their answers
const questions = [
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Enter your project description',
      name: 'description',
    },
    {
      type: 'input', 
      message: 'Enter the command to install necessary dependencies',
      name: 'installation',
    },
    {
      type: 'input', 
      message: 'Provide an example of usage',
      name: 'usage',
    },
    {
      type: 'input', 
      message: 'Provide information about contributing',
      name: 'contributing',
    },
    {
      type: 'input', 
      message: 'Provide information about running tests',
      name: 'test',
    }, 
    {
      type: 'list', 
      choices: ['Apache 2.0','BSD 3-Clause', 'GNU GPL v3', 'GNU GPL v2', 'GNU AGPL v3', 'GNU LGPL v3', 'GNU FDL v1.3', 'IBM Public License Version 1.0'],
      name: 'license',
    }, 
    {
      type: 'input', 
      message: 'What is your email address?',
      name: 'email',
    }, 
    {
      type: 'input', 
      message: 'What is your github username?',
      name: 'github',
    }, 
  ]; 
  
//I created function propmts for the user to enter data and then it will be added to the readme file
inquirer
  .prompt(questions)
  .then((data) => {
    let markdown = generateMarkdown ({
      title: `${data.title}`,
      description: `${data.description}`,
      installation: `${data.installation}`,
      usage: `${data.usage}`,
      contributing: `${data.contributing}`,
      test: `${data.test}`,
      license: `${data.license}`,
      email: `${data.email}`,
      github: `${data.github}`,
    })
        //This is the generateMarkdown(data)
        fs.writeFile('README.md', markdown, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Your just created a professional Readme! Well done!');
            }
        })
    });

//This is the function to initialize app
function init() {}

// Function call to initialize app
init();