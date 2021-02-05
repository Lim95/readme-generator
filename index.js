// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

const questions = [
	{
		// Author Name
		type: 'input',
		message: 'Please enter your name',
		name: 'authorName',
		validate: name => {
			let pass = name.match(/^[a-zA-Z]+ [a-zA-Z]+$/g);
			if (pass) return true;
			return 'Please enter a valid name.';
		},
	},
	{
		// Author Email
		type: 'input',
		message: 'Please enter your email address',
		name: 'email',
		validate: email => {
			let pass = email.match(/\S+@\S+\.\S+/g);
			if (pass) return true;
			return 'Please enter a valid email address.';
		},
	},
	{
		// Github Username
		type: 'input',
		message: 'Please enter your GitHub username',
		name: 'username',
		validate: username => {
			if (username) return true;
			return 'It is required to enter your github username.';
		},
	},
	{
		// Project Title
		type: 'input',
		message: 'Please enter your project title',
		name: 'title',
		validate: title => {
      if (title) return true;
      return 'It is required to enter your project title.';
		},
	},
	{	
    // project description
		type: 'input',
		message: 'Please provide a description about your project',
		name: 'description',
		validate: description => {
      if (description) return true;
      return 'It is required to provide a description about your project.';
		},
	},
	{
		// Get image path and/or URL
		type: 'input',
		name: 'imageURL',
		message: 'Enter the image paths or urls of screenshots.',
    	validate: imageURL => {
			if (imageURL) return true;
			return 'Provide the image paths or urls of screenshots or demo.';
		},
	},
	{
		//Installation
		type: 'input',
		message: 'Please provide installation instructions?',
		name: 'installation',
		validate: install => {
			if (install) return true;
      return 'It is required to provide installation instructions.';
		},
	},
	{
		// How to use
		type: 'input',
		message: 'Provide instructions on how to use your project',
		name: 'usage',
		validate: use => {
			if (use) return true;
			return 'It is required to provide usage information.';
		},
	},
	{
		//Credits / Reference
		type: 'input',
		message: 'Please provide credits',
		name: 'credits',
		validate: credits => {
			if (credits) return true;
			return 'It is required to provide credits.';
		},
	},
  	{
		// check contribution
		type: 'confirm',
		name: 'contributionConfirm',
		message: 'Would you like to add your own contribution guideline?',
		default: false,
	},
	{
		// Contribution 
		type: 'input',
		message: 'Please provide a contribution guideline',
		name: 'contribution',
    	when: (answers) => answers.contributionConfirm === true,
	},	
  	{
		// Tests
		type: 'input',
		message: 'Please provide test instructions?',
		name: 'test',
		default: 'npm test',
	},
	{
		// License
		type: 'list',
		message: 'Please select a license for your project.',
		name: 'license',
		choices: [
			{
				name: 'MIT',
			},
			{
				name: 'GNU GPLv3',
			},
			{
				name: 'GNU AGPLv3',
			},
			{
				name: 'GNU LGPLv3',
			},
			{
				name: 'APACHE 2.0',
			},
			{
				name: 'Mozilla Public 2.0',
			},
			{
				name: 'The Unlicense',
			},
			{
				name: 'Boost Software 1.0',
			},
		],
	}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./README.md', data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created'
            });
        });
    });
};

const promptUser = () => { 
  return inquirer.prompt(questions);
};

promptUser()
    .then(userProfile => {
        return generateMarkdown(userProfile);
    })
    .then(readMEContent => {
        writeToFile('README.md',readMEContent);
    })
    .catch(err => {
        console.log(err);
    });

