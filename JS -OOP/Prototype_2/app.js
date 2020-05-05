function Employee(name,age){
    this.name = name;
    this.age = age;
    // this.showInfos = function(){
    //     console.log("İsim :",this.name,"\nYaş :",this.age);
    // } // bu fonksiyonu prototype'e taşıyarak tekrarını indirgiyoruz
}
Employee.prototype.showInfos = function(){
    console.log("isim :",this.name,"\nYaş :",this.age);
}

const emp1 = new Employee("Tuna",23);
const emp2 = new Employee("Oğuz",25);
emp1.showInfos();