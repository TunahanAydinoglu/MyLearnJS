// //Session Storage - Key & Value 

// //butonları seçmek
// const add = document.querySelector("#add");
// const del = document.querySelector("#delete");
// const clear = document.querySelector("#clear");


// //inputlar 

// const addKey = document.querySelector("#addkey");
// const addValue = document.querySelector("#addvalue");
// const deleteKey = document.querySelector("#deletekey");


// add.addEventListener("click",addItem);
// del.addEventListener("click",deleteItem);
// clear.addEventListener("click",clearItems);


// function addItem(e){
//     sessionStorage.setItem(addKey.value,addValue.value);
// }

// function deleteItem(e){
//     sessionStorage.removeItem(deleteKey.value);
// }

// function clearItems(e){
//     sessionStorage.clear();
// }

// console.log(sessionStorage);


// //Local Storage

// localStorage.setItem("hareket","burpee");
// localStorage.setItem("tekrar",50); //her zmana string olarak tutar

// //clear local storage
// //localStorage.clear();

// let value = localStorage.getItem("hareket");


// console.log(value);


// // Local storage Array yazma

// const todos = ["Todo 1","Todo 2","Todo3"];

// // localStorage.setItem("todos",todos); // bu şekidle string tutar


// localStorage.setItem("todos", JSON.stringify(todos)); //array olarak ekledik

// const value = JSON.parse(localStorage.getItem("todos"));//array olarak çağırma
// console.log(value);


const form = document.getElementById("todo-form");
const todoInput 0 document.getElementById("todo");

form.addEventListener("submit",addTodo);

function addTodo(e){

    const value = todoInput.value;
    let todos;
    if(localStorage.getItem("todos")=== null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(value);

    localStorage.setItem("todos",JSON.stringify(todos));



    e.preventDefault();//sayfayı tekrar yüklemesini engeller
}

