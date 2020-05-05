// Setler - Kümeler

const mySet = new Set();

mySet.add(100);
mySet.add(200);
mySet.add(100); // aynı değeri ikinci kere tutmaz
mySet.add(3.14);
mySet.add("Tuna");
mySet.add(true);
mySet.add([1,2,3]);
mySet.add({a:1,b:2});

// const mySet2 = new Set([100,3.14,"Tunahan"]);

// console.log(mySet);
// console.log(mySet2);

// // Size
// console.log(mySet.size);

// //Delete Metodu
// mySet.delete("Tuna"); // değer yoksa hata vermez
// console.log(mySet);

// // Has Metodu

// console.log(mySet.has("Tuna")); // içinde Tuna var mı diye check eder
// console.log(mySet.has(100));

// // For Each

// mySet.forEach(function(value){
// console.log(value);
// })

// for(let value of mySet){
// console.log(value);
// }


const array = Array.from(mySet);
console.log(array);
