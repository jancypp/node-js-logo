// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const jest = require('jest');
const { Circle, Triangle, Square } = require("./lib/shape")
const fs = require("fs")


function run() {
  inquirer
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
        type: 'list',
        message: 'Please select a shape of circle, polygon, or square.',
        name: 'shapeSelection',
        choices: ["circle", "triangle", "square"],
      },
      {
        type: 'input',
        message: 'Please enter your shape color or hexadecimal number.',
        name: 'shapeColor',
      }
    ])
    .then(response => {
      if (response.shapeSelection === "circle") {
        const circle = new Circle(response.shapeSelection, response.shapeColor, response.textColor, response.text)
        fs.writeFileSync("circle.svg", circle.render())
      }
      else if (response.shapeSelection === "triangle") {
        const triangle = new Triangle(response.shapeSelection, response.shapeColor, response.textColor, response.text)
        fs.writeFileSync("triangle.svg", triangle.render())
      }
      else if (response.shapeSelection === "square") {
        const square = new Square(response.shapeSelection, response.shapeColor, response.textColor, response.text)
        fs.writeFileSync("square.svg", square.render())
      }
    })
}

// TODO: Create a function to initialize app
run();