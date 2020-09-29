function getTextFile(){

    fetch("example.txt").then(response => {
        return response.text(); //doyadaki verileri aldık texte çevirdik
    })
    .then(data => console.log(data)) //son halini data olarak aldık çıktı olarak
    .catch(err => console.log(err));
}

function getJsonFile(){

    fetch("example.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log(err));

}
function getExternalAPI(){
    fetch("https://api.exchangeratesapi.io/latest")
    .then(response => response.json())
    .then(data => console.log(data.rates.TRY))
    .catch(err => console.log(err));
}


// getTextFile();
// getJsonFile();
getExternalAPI();