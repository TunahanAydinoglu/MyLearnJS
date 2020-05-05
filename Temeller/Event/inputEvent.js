const filter = document.querySelector("#filter");


// document.addEventListener("DOMContentLoaded",load);

// function load(e){
//     console.log("Sayfa yüklendi");
// }

//Focus 
filter.addEventListener("focus",run);

// //blur --- focustan çıkma
// filter.addEventListener("blur",run);

// //Paste
// filter.addEventListener("paste",run);
// //Copy
// filter.addEventListener("copy",run);
// //Cut
// filter.addEventListener("cut",run);
// //Select
// filter.addEventListener("select",run);


function run(r){
    
    console.log(r.type);
}
