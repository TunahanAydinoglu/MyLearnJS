// function UI(){

// }
class UI{
    static addFilmToUI(newFilm){
        const filmList = document.getElementById("films");
        filmList.innerHTML +=`
        <tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
      </tr>
        `;
    }
    static clearInputs(element1,element2,element3){
        element1.value = "";
        element2.value = "";
        element3.value = "";
    }
    static displayMessages(message,type){
        const cardBody = document.querySelectorAll(".card-body")[0];
        const div = document.createElement("div");
        div.className = `alert alert-${type}`;
        div.textContent = message;

        cardBody.appendChild(div);

        setTimeout(function(){
            div.remove();
        },2200);
    }
    static loadAllFilms(films){
        films.forEach(function(film){
            UI.addFilmToUI(film);
        });
    }
    static deleteFilmUI(element){
        element.parentElement.parentElement.remove();
    }
    static clearAllFilmsFromUI(){
        const filmList = document.getElementById("films");

        while(filmList.firstElementChild !== null){
            filmList.firstElementChild.remove();
        }
    }
}
// UI.prototype.addFilmToUI = function(newFilm){

//     const filmList = document.getElementById("films");
//     filmList.innerHTML +=  `
//     <tr>
//     <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
//     <td>${newFilm.title}</td>
//     <td>${newFilm.director}</td>
//     <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
//   </tr>
//     `; 
// }

// UI.prototype.clearInputs = function(element1,element2,element3){
//     element1.value = "";
//     element2.value = "";
//     element3.value = "";
// }

// UI.prototype.displayMessages = function(message,type){
//     const cardBody = document.querySelectorAll(".card-body")[0];
   
//     const div = document.createElement("div");
//     div.className = `alert alert-${type}`;
//     div.textContent = message;

//     cardBody.appendChild(div);

//     setTimeout(function(){
//         div.remove();
//     },1400);
// }

// UI.prototype.loadAllFilms = function(films){
//     const ui = new UI();
//     films.forEach(function(film){
//         ui.addFilmToUI(film);
//     });
// }
// UI.prototype.deleteFilmUI = function(element){
//     element.parentElement.parentElement.remove();
// }
// UI.prototype.clearAllFilmsFromUI = function(){
//     const filmList = document.getElementById("films");
    
//     while(filmList.firstElementChild !== null){

//         filmList.firstElementChild.remove();

//     }
// }