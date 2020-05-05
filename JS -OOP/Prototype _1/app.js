// const object = new Object();
// object.name="Tuna";

// console.log(object);


function Employee(name,age){
    this.name = name;
    this.age = age;
    this.showInfos = function(){
        console.log("Bilgiler gösteriliyor");
    }
}

const emp1 = new Employee("Tuna",23);
