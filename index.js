const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions.js');
const setShape = require('./lib/setShape.js')

// function to create new svg file using inquirer response and file system
function createLogo(response) {
    const svg = setShape(response);
    fs.writeFile(fileName, svg, ()=> console.log('Generated logo.svg'));
}
