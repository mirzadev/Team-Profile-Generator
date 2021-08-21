// Write codes to define and export the Engineer class

// to inherit elements from Employee class import the variable here again
    const Employee = require('./Employee');

// Create an Engineer constructor function and add parameters and call the function 
// This class will inherit from Employee class
class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email) ;   // here super is used as it is inheriting elements for name, id, email from Employee class
        this.github = github;
    }

    getRole(){
        return 'Engineer';
    }

    getGithub(){
        return this.github;
    }
}
module.exports = Engineer;