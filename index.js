const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/app');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')

const employeeArr = {
    managers: [],
    engineers: [],
    interns: []
}


const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Please include the name of the manager',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter a name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Please include the id of the manager',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter an id');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Please enter the email of the manager',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter an email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please include the phone number of the manager',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter a phone number')
                    return false;
                }
            }
        }
    ])
    .then (data => {
        const manager = new Manager (data.managerName, data.managerId, data.managerEmail, data.officeNumber);
        employeeArr.managers.push(manager);
        return promptUser();
    })
}

const addEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'Please include the name of the engineer',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter a name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'Please include the id of the engineer',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter an id');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'Please enter the email of the engineer',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter an email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please include the github of the engineer',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter a github')
                    return false;
                }
            }
        }
    ])
    .then(data => {
        const engineer = new Engineer (data.engineerName, data.engineerId, data.engineerEmail, data.github);
        employeeArr.engineers.push(engineer);
        return promptUser();
    })
}

const addIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'Please include the name of the intern',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter a name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internId',
            message: 'Please include the id of the intern',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter an id');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'Please enter the email of the intern',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter an email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please include the school name of the intern',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter a school name')
                    return false;
                }
            }
        }
    ])
    .then(data => {
        const intern = new Intern (data.internName, data.internId, data.internEmail, data.school);
        employeeArr.interns.push(intern);
        return promptUser();
    })
}

const promptUser = () => {

    console.log("Create Your Team");

    return inquirer.prompt([    
        {
            type: 'list',
            name: 'addEmployee',
            message: 'Please select the employees you would like to add to the team from the list',
            choices: ["Manager", "Engineer", "Intern", "Finished"]
        }
    ])
        .then(userInput => {
            if (userInput.addEmployee === "Manager") {
                return addManager();
            } else if (userInput.addEmployee === "Engineer") {
                return addEngineer();
            } else if (userInput.addEmployee === "Intern") {
                return addIntern();
            }else {
                fs.writeFile('./dist/index.html', generatePage(employeeArr.managers, employeeArr.engineers, employeeArr.interns), err => {
                    if (err) throw new Error(err);
            
                    console.log('Your team page has been created.');
                });
                return;                
            }

    })
    
}


promptUser();