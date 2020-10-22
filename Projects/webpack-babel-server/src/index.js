import { Request } from "./request";
import { UI } from "./ui.js";

//Select Element
const form = document.getElementById("employee-form");
const nameInput = document.getElementById("name");
const departmentInput = document.getElementById("department");
const salaryInput = document.getElementById("salary");
const employeesList = document.getElementById("employees");
const updateEmployeeButton = document.getElementById("update");

const request = new Request("http://localhost:3000/employees");
const ui = new UI();

eventListener();

function eventListener() {
  document.addEventListener("DOMContentLoaded", getAllEmployees);
  form.addEventListener("submit", addEmployee);
}

function getAllEmployees() {
  request
    .get()
    .then((employees) => ui.addAllEmployeeToUI(employees))
    .catch((err) => console.log(err));
}

function addEmployee(e) {
  const employeeName = nameInput.value.trim();
  const employeeDepartment = departmentInput.value.trim();
  const employeeSalary = salaryInput.value.trim();

  if (
    employeeName === "" ||
    employeeDepartment === "" ||
    employeeSalary === ""
  ) {
    alert("Lutfen alanlarin hepsini doldurunuz");
  } else {
    request
      .post({
        name: employeeName,
        department: employeeDepartment,
        salary: employeeSalary,
      })
      .then((employee) => {
        ui.addEmployeeToUI(employee);
      }).catch(err=>console.log(err));
  }
  ui.clearInput();
  e.preventDefault();
}

// request
//   .get()
//   .then((employees) => console.log(employees))
//   .catch((err) => console.log(err));

// let postData = {
//   name: "Semih Kalkan",
//   department: ".Net Developer",
//   salary: 23423,
// };

// request
//   .post(postData)
//   .then((employee) => console.log(employee))
//   .catch((err) => console.log(err));

// request
//   .put(4, postData)
//   .then((employee) => console.log(employee))
//   .catch((err) => console.log(err));

// request
//   .delete(4)
//   .then((message) => console.log(message))
//   .catch((err) => console.log(err));
