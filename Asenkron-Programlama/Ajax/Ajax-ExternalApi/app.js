const btn = document.getElementById("change");
btn.addEventListener("click",change);

function change(){
    const xhr = new XMLHttpRequest();

    xhr.open("GET","https://api.exchangeratesapi.io/latest");

    xhr.onload= function(){
        if(this.status){

            const response = JSON.parse(this.responseText);
            const tl = response.rates.TRY;
            const euro = Number(document.getElementById("amount").value); 
            

            document.getElementById("tl").value = euro*tl;
        }
    }


    xhr.send();
}