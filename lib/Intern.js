// Write codes to define and export the Intern class

// to inherit elements from Employee class import the variable here again
const Employee = require('./Employee');

// Create an Intern constructor function and add parameters and call the function 
// This class will inherit from Employee class
class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email) ;   // here super is used as it is inheriting elements for name, id, email from Employee class
        this.school = school;
    }

    getRole(){
        return 'Intern';
    }

    getSchool(){
        return this.school;
    }
}
module.exports = Intern;