const filterInput = document.getElementById("filter");
const todoForm = document.getElementById("todo-form");

// filterInput.onfocus = function(){
//     console.log("Naber");
// }

// filterInput.addEventListener("focus",function(e){
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target.placeholder);
//     this.setAttribute("placeholder","Burası neresi");
// });

todoForm.addEventListener("submit",submitFunc);

function submitFunc(e){
    console.log("Submit evebti");

    e.preventDefault();
}


console.log(filterInput);