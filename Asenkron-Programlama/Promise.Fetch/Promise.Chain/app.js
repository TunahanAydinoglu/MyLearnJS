// function getData(data){ //Promise objesi döndüren fonsksiyonumuz
//  return new Promise(function(resolve,reject){
//     setTimeout(function(){

//         if(typeof data === "string"){//olumlu sonuç
//             resolve(data);
//         }else{
//             reject(new Error("Lütfen string bir değer giriniz"));
//         }


//         // resolve("Olumlu sonuç");
//         // reject("Olumsuz sonuç");
//     },5000);
//  });
// }


// getData("123").then((response)=>{
//     console.log("Gelen değer : "+response);
// }).catch((err)=>{
//     console.error(err);
// });





// getData("Merhaba").then(function(response){
//     console.log(response);
// })

// getData("Merhaba").catch(function(err){
//     console.log(err);
// })




// console.log(getData("Merhaba")); //Biz



const addTwo = (number) =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            if(typeof number ==="number"){
                resolve(number+2);
            }else{
                reject(new Error("Lütfen bir sayı girin..."));
            }
        },3000);
    });
};

addTwo(10)
.then((response)=>{
    console.log(response);
    return response + 2;
})
.then((response2)=>{
    console.log(response2);
})
.catch((err)=>{
    console.log(err);
})