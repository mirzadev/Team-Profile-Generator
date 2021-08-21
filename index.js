// Create variables for each classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Tester = require('./lib/Tester')
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const util = require('util');

const mkdirAsync = util.promisify(fs.mkdir);
const writeFileAsync = util.promisify(fs.writeFile);

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'teamProfile.html');

const render = require('./lib/htmlRenderer');
const Employee = require('./lib/Employee');

// Write code to use inquirer to get information about the team members
// and also to create object for each team members by using correct class as blue prints
const questions = [
    {
        name: "name",
        message: "What is the Employee's name ? "
    },
    {
        name: "id",
        message: "What is the Employee's id ? "
    },
    {
        name: "email",
        message: "What is the Employee's email ? "
    }, 
    {
        type: "list",
        name: "role",
        message: "What is the Employee's role ? ",
        choices: [
            "Manager",
            "Engineer",
            "Intern",
            "Tester"
        ],
    },

];

const questionForManager = [
    {
        name: "officeNumber",
        message: "What is the Manager's office number ? " 
    },    
];

const questionForEngineer = [
    {
        name: "github",
        message: "What is the Engineer's github ? " 
    } ,   
];

const questionForIntern = [
    {
        name: "school",
        message: "What is the Intern's school ? " 
    },    
];

const questionForTester = [
    {
        type: "list",
        name: "role",
        message: "What is your speciality ? ", 
        choices: [
            "Automation",
            "Manual",
            "API",
            "Scrum Master",
            "Business Analyst"
        ],
    },    
];

const confirm = [
    {
        type: "confirm",
        name: "adding",
        message: "Do you want to put more Employee's information ? " 
    },    
];


const init = async() => {
    const employees = [];
    let addMore = true;


while (addMore){
    // begin the same question - name, id, email, role from answer object
    const{ name, id, email, role } = await inquirer.prompt(questions);

    if (role === 'Manager'){
        const{ officeNumber } = await inquirer.prompt(questionForManager);
        // create a new Manager object and push to employee array
        employees.push(new Manager(name, id, email, officeNumber));
    }
    else if (role === 'Engineer'){
        const{ github } = await inquirer.prompt(questionForEngineer);
        // create a new Engineer object and push to employee array
        employees.push(new Engineer (name, id, email, github)); 
    }
    else if (role === 'Tester'){
        const{ speciality } = await inquirer.prompt(questionForTester);
        // create a new Tester object and push to employee array
        employees.push(new Tester (name, id, email, speciality)); 
    }
    else{
        const{ school } = await inquirer.prompt(questionForIntern);
        // create a new Intern object and push to employee array
        employees.push(new Intern (name, id, email, school));
    }
    // check if the user wanna input more employee's information
    const{ adding } = await inquirer.prompt(confirm);
    addMore = adding;
}
console.log(employees);
// After adding all desired employee, call the 'render' function (required above)
// and pass in an array containing all employee objects; the render function will 
// generate and return a block of HTML including templated divs for each employee!

const html = render(employees);

// After I have html, now I will create an HTML file using the HTML returned from
// the render function. Now I will write it to a file name 'teamProfile.html' in the 'output'
// folder. I can use the variable 'outputPath' above target this location.

if (!fs.existsSync(OUTPUT_DIR)) {
    const error = await mkdirAsync(OUTPUT_DIR);
    error && console.error(error);
    //fs.mkdirSync(OUTPUT_DIR)
}
//fs.writeFileSync(outputPath, render(employees))
const error = await writeFileAsync(outputPath, html);
error && console.error(error);
console.log("Success, teamProfile HTML is created!");
};

init();
