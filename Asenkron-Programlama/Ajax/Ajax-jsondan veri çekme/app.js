const btn = document.getElementById("ajax");

btn.addEventListener("click",getAllEmployees);

function getAllEmployees(){
    const xhr = new XMLHttpRequest(); //Requestten nesne aldık

    xhr.open("GET","employees.json",true); //verileri alacağımız yeri belirtip asenktronluığunu doğruladık

    xhr.onload = function(){ 
        let list = document.getElementById("employees");
        if(this.status === 200){
            const employees = JSON.parse(this.responseText);
            
            employees.forEach(function(employee){
                list.innerHTML += `
                    <tr>
                        <td>${employee.name}</td>
                        <td>${employee.department}</td>
                        <td>${employee.salary}</td>
                    </tr>
                `;
            });
            
        }
    }

    xhr.send(); //veri yollamayacağımız için boş gönderdik
}