const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

const licenses = [
  "Apache License 2.0",
  "GNU General Public License 3.0",
  "MIT License",
  "BSD 2-Clause 'Simplified' License",
  "BSD 3-Clause 'New' or 'Revised' License",
  "Boost Software 2.0",
  "Creative Commons Zero v1.0 Universal",
  "Eclipse Public 2.0",
  "GNU Affero General Public v3.0",
  "GNU General Public License v2.0",
  "GNU Lesser General Public License v2.1",
  "Mozilla Public License 2.0",
  "The Unlicense",
];

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
    validate: (title) => {
      return !title ? "Please enter a name for your project." : true;
    },
  },
  {
    type: "input",
    name: "deploylink",
    message: "What is your live deploy link?",
    validate: (link) => {
      return !link ? "Please enter a URL for your project." : true;
    },
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your project?",
  },
  {
    type: "input",
    name: "install",
    message: "What are the steps to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "What are the usage cases for your project?",
  },
  {
    type: "list",
    name: "license",
    message: "What license are you using?",
    choices: licenses,
  },
  {
    type: "confirm",
    name: "collab",
    message: "Did you have any other contributors?",
  },
  {
    type: "input",
    name: "collabpeople",
    message: "What are their GitHub usernames?",
    when: (data) => data.collab === true,
    validate: (names) => {
      return !names ? "Please enter another GitHub username." : true;
    },
  },
  {
    type: "input",
    name: "questions",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

function writeToFile(filename, data) {
  fs.writeFile(filename, data, (err) => {
    err ? console.log(err) : console.log("README file generated!");
  });
}

function init() {
  inquirer.prompt(questions).then((data) => {
    const filename = "README.md";
    writeToFile(filename, generateMarkdown(data));
  });
}

init();
