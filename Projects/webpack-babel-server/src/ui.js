export class UI {
  constructor() {
    this.employeesList = document.getElementById("employees");
    this.update = document.getElementById("update");
    this.nameInput = document.getElementById("name");
    this.salaryInput = document.getElementById("salary");
    this.departmentInput = document.getElementById("department");
  }

  addAllEmployeeToUI(employees) {
    let result = "";
    employees.forEach((emp) => {
      result += `
        <tr>
             <td>${emp.name}</td>
             <td>${emp.department}</td>
             <td>${emp.salary}</td>
             <td>${emp.id}</td>
             <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
             <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
         </tr>
            `;
    });
    this.employeesList.innerHTML = result;
  }
  addEmployeeToUI(emp){
      this.employeesList.innerHTML += `
      <tr>
           <td>${emp.salary}</td>
           <td>${emp.name}</td>
           <td>${emp.department}</td>
           <td>${emp.id}</td>
           <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
           <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
       </tr>
          `
  }
  deleteEmployeeFromUI(element){
      element.remove();
  }

  clearInput(){
      this.nameInput.value="";
      this.departmentInput.value="";
      this.salaryInput.value="";
  }
}
