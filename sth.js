class Employee {
    #salary
    constructor(name, id, email, workMood, salary, isManager){
        this.name= name
        this.id= id;
        this.email = email;
        this.workMood = workMood;
        this.#salary = salary >= 1000;
        this.isManager = isManager;
        

    }

    get salary(){
        return this.#salary;
    }

    #healthRate = 70; 

    get healthRate() {
        return this.#healthRate;
      }

     sleep= function(hours){
         
        if (hours > 7){
            this.sleepMode = 'lazy';
        }
        else if (hours < 7){
            this.sleepMode = 'tired';
        }
        else if(hours == 7){
            this.sleepMode = 'happy';
        }
        else{
            return 'invalid value';
        }
        return this.sleep
    }

    work = function(hours){
         
        if (hours > 8){
            this.sleepMode = 'tired';
        }
        else if (hours < 8){
            this.sleepMode = 'lucky';
        }
        else if(hours == 8){
            this.sleepMode = 'happy';
        }
        else{
            return 'invalid value';
        }
        return this.workMood
    }

    eat= function(meals){
         
        if (meals >= 3){
            this.healthRate = '100';
        }
        else if (meals == 2 ){
            this.healthRate = '75';
        }
        else if(meals == 1){
            this.healthRate = '50';
        }
        else{
            return 'invalid value';
        }
        return this.healthRate
    }
    buy(item){
        this.salary = this.salary - item * 10;

        return `your current salary is ${this.salary}`
    }

    Employees = [];

    anEmployee (person){
        this.Employees.push(person);
    }

}

const someone = new Employee (1152354, 'Zeyad', 'someone@sth.com', 'tired', '10000', false);
someone.salary = 10000;


class OfficeEmployee extends Employee {
    constructor(id, name, email, workMood, salary, isManager) {
        super(id, name, email, workMood, salary, isManager);
        this.Employees.push(this);
}
    getAllEmployees() {
        return this.Employees
    }

    get(id) {
        let current = this.Empolyees.find((elm) => elm.id == id);
        if (current.isManager){
            current = {current};

        }

        return current;
    }

    fire(id){
        this.Employees = this.Employees.filter((elm) => elm.id != empId);

    return this.Employees;
    }

    hire(emp){
        this.Employees.push(empl);
    console.log(this.Employees);
    }

}

const app = () => {
    const operation = prompt(
      "Type an operation from the following:\n'add' to add new employee,\n'get' to get employee's data,\n'fire' to fire an employee,\nor 'q' to quit the app."
    );
  
    if (operation === null || operation === "q") {
      return;
    }
  
    switch (operation.toLowerCase()) {
      case "add":
        const type = prompt(
          "Type 'mngr' in case you want to add a manager, and 'nrml' in case want to add a regular employee"
        );
  
        if (type.toLowerCase() === "mngr" || type.toLowerCase() === "nrml") {
          let name = prompt("What is the name of the person?");
          let email = prompt(" What is the email of the person?");
  
          let newEmployee = new OfficeEmployee(
            new Date().valueOf(),
            name,
            email,
            "frustrated",
            "",
            type.toLowerCase() === "mngr" ? true : false
          );
  
          console.log("New employee added", newEmployee);

        }
    }
}