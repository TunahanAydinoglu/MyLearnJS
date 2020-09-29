const person = {
    age:25,

    // tellAge : function(){
    //     console.log(this);
    // }.bind(this)//this olarak window bağladık

    tellAge : ()=> {
        console.log(this);
    } //direkt olarak windowa bağlı

}

person.tellAge();