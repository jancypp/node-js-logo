// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const jest = require('jest');
const { writeFile } = require('fs/promises')


class list {
    constructor() {
      this.title = '';
  
      this.tasks = [];
    }
    run() {
      return inquirer
        .prompt([
          {
            type: 'input',
            message: 'Please enter up to three characters for your logo',
            name: 'text',
          },
          {
            type: 'input',
            message: 'Please enter a text color or hexadecimal number.',
            name: 'textColor', 
          },
          {
            type: 'input',
            message: 'Please select a shape of circle, triangle, or square.',
            name: 'shapeSelection',
          },
          {type: 'input',
          message: 'Please enter your shape color or hexadecimal number.',
          name: 'shapeColor',
          }
        ])}}
  


// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
writeToFile('./Output/README.md', generateMarkdown(data))
    })
 }

// Function call to initialize app
init();