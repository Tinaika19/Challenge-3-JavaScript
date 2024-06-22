// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data

const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  const employeesArray = [];
  let addEmp = true;

  while (addEmp) {
    const firstName = window.prompt("Enter the first name of the employee")
    const lastName = window.prompt("Enter the last name of the employee")
    let salary = window.prompt("Enter the salary of the employee")

    if (isNaN(salary)) {
      salary = 0;
    } else {
      salary = parseFloat(salary);
    }
    // Push the employee object into the array
    employeesArray.push({ firstName, lastName, salary });
    addEmp = confirm("Do you want to add another employee?");
  }
  return employeesArray;
};


// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary

  if (employeesArray.length === 0) {
    console.log('No employees to calculate the average salary.');
    return;
  }

  let totalSalary = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary += employeesArray[i].salary;
  }

  const averageSalary = totalSalary / employeesArray.length;

  console.log(`The average employee salary between our ${employeesArray.length} employees is $${averageSalary.toFixed(2)}.`);

};


// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee

       // Get random index from array of options
       const random = Math.floor(Math.random() * employeesArray.length);
       const selectedEmployee = employeesArray[random];
       console.log(`Congratulation to ${selectedEmployee.firstName} ${selectedEmployee.lastName}, our random drawing winner!`);
 
};



/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
