
// console.log(window);
// console.log(this);

// const emp1 = { //object Literal
//     name:"Tuna",
//     age:23,
//     showInfos:function(){console.log("Bilgiler gösteriliyor");}
// };

// const emp2 = {
//     name:"Furkan",
//     age : 22
// };

// emp1.salary=3000;
// emp1.showInfos();
// console.log(emp1);


// ----- constructer ------------- //

function Employee(name,surname,age){ // Yapıcı fonksiyon 
    this.name = name;
    this.surname = surname;
    this.age = age;

    this.showInfos = function(){
        console.log(this.name,this.surname,this.age);
    }
}
const emp1 = new Employee("Tunahan","Aydınoğlu",23);

emp1.showInfos();


