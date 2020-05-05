function asalSayi(sayi){
    let bll = false;
    let x;
    let asal = [];
    for(j=2;j<=sayi;j++){
        i=2;
        while(i<j){
            x = j%i;
            if(x == 0){
                bll= false;
                break;
            }
            i++;
        }
        if(x != 0){
            bll =true;
        }
        
        if(bll==true){
            asal.push(j);
        }
    }
    while(i<j){
        if(j%i === 0){
            break;
        }else{
            bll = true;
        }
        i++;
    }
    return asal;
}
function composite(sayi){
    let tekKompArr = [];
    let control = true;
    let asd = asalSayi(199);
    for(i=9;i<sayi;i++){
        control = true;
        if(i%2 != 0){
        for(t=0;t<=asd.length;t++){
              
            if(asd[t] == i){
                control = false;
             }
        }
        if(control === true){
            tekKompArr.push(i);
        }
        }
    }
    return tekKompArr;
}
function goldbach(gelenSayi){
    let tekKompArr = composite(gelenSayi);
    let asalSayiArr = asalSayi(gelenSayi);
    let denek= 1;
    let sonuc = [];

    for(i=0;i<=tekKompArr.length;i++){
       for(j=0;j<=asalSayiArr.length;j++){
        for(k=0;k<=gelenSayi;k++){
            denek = asalSayiArr[j] + 2*(k*k);
        if(tekKompArr[i] == denek){
            sonuc.push(tekKompArr[i]);
            break;
        }
        }
       }
    }
    return sonuc;
}
function sorgulama(dizi1,dizi2){
    var dizi3=dizi2.filter(onlyUnique);

    var array3 = dizi1.filter(function(obj) { return dizi3.indexOf(obj) == -1; });
    console.log(array3);
}
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}
sorgulama(composite(6000),goldbach(6000));

