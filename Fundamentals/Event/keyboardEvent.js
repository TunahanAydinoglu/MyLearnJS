
//KeyPress Herhangi bir tuşa basınca çalışan event (Sadece harfler ve sayılar)

// document.addEventListener("keypress",run);

// function run(e){

//     // console.log(e.which); //ASCII tablo değeri verir
//     // console.log(e.key); //hangi harfe basıldığını verir
//     console.log("Naber");
// }

// KeyDown bütüün tuşlarda tetiklenir
// document.addEventListener("keydown",run);

// function run(e){

//     // console.log(e.which); //ASCII tablo değeri verir
//     // console.log(e.key); //hangi harfe basıldığını verir
//     console.log("Naber");
// }

// Key Up tuştan eli çektiğimizde tetiklenir

// document.addEventListener("keyup",run);

// function run(e){

//     // console.log(e.which); //ASCII tablo değeri verir
//     // console.log(e.key); //hangi harfe basıldığını verir
//     console.log("Naber");
// }

const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup",changeText);

function changeText(e){
    header.textContent = e.target.value;
    // console.log(e.target.value);
}