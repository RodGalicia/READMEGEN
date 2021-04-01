
const inquirer = require("inquirer");
const fs = require("fs");
const Choices = require("inquirer/lib/objects/choices");

function writeToFile(fileName, data) {
    var str = "# " + data.title + 
    "\n ## Description \n" + data.description +
    "\n ## Table of Contents \n" + 
    "\n 1. [Installation](#Installation) \n" +
    "\n 2. [Usage](#Usage) \n" +
    "\n 3. [License](#License) \n" +
    "\n 4. [Contributing](#Contribute) \n" +
    "\n 5. [Tests](#Tests) \n" +
    "\n 6. [Questions](#Questions) \n" +
    "\n ## Installation \n" + data.install +
    "\n ## Usage \n" + data.usage +
    "\n ## Credits \n" + data.credit +
    "\n ## License \n" + data.license +
    "\n ## Badges \n" + getBadge(data.license) +
    "\n ## Features \n" + data.features+
    "\n ## Contribute \n" + data.contribute +
    "\n ## Tests \n" + data.test +
    "\n ## Questions \n Github User: " + data.gu +
    "\n For more questions send me an Email to: " + data.mail; 
    

    fs.writeFile(fileName, str, 
        function (err,data) {
            if (err) {
            return console.log(err);
            }
            console.log(data);
        
        
        })};




function init() {
    inquirer.prompt([

    {type:'input',
    message:'Project Title',
    name:'title'},

    {type:'input',
    message:'Description',
    name:'description'},

    {type:'input',
    message:'Installation',
    name:'install'},

    {type:'input',
    message:'Usage',
    name:'usage'},

    {type:'input',
    message:'Credits',
    name:'credit'},

    {type:'list',
    message:'License',
    name:'license',
    choices:[
        "MIT",
        "APACHE 2.0",
        "None",]},

    {type:'input',
    message:'Features',
    name:'features'},

    {type:'input',
    message:'Contribute',
    name:'contribute'},

    {type:'input',
    message:'Tests',
    name:'test'},
    
    {type:'input',
    message:'Github User',
    name:'gu'},

    {type:'input',
    message:'Email',
    name:'mail'},

    


]).then(answer => {
    writeToFile("README.md", answer)
})};

function getBadge(license){
    if (license == "MIT") return("[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]");
    if (license == "APACHE 2.0") return("[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)");
    else return "";
}



init();
