const person ={
    name:"Tuna",
    age:23,
    salary:3000
};


const langs = ["Python","Java","C++","Php"];

const name = "Tunahan";


// // for In

// for(let prop in person){
//     console.log(prop,person[prop]);
// }

// for(let index in langs){
//     console.log(index,langs[index]);
// }

// for(let index in name){
//     console.log(index,name[index]);
// }

// For Of sadece array tiptekilerde gezer objelerde gezinemez

// for(let value of person){
//     console.log(value); // çalışmaz hata atar
// }


for(let value of langs){
    console.log(value);
}

for(let char of name){
    console.log(char);
}