// async function test(data){
//     //async ekleyince mutlaka bir promise döneceğini söylemiş oluyoruz
    
//     let promise = new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             resolve("bu resolveden dönen değerdir");
//         },5000);
//     });
//     // console.log("Nasılsın?");
//     let response = await promise; // 5 saniye burayı bekleticek.

//     // console.log(response);
//     // console.log("Naber");

//     return response;
// }
// test("merhaba").then(resp => console.log(resp));


// async function testData(data){

//     let promise = new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             if(typeof data === "string"){
//                 resolve(data);
//             }else{
//                 reject(new Error("Lütfen string bir değer girin .."))
//             }
//         },5000);
//     });

//     const response = await promise;
//     return response;
// }

// testData(123)
// .then(re => console.log(re))
// .catch(err => console.log(err));


async function getCurrency(url){
    const response = await fetch(url);//get request yaptık Response Object döndü

    const data = await response.json(); //Json object

    return data;
}

getCurrency("https://api.exchangeratesapi.io/latest")
.then(resp => console.log(resp));