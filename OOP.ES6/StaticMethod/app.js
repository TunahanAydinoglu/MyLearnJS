//Static MEthodlar

class Matematik{

    static cube(x){
        return x*x*x;
    }

}

// const math = new Matematik();
// a = math.cube(3);
// console.log(a);

a = Matematik.cube(5); //static yaptıktan sonra nesne üzerinden kullanamayız
                    // bu şekilde kullanabiliriz
console.log(a);