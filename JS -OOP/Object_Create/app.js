// const obj = {
//     test1:function() {
//         console.log("Test 1 ");
//     },
//     test2:function() {
//         console.log("Test 2 ");        
//     }
// }

// // console.log(obj);

// const emp = Object.create(obj); //objden kalıtım aldık methodlarını kullanabiliriz

// console.log(emp);

// emp.test1();


function Person(params) {
    
}

Person.prototype.test1 = function () {
    console.log("Test 1 çıktısı alındı");
}
Person.prototype.test2 = function () {
    console.log("Test 2 çıktısı alındı");
}

const person = new Person();

console.log(person);

function Employee(name,age) {
    this.name = name;
    this.age = age;
}

Employee.prototype = Object.create(Person.prototype); // kalıtımı aktardık
//artık objecte değil persona bağlı personda objecte bağlı 

Employee.prototype.myTest = function () {
console.log("myTest Çıktısı");
}

const emp1 = new Employee();
emp1.test1();
emp1.myTest();
console.log(emp1);
