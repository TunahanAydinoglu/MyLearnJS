const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

//UI objesini başlatalım
const ui = new UI();
//Storage objesi üret
const storage = new Storage();

//eventleri toplama

eventListeners();

function eventListeners(){

    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
       let films = storage.getFilmsFromStorage(); //storageden filmleri çektik
       ui.loadAllFilms(films); // UI' gönderdik
    });

    secondCardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);

}

function addFilm(e){

    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director === "" || url === ""){
        //hata
        ui.displayMessages("Boş alan bırakılamaz...","danger");

    }else{
        //Yeni Film
        const newFilm = new Film(title,director,url);
        ui.addFilmToUI(newFilm); //Arayüze Ekleme
        ui.clearInputs(titleElement,directorElement,urlElement);
        storage.addFilmToStorage(newFilm); 
        ui.displayMessages("Film başarıyla eklendi...","success");
    }
    e.preventDefault();
}

function deleteFilm(e){
    if(e.target.id === "delete-film"){
        ui.deleteFilmUI(e.target);
        storage.deleteFilmStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessages("Silme işlemi başarılı","warning");
    }
}

function clearAllFilms(){
    if(confirm("Tüm filmleri silmek istediğinize emin misiniz ? ")){
        ui.clearAllFilmsFromUI();
    storage.clearAllFilmsFromStorage();
    }
}