const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

const licenses = [
  "Apache 2.0",
  "GNU General 3.0",
  "MIT",
  "BSD 2-Clause",
  "BSD 3-Clause",
  "Boost Software 2.0",
  "Creative Commons Zero v1.0 Universal",
  "Eclipse Public 2.0",
  "GNU Affero General Public v3.0",
  "GNU General Public v2.0",
  "GNU Lesser General Public v2.1",
  "MozillaLicense 2.0",
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
    validate: (desc) => {
      return !desc ? "Please enter a description for your project." : true;
    },
  },
  {
    type: "input",
    name: "install",
    message: "What are the steps to install your project?",
    validate: (steps) => {
      return !steps ? "Please enter the steps to install your project." : true;
    },
  },
  {
    type: "input",
    name: "usage",
    message: "What are the usage cases for your project?",
    validate: (usage) => {
      return !usage ? "Please enter a useage case for your project." : true;
    },
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
    when: (data) => {
      return data.collab === true;
    },
    validate: (names) => {
      return !names ? "Please enter another GitHub username." : true;
    },
  },
  {
    type: "input",
    name: "tests",
    message: "What are some test examples for this project?",
    validate: (tests) => {
      return !tests ? "Please enter a test example." : true;
    },
  },
  {
    type: "input",
    name: "questions",
    message: "What is your GitHub username?",
    validate: (username) => {
      return !username ? "Please enter your GitHub username." : true;
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    validate: (email) => {
      return !email ? "Please enter your email address." : true;
    },
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
