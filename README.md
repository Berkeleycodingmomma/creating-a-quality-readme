

# creating-a-quality-readme

# Node.js Challenge: Professional README Generator
#

## Description 
This project allows the user to cretae a readme file by using the command-line application that dynamically generates a high quality Readme.md file. This alows the project user to devote more time working on the project. 

#

## Visual image of finished README.sample.md file that was created in the command-line

#
![Screen Shot 2023-04-24 at 11 23 52 PM](https://user-images.githubusercontent.com/127444682/234181882-1a668f4e-996f-4040-ad96-438306e42412.png)
#

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
Download node.js v16: https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs
npm inquirer: https://www.npmjs.com/package/inquirer
what is package.JSON: https://heynode.com/tutorial/what-packagejson/
How to prompt function in inquirer: https://www.tabnine.com/code/javascript/functions/inquirer/prompt
#

#
## Link to a walkthrough video that demonstrates its functionality.
* [Youtube-demo-link](https://youtu.be/ziOIgkOC-kI)
#

## Code Examples 

#

 ```sh

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

```

**(ABOVE)- I created function propmts for the user to enter data and then it will be added to the readme file

#

```sh

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

```

**(ABOVE)- This is an array of questions for user to input their answers

--------------------------------------------------------------------------------------------------------------------------------------------------------
```sh


function renderLicenseBadge(license) {
  if (license === 'Apache 2.0') {
    return `![GitHub license](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  } else
}
```
**(ABOVE)- Example of code for, if there is no license return an empty string

---------------------------------------------------------------------------------------------------------------------------------------------------------
```sh
 
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');



```
**(ABOVE)-  These are the packages needed for this application

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## A screen shot of the final terminal work to produce a readme file through the command line

<img width="1035" alt="screenshot of terminal" src="https://user-images.githubusercontent.com/127444682/234181484-3a6f9bdb-fcab-40a6-8751-1cd9000c69cd.png">

---------------------------------------------------------------------------------------------------------------------------------------------------------
## Author Info

### Amanda Gray

* [Linkedin](https://www.linkedin.com/in/amanda-gray-831a65254/)
* [Github](https://github.com/Berkeleycodingmomma/creating-a-quality-readme)
#

## Credits

Shout out to all the TA's and Google Search!

GOOGLE!  Seriously, thank you google search!





© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.


