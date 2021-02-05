const licenseObj = [
    {
      name: 'MIT',
      link: 'https://opensource.org/licenses/MIT',
      badge: 'https://img.shields.io/badge/License-MIT-yellow.svg'
    },
    {
      name: 'GNU GPLv3',
      link: 'https://www.gnu.org/licenses/gpl-3.0',
      badge: 'https://img.shields.io/badge/License-GPLv3-blue.svg'
    },
    {
      name: 'GNU AGPLv3',
      link: 'https://www.gnu.org/licenses/agpl-3.0',
      badge: 'https://img.shields.io/badge/License-AGPL%20v3-blue.svg'
    },
    {
      name: 'GNU LGPLv3',
      link: 'https://www.gnu.org/licenses/lgpl-3.0',
      badge: 'https://img.shields.io/badge/License-LGPL%20v3-blue.svg'
    },
    {
      name: 'APACHE 2.0',
      link: 'https://opensource.org/licenses/Apache-2.0',
      badge: 'https://img.shields.io/badge/License-Apache%202.0-blue.svg'
    },
    {
      name: 'Mozilla Public 2.0',
      link: 'https://opensource.org/licenses/MPL-2.0',
      badge: 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg'
    },
    {
      name: 'The Unlicense',
      link: 'http://unlicense.org/',
      badge: 'https://img.shields.io/badge/license-Unlicense-blue.svg'
    },
    {
      name: 'Boost Software 1.0',
      link: 'https://www.boost.org/LICENSE_1_0.txt',
      badge: 'https://img.shields.io/badge/License-Boost%201.0-lightblue.svg'
    }
];
function renderLicense(license) {
  for(let i = 0; i < licenseObj.length; i++) {
    if(license === licenseObj[i].name) {
      return licenseObj[i];
    }
  }  
};

function renderLicenseLink(license) {
  let link = renderLicense(license).link;
  return `${link}`;
}

function renderLicenseBadge(license) {
  let badge = renderLicense(license).badge;
  return `${badge}`;
}

function renderContribution(cont, guideline) {
  if (cont === false) {
    return `[Contributor Covenant](https://www.contributor-covenant.org/version/2/0/code_of_conduct/)`;
  }
  else {
    return `${guideline}`;
  }
}

function generateMarkdown(answers) {
	return ` 
  # ${answers.title.toUpperCase()}
  [![License](${renderLicenseBadge(answers.license)})](${renderLicenseLink(answers.license)})

  ## Description
  ${answers.description}

  ## Table of Content
  * [ Installation ](#Installation)
  * [ Usage ](#Usage)
  * [ Credits ](#Credits)
  * [ Contribution Guideline ](#Contribution-Guideline)
  * [ Tests ](#Tests)
  * [ Questions ](#Questions)
  * [ License ](#License)

  ## Installation
  ${answers.installation}

  ## Usage 
  ${answers.usage}

  ### Screenshots
  ![Alt text](${answers.imageURL})
  
  ## Contribution Guideline
  ${renderContribution(answers.contributionConfirm, answers.contribution)}
  
  ## Credits
  ${answers.credits}

  ## Tests
  ${answers.test}

  ## Questions
  Contact the author with any questions!<br>
  Author: ${answers.authorName}<br>
  Github link: [${answers.username
		.trim()
		.toLowerCase()}](https://github.com/${answers.username.trim().toLowerCase()})<br>
  Email address: ${answers.email}

  ## License
  This project is [${answers.license.toUpperCase()}](${renderLicenseLink(answers.license)}) licensed.<br />
  `;
}

module.exports = generateMarkdown;

