const licenseUrl = {
  "Apache License 2.0": `![License: Apache](https://www.apache.org/licenses/LICENSE-2.0)`,
  "GNU General Public License 3.0": `![License: GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html)`,
  "MIT License": `![License: MIT](https://opensource.org/license/mit/)`,
  "BSD 2-Clause 'Simplified' License": `![License: BSD 2 Simplified](https://opensource.org/license/bsd-2-clause/)`,
  "BSD 3-Clause 'New' or 'Revised' License": `![License: BSD 3 New Revised](https://opensource.org/license/bsd-3-clause/)`,
  "Boost Software 2.0": `![License: Boost Software](https://www.boost.org/users/license.html)`,
  "Creative Commons Zero v1.0 Universal": `![License: Creative Commons](https://creativecommons.org/publicdomain/zero/1.0/deed.en)`,
  "Eclipse Public 2.0": `![License: Eclipse Public](https://www.eclipse.org/legal/epl-2.0/)`,
  "GNU Affero General Public v3.0": `![License: GNU Affero 3.0](https://www.gnu.org/licenses/agpl-3.0.en.html)`,
  "GNU General Public License v2.0": `![License: GNU General 2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`,
  "GNU Lesser General Public License v2.1": `![License: GNU Lesser Public 2.1](https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html)`,
  "Mozilla Public License 2.0": `![License: Mozilla Public 2.0](https://www.mozilla.org/en-US/MPL/2.0/)`,
  "The Unlicense": `![License: The Unlicense](https://choosealicense.com/licenses/unlicense/)`,
};

function generateMarkdown(data) {
  return `# ${data.title}

## Live Deploy Link
${data.deploylink}

## Description
${data.description}



`;
}

module.exports = generateMarkdown;
