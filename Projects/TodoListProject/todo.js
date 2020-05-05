const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners(){ //tüm eventListenerlar burada tanımlanıcak
    
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
    secondCardBody.addEventListener("click",deleteTodo);
    filter.addEventListener("keyup",filterTodos);
    clearButton.addEventListener("click",clearAllTodos);
}
function clearAllTodos(e){
    if(confirm("Tümünü silmek istediğinize emin misiniz ?")){
        //arayüzden todoları temizleme

        // todoList.innerHTML = ""; //yavaş kalan bir yöntem

        while(todoList.firstElementChild != null){
            todoList.removeChild(todoList.firstElementChild);
        }

        localStorage.removeItem("todos");
    }


}
function filterTodos(e){
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");

    listItems.forEach(function(listItem){
        const text = listItem.textContent.toLowerCase();
        if(text.indexOf(filterValue) === -1){
            //bulamadıklarımızı görünmez yapıyoruz 
            listItem.setAttribute("style","display : none !important");
        }else{
            listItem.setAttribute("style","display : block");
        }
    });
}
function deleteTodoFromStorage(deleteTodo){
    let todos = getTodosFromStorage();

    todos.forEach(function(todo,index){
        if(todo === deleteTodo){
            todos.splice(index,1); //bulunduğu indexden itibaren arrayden 1 değeri sil 
        }
    });

    localStorage.setItem("todos",JSON.stringify(todos));

}
function deleteTodo(e){

    if(e.target.className === "fa fa-remove"){
        let todo = e.target.parentElement.parentElement;
        todo.remove();        
        deleteTodoFromStorage(todo.textContent);
        showAlert("success","Todo Başarıyla silindi...");
    }else{

    }

}
function loadAllTodosToUI(){
    let todos = getTodosFromStorage();

    todos.forEach(function(todo){
        addTodoToUI(todo);
    });
}
function addTodo(e){

    const newTodo = todoInput.value.trim();//trim baştaki ve sondaki boşlukları siler
    
    if(newTodo === ""){        
    //     <div class="alert alert-danger" role="alert">
    //     This is a dark alert—check it out!
    //   </div>
        showAlert("danger","Lütfen Bir Todo Girin");
    }else{
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success","Todo Eklendi...");
    }
    e.preventDefault();
}
function getTodosFromStorage(){//storagedan todoları alma
    let todos;

    if(localStorage.getItem("todos")=== null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}
function addTodoToStorage(newTodo){

    let todos = getTodosFromStorage();

    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
}
function showAlert(type,message){
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;

    firstCardBody.appendChild(alert);
    
    //setTimeout
    setTimeout(function(){
        alert.remove();
    },1400);
}
function addTodoToUI(newTodo){//aldığı stringi list item olarak eklicek

    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href ="#";
    link.className = "delete-item";
    link.innerHTML= "<i class = 'fa fa-remove'></i>";

    listItem.className="list-group-item d-flex justify-content-between";
    //textNode
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    //oluşturduğumuz list item'ı listeye ekleme
    todoList.appendChild(listItem);
    todoInput.value = "";
}

