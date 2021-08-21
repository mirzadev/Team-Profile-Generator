// Write codes to define and export the employee class

// Create an Employee constructor function and add parameters and call the function
class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email
    }
// create get function for all parameters / roles
    getName(){
    return this.name;
    }

    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return 'Employee'
    }
}

module.exports = Employee;