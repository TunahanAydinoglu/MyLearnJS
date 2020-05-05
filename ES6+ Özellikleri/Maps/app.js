// Mapler - Key --> Value


// let myMap = new Map(); // Map oluşturduk

// console.log(myMap); //object Type

// const key1 = "Tuna";
// const key2 = {a:10,b:20};
// const key3 = () => 2;

// //Set
// myMap.set(key1,"String Değer");
// myMap.set(key2,"Object Değer");
// myMap.set(key3,"Function type");

// //Get

// console.log(myMap.get(key1));

// const cities = new Map();

// cities.set("Ankara",5);
// cities.set("İstanbul",15);
// cities.set("İzmir",4);

// //ForEach
// cities.forEach(function(value,key){
//     console.log(key,value);
// });

// //For Of
// for(let [key,value] of cities){ //Destructing
//     console.log(key,value);
// }

// //Map Keys
// for(let key of cities.keys()){
//     console.log(key);
// }
// //Map Values
// for(let value of cities.values()){
//     console.log(value);
// }


// //Arraylerden map oluşturma
// const array = [["key1","value1"],["key2","Value2"]];

// const lastMap = new Map(array);

// console.log(lastMap); 

// Mapten Array oluşturma

const cities = new Map();

cities.set("Ankara",5);
cities.set("İstanbul",15);
cities.set("İzmir",4);

const array = Array.from(cities);
// [["Ankara",5],["İstanbul",15],["İzmir",4]] şeklinde oluşur
console.log(array);