// Write codes to define and export the Manager class

// to inherit elements from Employee class import the variable here again
const Employee = require('./Employee');

// Create an Intern constructor function and add parameters and call the function 
// This class will inherit from Employee class
class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email) ;   // here super is used as it is inheriting elements for name, id, email from Employee class
        this.officeNumber = officeNumber;
    }

    getRole(){
        return 'Manager';
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
}
module.exports = Manager;