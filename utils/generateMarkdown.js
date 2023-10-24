function generateMarkdown(data) {
  return `# ${data.title}

[Live deploy link](${data.deploylink})

![Github License](https://img.shields.io/badge/License-${encodeURIComponent(
    data.license
  )}-green.svg)

## Table of Contents

- [Live Deploy Link](#live-deploy-link)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Questions](#questions)

## Description

${data.description}

## Installation

${data.install}

## Usage

${data.usage}

## License 

Licensed using ${data.license}

## Contributors

${data.collabpeople ? data.collabpeople : "No other contributors."}

## Questions

- [GitHub Profile](https://github.com/${data.questions})

- [Email](${data.email})
`;
}

module.exports = generateMarkdown;
