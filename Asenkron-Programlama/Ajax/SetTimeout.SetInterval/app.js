// setTimeout(function(){ //belirlenen süre sonunda işlemleri yapar
//     console.log("Naber");
// },2000);


let i=1;
let value = setInterval(function(){ // belirlnene süre tekrarlanarak çalışır
    i++;
    console.log(i);
},1000);

document.getElementById("btndr").addEventListener("click",durdurApp);

function durdurApp(){
    clearInterval(value);
    console.log("Durduruldu...");
};