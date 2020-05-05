// Kalitim


class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showInfos(){
        console.log("isim :",this.name,"Yaş :",this.age);
    }
}

class Employee extends Person{
    constructor(name,age,salary){
        // this.name = name;
        // this.age = age;
        super(name,age);//üst sınıfı kullanıyoruz constructorını 
        this.salary = salary;
    }
    showInfos(){
        console.log("isim :",this.name,"Yaş :",this.age,"Maaş :",this.salary);
    }
}

const emp = new Employee("Tuna",23,3000);
const per = new Person("Tuna",23);

per.showInfos();
emp.showInfos();